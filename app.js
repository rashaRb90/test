"use strict";
var ourForm = document.getElementById('ourForm');
var headerContent=['Car Model','Model Year','Manufacturer','Price'];
var ourParentTable=document.getElementById('parrentTable');
var garagiArray=[]


function Garagi(carNmae,carYear,manufacturer){
    this.carName=carNmae;
    this.carYear=carYear;
    this.manufacturer=manufacturer;
    this.price=''

    garagiArray.push(this);

}

Garagi.prototype.renderItems=function(){
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






}

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
    
        ourParentTable.appendChild(GaragiRow);
        
    }
}



function submitData(event){
    event.preventDefault();

    var carName=event.target.carmodel.value;
    var modelYear=event.target.modelyear.value;
    var manufacturer = event.target.manufacturer.value;

    var newItems = new Garagi(carName,modelYear,manufacturer)

    newItems.renderItems();

    localStorage.setItem('garagilist',JSON.stringify(garagiArray));


}

function checkList(){
    if (localStorage.getItem('garagilist')){
        garagiArray=JSON.parse(localStorage.getItem('garagilist'))
        renderList();
    }
}




renderHeader();
ourForm.addEventListener('submit',submitData);
checkList();








