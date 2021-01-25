"use strict";
var ourForm = document.getElementById('ourForm');
var headerContent=['Car Model','Model Year','Manufacturer','Price'];
var ourParentTable=document.getElementById('parrentTable');
var total= document.getElementById('total')

var garagiArray=[]


function Garagi(carNmae,carYear,manufacturer){
    this.carName=carNmae;
    this.carYear=carYear;
    this.manufacturer=manufacturer;
    this.price=generateRandom();

    garagiArray.push(this);

}

/*Garagi.prototype.renderItems=function(){
    var GaragiRow = document.createElement('tr');

    var itemName= document.createElement('td');
    itemName.textContent=this.carName;
    GaragiRow.appendChild(itemName);

    var carYear= document.createElement('td');
    carYear.textContent=this.carYear;
    GaragiRow.appendChild(carYear);

    var manufacturer= document.createElement('td');
    manufacturer.textContent=this.manufacturer;
    GaragiRow.appendChild(manufacturer);

    var price= document.createElement('td');
    price.textContent=this.price;
    GaragiRow.appendChild(price);

    ourParentTable.appendChild(GaragiRow);

    total.textContent= ' the total is =' + calculateTotal();


}*/

function renderHeader(){

    var headerRow= document.createElement('tr')
    var th;

    for (let index = 0; index < headerContent.length; index++) {
        th = document.createElement('th')
        th.textContent=headerContent[index]
        headerRow.appendChild(th)

        console.log(th)
        
    }
    ourParentTable.appendChild(headerRow)


}

function renderList(){

    renderHeader();
    for (let index = 0; index < garagiArray.length; index++) {

        var GaragiRow = document.createElement('tr');

        var itemName= document.createElement('td');
        itemName.textContent=garagiArray[index].carName;
        GaragiRow.appendChild(itemName);
    
        var carYear= document.createElement('td');
        carYear.textContent=garagiArray[index].carYear;
        GaragiRow.appendChild(carYear);
    
        var manufacturer= document.createElement('td');
        manufacturer.textContent=garagiArray[index].manufacturer;
        GaragiRow.appendChild(manufacturer);
    
        var price= document.createElement('td');
        price.textContent=garagiArray[index].price;
        GaragiRow.appendChild(price);
    


        var animeTableRowRemoveBtn = document.createElement('button');
        animeTableRowRemoveBtn.textContent = 'X';
        animeTableRowRemoveBtn.setAttribute('id', index);
    
        animeTableRowRemoveBtn.addEventListener('click', deleteAnimeFromList);
        GaragiRow.appendChild(animeTableRowRemoveBtn)
    
        ourParentTable.appendChild(GaragiRow);

        total.textContent= ' the total is =' + calculateTotal();

}
}

function generateRandom(){

    return (Math.floor(Math.random()*(1000-500))+500)

}

function calculateTotal(){
    var total=0;
    for (let index = 0; index < garagiArray.length; index++) {
        total=total+garagiArray[index].price;
        
    }
    return total;
}



function submitData(event){
    event.preventDefault();

    var carName=event.target.carmodel.value;
    var modelYear=event.target.modelyear.value;
    var manufacturer = event.target.manufacturer.value;

    var newItems = new Garagi(carName,modelYear,manufacturer)

    

    localStorage.setItem('garagilist',JSON.stringify(garagiArray));
    var animeTable = document.getElementById('parrentTable');
    animeTable.innerHTML = '';
    renderList();
    var addAnimeForm = document.getElementById('ourForm');
    addAnimeForm.reset();


}

function checkList(){
    if (localStorage.getItem('garagilist')){
        garagiArray=JSON.parse(localStorage.getItem('garagilist'))
        renderList();
    }
}

function deleteAnimeFromList(event){
    var selectedAnime = event.target.id;
    garagiArray.splice(selectedAnime, 1);
    localStorage.setItem('garagilist', JSON.stringify(garagiArray));
    var animeTable = document.getElementById('parrentTable');
    animeTable.innerHTML = '';
    renderList();
  }


/*function checkLS() {
    if (localStorage.getItem('garagilist')) { 
        var lsObj = JSON.parse(localStorage.getItem('garagilist'));
       
        for (let index = 0; index < lsObj.length; index++) {
            var newWishListObject = new Garagi(lsObj[index].carName, lsObj[index].carYear, lsObj[index].manufacturer) // create a new obj            
            newWishListObject.renderItems() 
        }
    }
}*/






ourForm.addEventListener('submit',submitData);
//checkLS();
 checkList()