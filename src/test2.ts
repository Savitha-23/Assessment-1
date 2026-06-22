
//Question 1:
let score: number = 75;
if(score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//Question 2:

let temp: number = 35;
if(temp >= 30)
{
    console.log("Its a hot day");

}
else {
    console.log("Its a normal day");
}

//Question 3:
let browser: string = "Chrome";
switch(browser) {
    case "Safari":
        console.log("Safari");
        break;
    case "Firefox":
        console.log("Firefox");
        break;
    case "Edge":
        console.log("Edge");
        break;

        default:
        console.log("Unknown browser");
    }

//Question 4:

for(let i = 1; i <= 20; i++){
    console.log(i);
}

// Question 5:

let sum: number = 1+2+3+4+5+6+7+8+9+10;
console.log(sum);

 //Question 6:
 
let add: number = 0;

for (let i = 1; i <= 10; i++) {
    add += i;
}

console.log(add);

//Question 7:

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


//Question 8:

let i = 2;
while (i <= 20) {
    console.log(i);
    i = i+2;
}

//Question 9:

let j = 5;
do {
    console.log(j);
    j--;
} while (j >= 1);

