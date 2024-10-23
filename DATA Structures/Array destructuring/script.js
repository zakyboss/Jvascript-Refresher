'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order : function(starterIndex , mainIndex){
    return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]
 ] }
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

// working with data now
// taking elements from categories 
let [first1 , second]= restaurant.categories;
console.log(first1,second)

    //  if we wanted to take 1st element of categories and 4th 
    let [first2 , , ,fourth]= restaurant.categories;
    // console.log(first1,fourth)

    // assuming that we wanted to switch the third and second 
    let [category1,,category3]=restaurant.categories;
//     // let temp = category1;
//     // category1= category3;
//     // category3 = temp ;
//     console.log(category1,category3)
// [category1,category3]=[category3,category1];
// // console.log(first)
// console.log(category3,category1)
// console.log(category1,category3)



// let array = [1,2,4];
// let [j,k,l]= array ;
// console.log(j,k,l);
// [j,k,l]= [l,k,j];
// console.log(j,k,l)

console.log(restaurant.order(1,2))
