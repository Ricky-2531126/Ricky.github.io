// 1. Fungsi Jam Real-time
function startClock() {
    setInterval(() => {
        const now = new Date();
        document.getElementById('live-clock').innerText = now.toLocaleTimeString('id-ID');
    }, 1000);
}
startClock();

// 2. Fungsi Toggle Dark Mode
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
    themeBtn.innerText = document.body.classList.contains('dark-mode') ? "Mode Terang" : "Mode Gelap";
};

// 3. Kalkulator Dampak Pohon
const calcBtn = document.getElementById('calc-btn');
calcBtn.addEventListener('click', () => {
    const trees = document.getElementById('tree-input').value;
    const result = document.getElementById('result-text');
    if(trees > 0) {
        result.innerText = `Luar biasa! ${trees} pohon akan menyerap sekitar ${trees * 22}kg CO2 per tahun.`;
    } else {
        result.innerText = "Masukkan jumlah pohon terlebih dahulu.";
    }
});

// 4. Manipulasi Teks Dinamis (Hover)
const title = document.getElementById('dynamic-title');
title.onmouseover = function() {
    this.innerText = "Pohon Adalah Kehidupan";
    this.style.color = "#4caf50";
};
title.onmouseout = function() {
    this.innerText = "Manfaat Pohon";
    this.style.color = "";
};

// 5. Efek Konsol pada Gambar
const treeImg = document.getElementById('forest-img');
treeImg.addEventListener('click', () => {
    console.log("Gambar hutan diklik oleh pengguna pada: " + new Date());
    alert("Ini adalah visualisasi hutan pinus yang asri.");
});