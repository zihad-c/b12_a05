const heartIcons = document.querySelectorAll(".heart");
const heartCount = document.getElementById("heart-icon-text");
const callBtn = document.querySelectorAll(".call-btn");
const coinCount = document.getElementById("coin-icon-text");
const callHistoryContainer = document.getElementById("history");
let coins = parseInt(coinCount.textContent);

let totalHeartCount = 0;
heartCount.textContent = totalHeartCount;

heartIcons.forEach((heart) => {
heart.addEventListener("click", () => {
    heart.classList.toggle("active-heart");

    if (heart.classList.contains("active-heart")) {
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid");
    totalHeartCount++;
}
else {
    heart.classList.remove("fa-solid");
    heart.classList.add("fa-regular");
    totalHeartCount--;
}
if (totalHeartCount < 0) {
    totalHeartCount = 0;
}
heartCount.textContent = totalHeartCount;
console.log("Total hearts:", totalHeartCount);

})

})


function getCurrentTime () {
const now = new Date();
return now.toLocaleTimeString();
} 


callBtn.forEach((btn) => {
btn.addEventListener("click", () => {
const card = btn.closest(".service-card")
const title = card.querySelector(".service-title").innerText;
const phone = card.querySelector(".phone").innerText;
alert (`Calling ${title} ${phone}`);

const historyEntry = document.createElement("div");
historyEntry.className = "history-entry flex justify-between items-center py-2 border-b border-gray-200";
const leftDiv = document.createElement("div");
leftDiv.className = "historyLeftTxt";
const titleElement = document.createElement("div");
titleElement.textContent = title;
titleElement.className = "text-base font-semibold";
const phoneElement = document.createElement("div");
phoneElement.textContent = phone;
phoneElement.className = "text-base text-gray-500";
leftDiv.appendChild(titleElement);
leftDiv.appendChild(phoneElement);


const rightDiv = document.createElement("div");
rightDiv.className = "history-time text-gray-500 text-base"
rightDiv.textContent = getCurrentTime();

historyEntry.appendChild(leftDiv);
historyEntry.appendChild(rightDiv);

callHistoryContainer.appendChild(historyEntry);

coins -= 20;
if (coins < 0) {
    coins = 0;
    coinCount.textContent = coins;
    alert (`You don't have enough coin to call`);
}

}

)
}

)