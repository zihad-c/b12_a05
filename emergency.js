const heartIcons = document.querySelectorAll(".heart");
const heartCount = document.getElementById("heart-icon-text");

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