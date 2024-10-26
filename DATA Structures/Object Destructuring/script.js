'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// console.log(restaurant.name)
              // *************** Destructuring Objects*************
    //   we use curly brackets and inside the attribute name exactly as it is 
    // Unlike arrays the order does not matter so we actually dont need to skip an element or space 
// let {openingHours,categories}=restaurant
// console.log(openingHours,categories)

// ********incase we desired to change the property names in the object ************
let {name:restaurantName,categories:restaurantCategories,openingHours:hours}=restaurant
console.log(restaurantName,hours,restaurantCategories)
  //  ********Mutating variables*********
  let a = 111;
  let b = 999;
  const obj ={
    a:23,
    b:7 ,
    c:14
  };
  ({a,b}=obj);
  console.log(a,b);
  const {fri:{open:o,close:c},}=hours;
  console.log(o , c)