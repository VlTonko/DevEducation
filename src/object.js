const inputValue = document.getElementById("inputValue");
const createdBtn = document.getElementById("createdBtn");
const removeValue = document.getElementById("removeValue");
const removeBtnVal = document.getElementById("removeBtnVal");
const removeId = document.getElementById("removeId");
const removeBtnId = document.getElementById("removeBtnId");
const removeBtnLast = document.getElementById("removeBtnLast");
const lists = document.getElementById("lists");
const temp = document.querySelector(".temp");
const next = document.querySelector(".next");

createdBtn.addEventListener('click', createEl);
removeBtnVal.addEventListener('click', removeElVal);
removeBtnId.addEventListener('click', removeElId);
removeBtnLast.addEventListener('click', removeElLast);