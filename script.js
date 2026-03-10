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
        TOU: {
            unit: 1500000,
            monthly: [98000, 112000, 87000, 92000, 104000, 133000, 119000, 145000, 115000, 113000, 165000, 164000]
        },

        อาคารเรียน: {
            unit: 500000,
            monthly: [38000, 42000, 39000, 37000, 41000, 52000, 48000, 55000, 43000, 42000, 51000, 50000]
        },

        อาคารวิศววัฒนะ11ชั้น: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

        CB5,อาคารพระจอมเกล้าราชานุสรณ์190ปี,วิศวกรรมเคมี: {
            unit: 94000,
            monthly: [50000, 44000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         อาคารสัมมนา: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         คณะพลังงาน: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         สนอ: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         อาคารการเรียนรู้พหุวิทยาการ: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         คณะเทคโนโลยีสารสนเทศ: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         อาคารเรียนและปฏิบัติการพื้นฐานทางวิทยาศาสตร์: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         หอพัก: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }

    },
    "2567": {
        TOU: {
            unit: 1500000,
            monthly: [98000, 112000, 87000, 92000, 104000, 133000, 119000, 145000, 115000, 113000, 165000, 164000]
        },

        อาคารเรียน: {
            unit: 500000,
            monthly: [38000, 42000, 39000, 37000, 41000, 52000, 48000, 55000, 43000, 42000, 51000, 50000]
        },

        อาคารวิศววัฒนะ11ชั้น: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

        CB5,อาคารพระจอมเกล้าราชานุสรณ์190ปี,วิศวกรรมเคมี: {
            unit: 94000,
            monthly: [50000, 44000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         อาคารสัมมนา: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         คณะพลังงาน: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         สนอ: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         อาคารการเรียนรู้พหุวิทยาการ: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         คณะเทคโนโลยีสารสนเทศ: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         อาคารเรียนและปฏิบัติการพื้นฐานทางวิทยาศาสตร์: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         หอพัก: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }

    },
    "2568": {
        TOU: {
            unit: 1500000,
            monthly: [98000, 112000, 87000, 92000, 104000, 133000, 119000, 145000, 115000, 113000, 165000, 164000]
        },

        อาคารเรียน: {
            unit: 500000,
            monthly: [38000, 42000, 39000, 37000, 41000, 52000, 48000, 55000, 43000, 42000, 51000, 50000]
        },

        อาคารวิศววัฒนะ11ชั้น: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

        CB5,อาคารพระจอมเกล้าราชานุสรณ์190ปี,วิศวกรรมเคมี: {
            unit: 94000,
            monthly: [50000, 44000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         อาคารสัมมนา: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         คณะพลังงาน: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         สนอ: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         อาคารการเรียนรู้พหุวิทยาการ: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         คณะเทคโนโลยีสารสนเทศ: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         อาคารเรียนและปฏิบัติการพื้นฐานทางวิทยาศาสตร์: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

         หอพัก: {
            unit: 226000,
            monthly: [122000, 104000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }

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

if (!count) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}

localStorage.setItem("visitorCount", count);
document.getElementById("visitorCount").innerText = count;

//เก็บสถิติการเข้าชมหน้าเว็บเพจ//

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const key = 'v_stats_global_counter';
        let count = localStorage.getItem(key) || 0;

        count = parseInt(count) + 1;
        localStorage.setItem(key, count);

        const target = document.getElementById('v-stats-display-large');
        if (target) {
            runCounter(target, 0, count, 2000); // 2 วินาทีเพื่อให้ดูอลังการ
        }
    });

    function runCounter(el, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            el.innerText = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
})();

//footer//

// ฟังก์ชันสำหรับจัดการพฤติกรรมการคลิก (ถ้าต้องการเก็บสถิติหรือ Log)
document.querySelectorAll('.btn-social').forEach(button => {
    button.addEventListener('click', function (e) {
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