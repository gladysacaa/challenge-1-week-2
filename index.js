
let yearofBirth = prompt('Enter your Year of Birth:');
let year = new Date();
let currentYear = year.getFullYear();
age = currentYear - yearofBirth;

console.log(yearofBirth);

if (age <= 18) {
   console.log( 'You are a Minor');
}
else if (age <= 36){
    console.log('You are a Youth');
}
else {
    console.log('You are an Elder');
}