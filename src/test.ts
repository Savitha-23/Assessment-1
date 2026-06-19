let EMPname: string = "Savitha";
let ID: number = 2322;
let dept: string = "ECE";
let salary: number = 50000;
let Experience: number = 5;
let location: string = "Chennai";

let bonus: number = 5000;
if (salary > 40000) {
    console.log("Bonus is added to the salary");
} else {
    console.log("Bonus is not added to the salary");
}

if (Experience < 3) {
    console.log("Employee is Junior");
} else {
    console.log("Employee is Senior");  
}

if (location === "Chennai") {
    console.log("Employee is located in Chennai");
} else {
    console.log("Employee is not located in Chennai");
}

console.log(salary += bonus);