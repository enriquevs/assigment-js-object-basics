/**
 * createNameObject()
 *
 * Write a function called `createNameObject` that takes a full first
 * & last name string and returns an object with `firstName`
 * and `lastName` properties that have string values.
 *
**/


// ++ YOUR CODE HERE
function createNameObject(fullName){
  var name = fullName.split(" "); // divide las palabras dentro de un array
  var object = {}; // se va a crear un nuevo objeto
    object["firstName"] = name[0]; //de var name toma el valor de la posision 0
    object["lastName"] = name[1]; //de var name toma el valor de la posision 1
      return object; // se mjuestra el nuevo objeto con nombre y apellido
}






// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-03');
  console.log('%cFunction: createNameObject', 'background-color: green; color: white')
console.groupEnd();


var nameObj1 = createNameObject("Benzo Lorenzo")
var nameObj2 = createNameObject("Felipe Tortuga")
var nameObj3 = createNameObject("Lupe Maria")

/* ----------------------- TEST-1  ----------------------- */
// Function returns an object
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert(typeof nameObj1 === "object")
console.assert(typeof nameObj2 === "object")


/* ----------------------- TEST-2  ----------------------- */
// Function accepts full name string separated by space
//   returns object with `firstName` and `lastName` properties
//
/* ------------------------------------------------------ */
console.log('TEST-2');

console.assert(nameObj1.firstName === 'Benzo')
console.assert(nameObj1.lastName === 'Lorenzo')

console.assert(nameObj2.firstName === 'Felipe')
console.assert(nameObj2.lastName === 'Tortuga')

console.assert(nameObj3.firstName === 'Lupe')
console.assert(nameObj3.lastName === 'Maria')




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
