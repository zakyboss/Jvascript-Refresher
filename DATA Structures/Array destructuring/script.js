'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
const arr = [1,2,3];
// assuming that we wanted to copy each element of the array to a variable we would 
let a = arr[0]
let b= arr[1]
let c= arr[2]
console.log(a,b,c)
// The other way we can do it 
const [x,y,z]=arr ;
console.log(x,y,z)
// The original array is not destroyed