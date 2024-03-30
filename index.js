let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log('drivers')

const returnFirstTwoDrivers = (drivers) => {
    return  ['Antonia', 'Nuru']
}

const returnLastTwoDrivers = (drivers) => {
    return  ['Amari', 'Mo']
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(num){
    return num*multiplier;}}

 const fareDoubler= function(num){
    return num*2;

 }

 const fareTripler= function(num){
    return num*3;

 }

 function selectDifferentDrivers(drivers,returnFirstTwoDrivers ){
    return ['Antonia', 'Nuru']

 }

 function selectDifferentDrivers(drivers,returnLastTwoDrivers){
    return  ['Amari', 'Mo']
}

 

 
 
