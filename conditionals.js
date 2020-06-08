const whichSchool  = function (age) {
  if (age >= 1 && age < 13){
  return ("Elementary School");
}else if(age>=13 && age<=18){
  return("Secondary School");
}else{
  return("Lighthouse Labs");
}
}// Your code in here ...function whichSchool(age) {
// Your code in here …
console.log(whichSchool(12));