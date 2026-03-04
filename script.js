const monthLabels = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน',
    'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
    'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
];


const baseColors = [
    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0",
    "#9966FF", "#FF9F40", "#E74C3C", "#1ABC9C",
    "#F39C12", "#2ECC71", "#3498DB", "#9B59B6"
];

const dataMaster = {
    "2566": {
        "อาคาร KX": { unit: 1568000, monthly: [108000, 125000, 102000, 95000, 105000, 138000, 135000, 162000, 157000, 148000, 145000, 148000] },
        "อาคารคณะ IT": { unit: 94000, monthly: [50000, 44000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        "สำนักงานหอสมุด": { unit: 226000, monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        "อาคารอธิการบดี": { unit: 24433, monthly: [0, 0, 0, 0, 0, 0, 0, 0, 364, 255, 707, 640] }
    },
    "2567": {
        "อาคาร KX": { unit: 1612000, monthly: [132000, 127000, 122000, 125000, 115000, 155000, 148000, 160000, 150000, 138000, 115000, 125000] },
        "อาคารคณะ IT": { unit: 102000, monthly: [9000, 8500, 8000, 9000, 8500, 10000, 9500, 11000, 9000, 7000, 6500, 6000] },
        "สำนักงานหอสมุด": { unit: 240000, monthly: [22000, 20000, 18000, 21000, 19000, 25000, 23000, 24000, 20000, 18000, 15000, 15000] },
        "อาคารอธิการบดี": { unit: 26500, monthly: [500, 450, 400, 550, 600, 700, 800, 900, 850, 750, 700, 650] }
    },
    "2568": {
        "อาคาร KX": { unit: 1750000, monthly: [140000, 135000, 130000, 135000, 125000, 165000, 155000, 170000, 160000, 150000, 135000, 150000] },
        "อาคารคณะ IT": { unit: 115000, monthly: [10000, 9500, 9000, 10000, 9500, 11000, 10500, 12000, 10500, 8500, 7500, 7000] },
        "สำนักงานหอสมุด": { unit: 255000, monthly: [24000, 22000, 20000, 23000, 21000, 27000, 25000, 26000, 22000, 20000, 17000, 18000] },
        "อาคารอธิการบดี": { unit: 28000, monthly: [600, 550, 500, 650, 700, 800, 900, 1000, 950, 850, 800, 700] }
    }
};

let currentBuilding = null;

function populateBuildings() {
    const select = document.getElementById("buildingSelect");
    select.innerHTML = "";
    const buildings = Object.keys(dataMaster["2568"]);
    buildings.forEach(b => {
        let option = document.createElement("option");
        option.value = b;
        option.textContent = b;
        select.appendChild(option);
    });
    currentBuilding = buildings[0];
}

function selectBuilding(name) {
    currentBuilding = name;
    document.querySelectorAll(".dot").forEach(dot => {
        dot.classList.remove("active-dot");
        if (dot.dataset.name === name) {
            dot.classList.add("active-dot");
        }
    });
    document.getElementById("buildingSelect").value = name;
    refreshData();
}


function refreshData() {
    if (!currentBuilding) return;

    const year = document.getElementById("yearSelect").value;
    if (!dataMaster[year] || !dataMaster[year][currentBuilding]) return;

    const data = dataMaster[year][currentBuilding];

    document.getElementById("display-name").innerText = currentBuilding;
    document.getElementById("display-unit").innerText = data.unit.toLocaleString() + " kWh";

    const container = document.getElementById("energyCards");
    container.innerHTML = "";

    data.monthly.forEach((value, index) => {
        container.innerHTML += `
            <div class="energy-card" style="border-left:6px solid ${baseColors[index]};">
                <div class="energy-month">${monthLabels[index]}</div>
                <div class="energy-value">
                    ${value.toLocaleString()} kWh
                </div>
            </div>
        `;
    });
}

document.getElementById("yearSelect").addEventListener("change", refreshData);
document.getElementById("buildingSelect").addEventListener("change", e => selectBuilding(e.target.value));

window.onload = () => {
    populateBuildings();
    const firstBuilding = Object.keys(dataMaster["2568"])[0];
    selectBuilding(firstBuilding);
};
// ===== Visitor Counter (Local) =====
let count = localStorage.getItem("visitorCount");

if(!count){
    count = 1;
} else {
    count = parseInt(count) + 1;
}

localStorage.setItem("visitorCount", count);
document.getElementById("visitorCount").innerText = count;

//footer//

// ฟังก์ชันสำหรับจัดการพฤติกรรมการคลิก (ถ้าต้องการเก็บสถิติหรือ Log)
document.querySelectorAll('.btn-social').forEach(button => {
    button.addEventListener('click', function(e) {
        const platform = this.innerText;
        console.log(`กำลังนำคุณไปยังหน้า ${platform} ของ EESH KMUTT...`);
        // คุณสามารถเพิ่ม Code Google Analytics ตรงนี้ได้
    });
});

// อัปเดตปี Copyright อัตโนมัติ (แถมให้ครับ จะได้ไม่ต้องมาแก้ทุกปี)
const currentYear = new Date().getFullYear();
const copyrightText = document.querySelector('.footer-bottom p');
if (copyrightText) {
    copyrightText.innerHTML = `© ${currentYear} Energy Environment Safety and Health (EESH). All Rights Reserved.`;
}