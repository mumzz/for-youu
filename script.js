
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

function checkGiftTime(){
  const now = new Date()

  const openTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    17, 0, 0, 0, 0
  )

  const btn = document.getElementById("openGiftBtn")
  const text = document.getElementById("giftCountdown")

  if(now >= openTime){
    text.innerText = "Sekarang kamu boleh membukanya 💛"
    btn.disabled = false
  } else {
    const diff = openTime - now

    const hours = Math.floor(diff / (1000*60*60))
    const minutes = Math.floor((diff / (1000*60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    text.innerText =
      hours + " jam " +
      minutes + " menit " +
      seconds + " detik lagi 💛"
    btn.disabled = true
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
img:"foto-1.jpg",
text:"Ini first date kitahh😍"
},
{
img:"foto-2.jpg",
text:"Detik detik sebelum film mulayy"
},
{
img:"foto-3.jpg",
text:"INI LUCU BANGET KITAAA💕"
},
{
img:"foto-4.jpg",
text:"Happy Birthday ya sayanggg, semoga panjang umur, sehat selalu, dan didatangkan hal hal baik kedepannyaa, i love youu cantikkkk💋🤞"
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












