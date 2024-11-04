// Assignment ;
// CHAPTER : MATH EXPRESSIONS;

// Question no 01; 
// let a = 10;
// document.write("Result: " + " <br>" + "The value of a is : " + a + "<br>" + "-------------------------------- <br> <br> " );
// document.write("The value of ++a is : " + ++a + "<br> Now the value of a is " + a + "<br> <br> ");
// document.write("The value of a++ is : " + a++ + "<br> Now the value of a is " + a + "<br> <br> ");
// document.write("The value of --a is : " + --a + "<br> Now the value of a is " + a + "<br> <br> ");
// document.write("The value of a-- is : " + a-- + "<br> Now the value of a is " + a + "<br> <br> ");

// // Question no 02; 
// let a = 2;
// let b = 1;
// let result = --a - --b + ++b + b-- ; 
// document.write(result);
// // Explanation ;
// // --a; // 1 
// // --a - --b ;  // 1 - 0, // 1;
// // --a - --b + ++b;   // 1 + 0; // 0
// // --a - --b + ++b + b--;   // 1 - 0 + 1 + 1;  // 1+ 2; // 3
                  
// // Question no 03; 

// let x = prompt("Please enter your name");
// document.write(x + "!! Welcome to our website");


// // Question no 05;

// let num = prompt("Please enter a number");
// for(let i=1; i <= 10; i++){
//   if(num == ""){
//     document.write(5 + " X " + i + " = " + 5*i + "<br>");
//   }
//   else{
//     document.write(num + " X " + i + " = " + num*i + "<br>");
//   }

// }

// // // Question no 06;

// let sub1 = prompt("Enter your first  subject name ");
// let sub2 = prompt("Enter your Second subject name ");
// let sub3 = prompt("Enter your Third subject name ");


// let tMarks = 100 ;
// let mark1 = parseInt(prompt("Enter your first  subject's mark "));
// let mark2 = parseInt(prompt("Enter your Second   subject's mark "));
// let mark3 = parseInt(prompt("Enter your Third subject's  mark"));
// let subjMarks =  mark1 + mark2 + mark3;
// let totalPercent = subjMarks*100/300;

// document.write("Subject Total Marks Obtained Marks Percentage <br>");
// document.write(sub1 +"  \t " + tMarks + " \t  " + mark1 +  " \t  " + mark1*100/tMarks+ "% <br>");
// document.write(sub2 +"  \t " + tMarks + " \t  " + mark2 +  " \t  " + mark2*100/tMarks+ "% <br>");
// document.write(sub3 +"  \t " + tMarks + " \t  " + mark3 +  " \t  " + mark3*100/tMarks+ "% <br>");

// document.write(" " + " " + 300 + " " + " "+ subjMarks  +  " " + " "+ totalPercent+"%");
