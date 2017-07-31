this.showSlider(2)

var activeElement;

function showSlider(number_of_items){
    getBullets(number_of_items);
}

function getBullets(number_of_items){
    var bullet = document.getElementById("bullet-list");
    for(let item = 0; item<number_of_items; item++){
        bullet_list_item = document.createElement("div")
        bullet.appendChild(bullet_list_item).setAttribute("onclick", "getActive(this)")
        bullet_list_item.classList.add("bullet");
        if(item == 0){
            bullet_list_item.classList.add("active");
            activeElement = bullet_list_item;
        }
    }
}

function getActive(element){
    if(!element.classList.contains("active")){
        deleteActive();
        element.classList.add("active")
        activeElement = element;
    }
}

function deleteActive(){
    activeElement.classList.remove("active")
}
