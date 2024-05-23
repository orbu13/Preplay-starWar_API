const getArray = JSON.parse(localStorage.getItem("array"))

let body = document.querySelector("body")

getArray.forEach(element =>{
    const creatingDiv = document.createElement("div")
    creatingDiv.classList.add("creatingDiv")

    const creatingButton = document.createElement("button")
    creatingButton.innerText = "Delete from WishList"
    creatingButton.classList.add("creatingButton")
    creatingButton.id = element
    creatingButton.addEventListener("click", deleteFromWishList)
    
    const planeName = document.createElement("h2")
    planeName.classList.add("planeName")
    
    creatingDiv.appendChild(planeName)
    creatingDiv.appendChild(creatingButton)
    body.append(creatingDiv)
    
    planeName.innerText = "Plant Name: " + element
    console.log(element);
})

function deleteFromWishList(e){
    console.log(e.target.id);
    if(getArray.includes(e.target.id)){
        getArray.splice(getArray.indexOf(e.target.id), 1)
        e.target.parentElement.remove()
        localStorage.setItem("array", JSON.stringify(getArray))
    }else{
    }
}


//  function moveToWishListPage(e){
    // if(array.includes(e.target.id)){
    //     array.splice(array.indexOf(e.target.id), 1)
    //   }else{
    //     e.target.innerText = "Remove from WishList"
    //     array.push(e.target.id)
    //   }
    //   localStorage.setItem("array", JSON.stringify(array))
    // }