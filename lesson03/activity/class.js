import { userInfo } from "os";

const mac = {screenLarge: "Desktop", screenMedium: "Laptop",
screenSmall: "Tablet",
screenExtraSmall: "Phone"};
for(const screen in mac){
    console.log(mac[screen])
}


const mac = {screenLarge: "Desktop", screenMedium: "Laptop", screenSmall: "Tablet",
screenExtraSmall: "Phone"}
console.log(Object.keys(mac));


console.log(Object.values(mac));


console.log(Object.entries(mac));


console.log(mac);


// JSON
$(function(){

    const cars = [
        {"make":"Ford", "model":"Mustang", "year": 2010, "color": "black" },
        {"make":"Chevy", "model":"Corvette", "year": 1984, "color": "red" },
        {"make":"Jeep", "model":"Wrangler", "year": 1999, "color": "silver"}
    ];

    let carsHTML = cars.map(function(el){
        return car = `<article class="car"><ul><li class="car_make">${el.make}
        </li>
        <li class="car_model">${el.model}</li><li class="car_details">
        Color: ${el.color}</li>
        <li class="car_details">Year: ${el.year}</li></ul></article>`;
    });

    $(".cars").append(carsHTML);
});


// HW lesson 2. use mixin. add 2 css functions
// css-tricks.com/user mix ins