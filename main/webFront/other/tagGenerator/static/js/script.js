let tags = []

function addTag(e){

    let code = (e.keyCode ? e.keyCode : e.which);
    if(code != 13){
        return;
    }

    let tag = e.target.value.trim();
 
    if(tag.length < 1 || tags.includes(tag)){
        return;
    }
    

    tags.push(tag);
    let tagItem = document.createElement("div");
    tagItem.classList.add("item");
    tagItem.innerHTML = `
        <span class='del-btn' onclick='delTag(this, "${tag}")'>
            &times;
        </span>
        <span>${tag}</span>
    `;
    document.querySelector(".tag-input .tag-list").appendChild(tagItem);
    e.target.value = "";
}

function delTag(ref, tag){
    let parent = ref.parentNode.parentNode;
    parent.removeChild(ref.parentNode);
    let index = tags.indexOf(tag);
    tags.splice(index);
}

let myInput = document.querySelector(".tag-input input");
myInput.addEventListener("keyup", addTag);