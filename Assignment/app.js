


let name = prompt("Please enter your name");
let fname = prompt("Please enter your father name");
let gender = prompt("Please enter your gender");
let course = prompt(" Please enter your course \n 1- Web And Mobile App Development \n 2- Digital Marketing \n 3- Graphic Designing\n 4 Introduction to Ai\n 5- Cyber security \n 6- Microsoft Power BI \n 7- UI/UX design");
let campus = prompt("Please enter your campus \n 1-Numaish \n 2- Muhammad Ali Society \n 3- Malir \n 4- Johar \n 5- Nazimabad \n 6- Gulshan")

document.write("Name:"  + name + " <br>");
document.write( "Father Name :"+ fname + " <br>");
document.write("Gender: " + gender + " <br>");

if(course == "Web And Mobile App Development" ||  course == "WMA" || course == "Web Development" || course == " Digital Marketing" || course == " DM" || course == "Graphic Designing" || course == "GD" || course ==  "Introduction to Ai" ||course == "Cyber security"|| course == "Microsoft Power BI"||  course == "UI/UX design" ){
 document.write(" Course:" + course + "<br>");
 if ( campus== "Numaish" ||campus== "Muhammad Ali Society" || campus== "Malir"|| campus== " Johar"|| campus== "  Nazimabad"|| campus== "  Gulshan" ) {
    
    document.write(" Campus:" +campus  + "<br>");
    alert("Congrats!! You are enrolled in SMIT")
 }
 else{
    document.write("Sorry Admission For other campuses are not open yet")
 }

}
else{
    document.write("Sorry Admission For other Courses are not open yet")
}
