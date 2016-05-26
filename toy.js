//TOY PROBLEM 1: Write a function that takes in a string, and have it return the string in alphabetical order.

var toy = "Wheels on the bus go round and round";
function shawnsort(str){
	var newstr ="";
	var abc = "abcdefghijklmnopqrstuvwxyz";
	var num = 0;
	while(num<=abc.length){
	for (var i = 0; i<str.length;i++){
		if (str[i].toLowerCase()==abc[num]){
			newstr+=str.slice(i,i+1);
		}
	}
	num +=1;}
	return newstr;
}



//TOY PROBLEM 2: Write a function that randomly creates and returns a hex color code. Remember, hex color codes are comprised of 6 characters led by a hash. Each character could be any number 0-9 or any letter A-F.

function randColor(){
	var num1 = Math.round(Math.random() * 255);
	var num2 = Math.round(Math.random() * 255);
	var num3 = Math.round(Math.random() * 255);
    num1 = num1.toString(16);
    num2 = num2.toString(16);
    num3 = num3.toString(16);
  if (num1.length<2){
    num1 = "0" + num1;
  }
   if (num2.length<2){
    num2 = "0" + num2;
  }
   if (num3.length<2){
    num3 = "0" + num3;
  }
	var color = "#" + num1.toString(16) + num2.toString(16) + num3.toString(16);
	return color;
}