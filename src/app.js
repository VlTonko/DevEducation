function createEl(){
	if(!inputValue.value){return};
	let valueAdd = inputValue.value;
	linkedList.add(valueAdd); //add in inkedLIst
	const clone = temp.cloneNode(true);
	clone.textContent = valueAdd;
	inputValue.value = "";
	lists.textContent = "";
	rendering();
}

function removeElVal(){
	if(!removeValue.value){return};
	let valueRemoveVal = removeValue.value;
	linkedList.remove(valueRemoveVal) //remove from LinkedLIst
	removeValue.value = "";
	lists.textContent = "";
	rendering();
}

function removeElId(){
	if(!removeId.value){return};
	let valueRemoveId = removeId.value;
	linkedList.removeAt(valueRemoveId-1);
	removeId.value = "";
	lists.textContent = "";
	rendering();
}

function removeElLast(){
	linkedList.removeLast();
	lists.textContent = "";
	rendering();
}

function rendering(){
	let arrRender = linkedList.viewAll();
		for(i=0; i < arrRender.length; i++){
		let clone = temp.cloneNode(true);
		let divNext = next.cloneNode(true);
		clone.textContent = arrRender[i];
		clone.classList.add('border');
		divNext.textContent = arrRender[i+1] || 'null';
		divNext.classList.add('border');
		lists.appendChild(clone);
		lists.appendChild(divNext);
			if(i + 1 < arrRender.length){
				let elementP = document.createElement('p');
				elementP.textContent = "==>";
				lists.appendChild(elementP);
			}
		}
}