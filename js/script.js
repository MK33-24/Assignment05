let buttons = document.getElementsByClassName("heartBtn");
  let heartCounter = document.getElementById("heartCount");
  let count = 0;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      count++;
      heartCounter.innerText = count;
   }
}

let coins = 100;
const callButtons = document.getElementsByClassName("callBtn");
const coinCount = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");

coinCount.innerText = coins;


for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].onclick = function () {
    const card = this.closest(".bg-white");  
    const title = card.querySelector(".serviceName").innerText;  
    const info  = card.querySelector(".serviceNumber").innerText;
  
    if(coins >= 20){
      coins -= 20;
      coinCount.innerText = coins;
    alert("📞 Calling..." + title + " " + info);
const leftPart = document.createElement("div");
leftPart.innerHTML = `<strong>${title}</strong><br>${info}`;

const time = document.createElement("span");
time.className = "text-sm text-gray-500";
time.innerText = new Date().toLocaleTimeString();

const li = document.createElement("li");
li.className = "flex justify-between items-center  py-4";
li.appendChild(leftPart);
li.appendChild(time);

historyList.appendChild(li);
    }
    else{
      alert("❌Insufficient Coin")
    }
  }
 
}
clearBtn.onclick = function () {
  historyList.innerHTML="";
};

let copyCount = 0;
const copyButtons = document.querySelectorAll(".copyBtn");

for (let btn of copyButtons) {
  btn.addEventListener("click", function () {
    const card = this.closest(".bg-white");  
    const title = card.querySelector(".serviceName").innerText;  
    const info  = card.querySelector(".serviceNumber").innerText;

    navigator.clipboard.writeText(info);
    copyCount++;
    document.getElementById("copyCounter").innerText = copyCount;

    alert(`✅ Copied: ${title} - ${info}`);
 });
}