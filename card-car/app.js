var getcarname = document.getElementById("carName")
var getcarmodel = document.getElementById("carModel")
var getcaryear = document.getElementById("carYear")
var getcarcolor = document.getElementById("carColor")
var getcarprice = document.getElementById("carPrice")
var getcarimage = document.getElementById("carImage")
var getnewpage = document.getElementById("addedcar")

function addbut() {
    let carName = getcarname.value
    let carModel = getcarmodel.value
    let carYear = getcaryear.value
    let carColor = getcarcolor.value
    let carPrice = getcarprice.value
    let carImage = getcarimage.value

    let car = {
        name: carName,
        model: carModel,
        year: carYear,
        color: carColor,
        price: carPrice,
        image: carImage
    }
    if (carName == "" || carModel == "" || carYear == "" || carColor == "" || carPrice == "" || carImage == "") {
        alert("Please fill all the fields")
    }
    else {
        alert("car added successfully") 
        getnewpage.innerHTML += `
        <div class="card" style="width: 18rem; margin: 10px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease;" 
             onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)';" 
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)';">
      
          <img src="${car.image}" class="card-img-top" alt="..." style="height: 160px; object-fit: cover;">
      
          <div class="card-body" style="padding: 15px; background-color: #ffffff;">
            <h5 class="card-title" style="font-size: 18px; font-weight: bold; color: #1f2937;">
             Car Name:<span> ${car.name} </span>
            </h5>
            <p class="card-text" style="color: #374151;">Model: ${car.model}</p>
            <p class="card-text" style="color: #374151;">Year: ${car.year}</p>
            <p class="card-text" style="color: #374151;">Color: ${car.color}</p>
            <p class="card-text" style="color: #111827;">Price: <strong>$${car.price}</strong></p>
      
            <button onclick="this.parentNode.parentNode.remove()" 
                    style="padding: 6px 10px; margin-right: 5px; background-color: #ef4444; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease;"
                    onmouseover="this.style.backgroundColor='#dc2626'"
                    onmouseout="this.style.backgroundColor='#ef4444'">
              Delete
            </button>
      
            <button onclick="editr(this)" 
                    style="padding: 6px 10px; background-color: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease;"
                    onmouseover="this.style.backgroundColor='#2563eb'"
                    onmouseout="this.style.backgroundColor='#3b82f6'">
              Edit
            </button>
          </div>
        </div>
      `;
      
    }
        getcarname.value = "sd"
        getcarmodel.value = "sd"
        getcaryear.value = "sdsd"
        getcarcolor.value = "sd"
        getcarprice.value = "sd"
        getcarimage.value = "sd"
    
   

}

function editr(e) {

    
    console.log(e.parentNode.childNodes[1].textContent);
    var carname = prompt("Edit your price", e.parentNode.childNodes[1].textContent);
    var carmodel = prompt("Edit your model", e.parentNode.childNodes[3].textContent);
    var caryear = prompt("Edit your year", e.parentNode.childNodes[5].textContent);
    var carcolor = prompt("Edit your color", e.parentNode.childNodes[7].textContent);
    var carprice = prompt("Edit your price", e.parentNode.childNodes[9].textContent);
    var carimage = prompt("Edit your image", e.parentNode.childNodes[11].textContent);
    
    e.parentNode.childNodes[1].textContent = carname;
    e.parentNode.childNodes[3].textContent = carmodel;
    e.parentNode.childNodes[5].textContent = caryear;

    e.parentNode.childNodes[7].textContent = carcolor;
    e.parentNode.childNodes[9].textContent = carprice;
    e.parentNode.parentNode.childNodes[1].src = carimage;
}