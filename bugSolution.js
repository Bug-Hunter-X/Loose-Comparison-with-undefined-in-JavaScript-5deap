function myFunc(a, b) {
  if (a === undefined || b === undefined) {
    return 0; // Handle undefined arguments using strict equality
  }
  return a + b; 
}

//Improved Handling for undefined arguments
function myFuncImproved(a, b) {
  a = a === undefined ? 0 : a; //default value for undefined
  b = b === undefined ? 0 : b; //default value for undefined
  return a + b;
}