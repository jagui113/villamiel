var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = '¡QuÍbole!';
} else if (hourNow > 12){
  greeting ='¡QuÍbole!';
} else if (hourNow > 0) {
  greeting = '¡QuÍbole!';
} else {
  greeting = '¡QuÍbole!';
}

document.write('<h4>'+ greeting + '</h4>');
