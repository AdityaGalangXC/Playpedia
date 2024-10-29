const dropdownButton = document.getElementById("dropdownNavbarLink");
const dropdownMenu = document.getElementById("dropdownNavbar");

// Close dropdown on outside click
document.addEventListener("click", (event) => {
  const isClickInside = dropdownNavbarLink.contains(event.target) || dropdownMenu.contains(event.target);
  if (!isClickInside) {
    dropdownMenu.classList.add("hidden"); // Hide dropdown
  }
});

// Toggle dropdown on button click
dropdownNavbar.addEventListener("click", (event) => {
  dropdownMenu.classList.toggle("hidden"); // Show/Hide dropdown
});

// Anti Inspect + Countdown with Localhost Whitelist
const startDate = new Date();
const targetDate = new Date(startDate);
targetDate.setDate(startDate.getDate() + 90);

// Check if running on localhost
const isLocalhost = window.location.hostname === 'localhost' || 
                  window.location.hostname === '127.0.0.1' ||
                  window.location.hostname === '';

// Hanya jalankan anti-inspect jika bukan di localhost
if (!isLocalhost) {
   // Array URLs audio
   const audioURLs = [
       'https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Never+Gonna+Give+You+Up-+Original&filename=mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3',
       // Tambahkan URL backup lainnya
   ];

   let bypassAttempts = 0;
   let audioElements = [];

   function preloadAudios() {
       audioURLs.forEach(url => {
           const audio = new Audio(url);
           audio.preload = 'auto';
           audioElements.push(audio);
       });
   }

   function playRickroll() {
       bypassAttempts++;
       
       audioElements.forEach(audio => {
           audio.play().catch(() => {
               document.addEventListener('click', () => audio.play(), { once: true });
           });
       });

       const newAudio = new Audio(audioURLs[0]);
       audioElements.push(newAudio);
       newAudio.play();

       if (bypassAttempts > 2000) {
           let spamCount = 0;
           const maxSpam = 2000;
           const spamInterval = setInterval(() => {
               alert("Nice Try! 🎵 Never gonna give you up 🎵");
               spamCount++;
               if (spamCount >= maxSpam) clearInterval(spamInterval);
           }, 500);
       }

       setTimeout(() => {
           window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
       }, Math.random() * 3000);

       const hiddenAudio = document.createElement('audio');
       hiddenAudio.src = audioURLs[0];
       hiddenAudio.loop = true;
       document.body.appendChild(hiddenAudio);
       hiddenAudio.play();
   }

   // Anti inspect element events
   document.addEventListener('contextmenu', function(e) {
       e.preventDefault();
       playRickroll();
   });

   const restrictedKeys = [
       { ctrl: true, shift: true, code: 73 },  // Ctrl+Shift+I
       { code: 123 },                          // F12
       { ctrl: true, code: 85 },               // Ctrl+U
       { ctrl: true, shift: true, code: 67 },  // Ctrl+Shift+C
       { alt: true, code: 68 }                 // Alt+D
   ];

   document.addEventListener('keydown', function(e) {
       for (let combo of restrictedKeys) {
           if (
               (!combo.ctrl || e.ctrlKey) &&
               (!combo.shift || e.shiftKey) &&
               (!combo.alt || e.altKey) &&
               e.keyCode === combo.code
           ) {
               e.preventDefault();
               e.stopPropagation();
               playRickroll();
               return false;
           }
       }
   });

   let devtools = function() {};
   devtools.toString = function() {
       playRickroll();
       return '';
   }

   let windowWidth = window.innerWidth;
   window.addEventListener('resize', function() {
       if (window.innerWidth !== windowWidth) {
           windowWidth = window.innerWidth;
           if (window.innerWidth - window.outerWidth > 200) {
               playRickroll();
           }
       }
   });

   // Console protection
   console.defaultLog = console.log.bind(console);
   console.log = function() {
       playRickroll();
       console.defaultLog(...arguments);
   }

   // Performance monitoring
   let lastTime = performance.now();
   let frame = 0;
   function checkPerformance() {
       frame++;
       const currentTime = performance.now();
       if (currentTime - lastTime > 200) {
           playRickroll();
       }
       lastTime = currentTime;
       requestAnimationFrame(checkPerformance);
   }

   preloadAudios();
   requestAnimationFrame(checkPerformance);
   
   // Console warning untuk production
   console.warn('%cStop!', 'color: red; font-size: 30px; font-weight: bold;');
   console.warn('%cIni adalah fitur browser untuk developer!', 'font-size: 20px;');
} else {
   // Console message untuk localhost
   console.log('%cDevelopment Mode - Anti-Inspect Disabled', 'color: green; font-size: 14px; font-weight: bold;');
}

// Countdown function (tetap jalan di localhost)
function updateCountdown() {
   const now = new Date().getTime();
   const distance = targetDate - now;
   
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
   document.getElementById('countdown').innerHTML = 
       `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
   
   if (distance < 0) {
       clearInterval(x);
       document.getElementById('countdown').innerHTML = "Waktu Sudah Habis!";
   }
}

setInterval(updateCountdown, 1000);
updateCountdown();
