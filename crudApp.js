let addBtn=document.getElementById("add_btn");
let parentList=document.getElementById("parentList");

addBtn.addEventListener("click",(evt)=>{
    //console.log(evt);
    //previous sibling of Add button, we have the text
    if(parentList.children[0].className=="emptyMsg")
    {
        parentList.children[0].remove();
    }
    let currentBtn=evt.currentTarget;
    let currentInput=currentBtn.previousElementSibling;
    console.log(currentInput.value);
    //add element to dom
    let currentChapter=currentInput.value;
    let newLi=document.createElement("li");
    //newLi.classList.add("list-group-item");
    newLi.className="list-group-item d-flex justify-content-between";
    //newLi.textContent=currentInput.value;
    newLi.innerHTML=`<h3 class="flex-grow-1">${currentChapter} </h3>
                    <button class="btn btn-danger mx-3" id="remove_btn" onclick="removeChapter(this)">Remove</button>
                    <button class="btn btn-warning" id="edit_btn" onclick="editChapter(this)">Edit</button>`;
    //add in parentList
    parentList.appendChild(newLi);
});

function removeChapter(element)
{
    element.parentElement.remove();
    if(parentList.children.length<=0)
    {
        let newEmptyMsg=document.createElement("h3");
        newEmptyMsg.classList.add("emptyMsg");
        newEmptyMsg.style.textAlign="center";
        newEmptyMsg.textContent="Nothing is here.Please add a chapter.";
        parentList.appendChild(newEmptyMsg);
    }
}

function editChapter(element)
{
    if(element.textContent=="Done")
    {
        element.textContent="Edit";
        let currChapterName=element.previousElementSibling.previousElementSibling.value;
        let currHeading=document.createElement("h3");
        currHeading.className="flex-grow-1";
        currHeading.textContent=currChapterName;
        element.parentElement.replaceChild(currHeading,element.previousElementSibling.previousElementSibling);
    }
    else if(element.textContent=="Edit")
    {
        element.textContent="Done";
        let currChapterName=element.previousElementSibling.previousElementSibling.textContent;
        let currInput=document.createElement("input");
        currInput.type="text";
        currInput.className="form-control";
        currInput.placeholder="Chapter Name";
        currInput.value=currChapterName;
        element.parentElement.replaceChild(currInput,element.previousElementSibling.previousElementSibling);
    }
}