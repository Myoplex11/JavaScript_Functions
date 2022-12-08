console.log("Hello World!\n==========\n");



// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        count = count * -1 // If count is negative, making it positive.
    }

    for(i =1; i <= count; i++) {
        if (i % 2 != 0) {        //checking if number is Odd.
            console.log(`${i} is an odd number`)
        }

    }
}

printOdds(100);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName = "John", age =12) {
    aboveSixteen = `Congrats ${userName}, you can drive!`
    belowSixteen =`Sorry ${userName}, but you need to wait until you're 16.`

    if (age < 16) {
        console.log(`${belowSixteen}`)
    } else {
        console.log(`${aboveSixteen}`)
    }

}

checkAge("Jake", 16);
checkAge("Mike", 15);
checkAge();

// Exercise 3:
console.log("EXERCISE 3:\n==========\n");
//Function quadCheck determines the where on the coordinate plane a point (x,y) lies.
const quadCheck = (x,y) => {
    if(x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4`);
    } else if (x === 0 && y !== 0) {
        console.log(`(${x}, ${y}) is on Y axis`);
    } else if (x !== 0 && y == 0) {
        console.log(`(${x}, ${y}) is on X axis`);
    } else if (x === 0 && y == 0) {
        console.log(`(${x}, ${y}) is at the origin`);
    }
}

quadCheck(0,2);
quadCheck(1,2);
quadCheck(-1,-3);
quadCheck(-8,0);
quadCheck(0,0);
quadCheck(3,-3);
quadCheck(-4,-1);


// Exercise 4:
console.log("EXERCISE 4:\n==========\n");
// Function triangleType determines type of triangle based on sides lenghts.
const triangleType = (side1, side2, side3) => {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        console.log("Traingle is not valid");
    } else if (side1 === side2 && side1 === side3 && side2 === side3) {
        console.log("We have a Equilateral Triangle");
    } else if ((side1 === side2 && side1 !==side3 )|| (side1 === side3 && side1!== side2 )|| (side2 === side3 && side2 !== side1)){
        console.log("We have an Isoceles Triangle");
    } else if (side1 !== side2 && side1 !== side3 && side2!== side3) {
        console.log("We have a Scalene Triangle");
    }

}

triangleType(2,2,2);
triangleType(1,3,3);
triangleType(1,1,2);
triangleType(4,3,2);


// Exercise 5
console.log("EXERCISE 5:\n==========\n");

const dataPlan = (planLimit, day, usage) => {
    daysRemaining = 30 - day;
    avgDaily = (planLimit / 30).toFixed(2);
    usageDaily = (usage / day).toFixed(2);
    monthDifference = ((30*usageDaily) - planLimit).toFixed(1) ;
    dataLeft = (planLimit - usage);
    recommendedDaily = (dataLeft / daysRemaining).toFixed(2);
    console.log(`You have used ${day} day, and have ${daysRemaining} days remaining`);
    console.log(`Average daily use limit: ${avgDaily} GB`);

    if (usageDaily > avgDaily) {
        console.log(`You are EXCEEDING your average daily use ${usageDaily} GB/day, continuing this high usage, you'll exceed your data plan by ${monthDifference} GB.`);
        console.log(`To stay below your data plan, use no more than ${recommendedDaily} GB/day`);
    } else if (usageDaily < avgDaily) {
        console.log("You are under your daily average usage.");
    } else if (usageDaily === avgDaily) {
        console.log("You are right on the daily average.");
    }
}

dataPlan(100 , 15, 56);
