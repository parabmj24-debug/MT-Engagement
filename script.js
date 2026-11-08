// Countdown uses India Standard Time (UTC+05:30) for the event.
const eventTime = new Date('2026-11-29T17:30:00+05:30').getTime();
function updateCountdown(){
 const remaining=Math.max(0,eventTime-Date.now());
 const values={days:Math.floor(remaining/86400000),hours:Math.floor((remaining%86400000)/3600000),minutes:Math.floor((remaining%3600000)/60000),seconds:Math.floor((remaining%60000)/1000)};
 Object.entries(values).forEach(([id,value])=>{const el=document.getElementById(id);if(el)el.textContent=String(value).padStart(2,'0')});
}
updateCountdown();
setInterval(updateCountdown,1000);

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("shareInvite").addEventListener("click",e=>{
 e.preventDefault();
 const msg="You're warmly invited to celebrate the engagement of Mitesh & Tanvi on 29 November 2026 at 5:30 PM. Venue: NKT Banquet, Kharkar Aali, Near Court Naka, Thane West. We would love to celebrate with you! ♥";
 window.open("https://wa.me/?text="+encodeURIComponent(msg),"_blank","noopener");
});
// Optional gentle synthesized chime; no audio file or autoplay.
let audioCtx=null,osc=null,gain=null,playing=false;
document.getElementById("musicToggle").addEventListener("click",()=>{
 const button=document.getElementById("musicToggle");
 if(!playing){
  audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();
  osc=audioCtx.createOscillator();gain=audioCtx.createGain();
  osc.type="sine";osc.frequency.value=523.25;gain.gain.value=0.018;
  osc.connect(gain);gain.connect(audioCtx.destination);osc.start();playing=true;button.textContent="Ⅱ";button.setAttribute("aria-label","Stop gentle chime");
 }else{osc.stop();osc=null;playing=false;button.textContent="♫";button.setAttribute("aria-label","Play gentle chime");}
});
