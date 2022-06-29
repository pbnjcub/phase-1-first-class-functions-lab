// Code your solution in this file!
const returnFirstTwoDrivers = (function (names) {
    const firstTwo = names.slice(0, 2);
    return firstTwo;
    })

const returnLastTwoDrivers = (function (names) {
    const lastTwo = names.slice(-2)
    return lastTwo
})

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    const multiplier = (fare) => fare * int
    return multiplier
}

const fare = createFareMultiplier(int);

function fareDoubler(fare) {
    const double = fare * 2
    return double
}

function fareTripler(fare) {
    const triple = fare * 3
    return triple
}
let whichDrivers;

function selectDifferentDrivers(names, who) {
    return who(names);
}


    
//selectDifferentDrivers(names, function (name) {
  //  switch (who) {
    //    case returnFirstTwoDrivers():
      //      returnFirstTwoDrivers();
       // case returnLastTwoDrivers():
         //   whichDrivers = returnLastTwoDrivers();
   // } return whichDrivers;
//}




