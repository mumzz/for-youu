
let pages=document.querySelectorAll(".page")
let index=0

function showPage(i){
pages.forEach((p,idx)=>{
p.classList.remove("active","next","prev")
if(idx===i) p.classList.add("active")
else if(idx>i) p.classList.add("next")
else p.classList.add("prev")
})
let nav = document.getElementById("navBar")
if(i === 0){
nav.style.display = "none"
}else{
nav.style.display = "flex"
}
document.getElementById("storyPage").innerText = (i+1) + " / " + pages.length
}

function nextPage(){
if(index<pages.length-1){
index++
showPage(index)
}
}
showPage(index)

/* countdown */
let target=new Date(new Date().getFullYear(), new Date().getMonth(), 17)
setInterval(()=>{
let now=new Date()
let diff=target-now
let d=Math.floor(diff/1000/60/60/24)
document.getElementById("countdown").innerText=d+" hari lagi menuju hari spesialmu 💗"
},1000)


/* surat */
function openLetter(){
document.getElementById("letterText").classList.remove("hidden")
}

/* peluk */
let hugCount=0
function hug(){
hugCount++
document.getElementById("hugCount").innerText=hugCount+" PEYUKK ONLEN DARI AKUUH 🤍"
}

/* kue */
function blow(){
  const title = document.getElementById("cakeTitle")
  const btn = document.getElementById("blowBtn")
  const wish = document.getElementById("wish")

  if(title) title.innerText = "HAPPY BIRTHDAY SAYANGKUU 🎉🎉"
  if(btn) btn.style.display = "none"
  if(wish) wish.innerText = "WISH YOU ALL DA BESTT MY WORLDD💖🌷💛✨"
}



/* HADIAH RAHASIA TERBUKA TANGGAL 17 JAM 00:00 */
function revealGift(){
let g=document.getElementById("gift")
if(g && g.classList.contains("hidden")){
g.classList.remove("hidden")
g.classList.add("gift-reveal")
}
}

function checkGiftTime(){
let now=new Date()
let year=now.getFullYear()
let month=now.getMonth()
let openTime=new Date(year, month, 17, 0, 0, 0, 0)
if(now >= openTime){
revealGift()
}
}

checkGiftTime()
setInterval(checkGiftTime,1000)


/* hati jatuh */
for(let i=0;i<15;i++){
let heart=document.createElement("div")
heart.innerHTML="✨"
heart.className="floating-heart"
heart.style.left=Math.random()*100+"vw"
heart.style.animationDuration=(Math.random()*5+5)+"s"
document.body.appendChild(heart)
}

/* sparkle */
for(let i=0;i<30;i++){
let s=document.createElement("div")
s.className="sparkle"
s.style.left=Math.random()*100+"vw"
s.style.top=Math.random()*100+"vh"
s.style.animationDuration=(Math.random()*3+2)+"s"
document.body.appendChild(s)
}
function prevPage(){
if(index>0){
index--
showPage(index)
}
}

/*script countdown hadiah rahasia */ 
function startGiftCountdown(){
let target = new Date(Date.now() + 30*1000)
function update(){
let now = new Date()
let diff = target - now

if(diff <= 0){
document.getElementById("giftCountdown").innerText = "Sekarang kamu boleh membukanya 💗"
document.getElementById("openGiftBtn").disabled = false
return
}

let days = Math.floor(diff / (1000*60*60*24))
let hours = Math.floor((diff / (1000*60*60)) % 24)
let minutes = Math.floor((diff / (1000*60)) % 60)
let seconds = Math.floor((diff / 1000) % 60)

document.getElementById("giftCountdown").innerText =
days + "h " + hours + "j " + minutes + "m " + seconds + "d Waktu menuju kejutan kecil untuk kamuu sayangkuuuu 💗 ✨"
}
update()
setInterval(update,1000)
}
startGiftCountdown()

function openGift(){
let g = document.getElementById("gift")
let btn = document.getElementById("openGiftBtn")

g.classList.remove("hidden")
g.classList.add("gift-reveal")

btn.style.display = "none"
}

/* script galeri */
const memories = [
{
img:"/1.jpg",
text:"Hari biasa… tapi terasa spesial karena ada kamu."
},
{
img:"/2.jpg",
text:"Aku suka cara kamu tertawa tanpa sadar."
},
{
img:"https://picsum.photos/400?3",
text:"Setiap momen denganmu selalu terasa hangat."
},
{
img:"https://picsum.photos/400?4",
text:"Aku ga butuh banyak kenangan… cukup kamu."
}
]

let memoryIndex = 0

function renderMemory(){
let img = document.getElementById("memoryImage")
let text = document.getElementById("memoryText")
let indicator = document.getElementById("memoryIndicator")

img.style.opacity = 0

setTimeout(()=>{
img.src = memories[memoryIndex].img
text.innerText = memories[memoryIndex].text
img.style.opacity = 1
img.style.transform = "scale(1.05)"
setTimeout(()=>img.style.transform="scale(1)",400)
},200)

indicator.innerHTML = ""
memories.forEach((m,i)=>{
let dot = document.createElement("div")
dot.className="memory-dot"+(i===memoryIndex?" active":"")
indicator.appendChild(dot)
})
}

function nextMemory(){
memoryIndex++
if(memoryIndex >= memories.length) memoryIndex=0
renderMemory()
}

renderMemory()




