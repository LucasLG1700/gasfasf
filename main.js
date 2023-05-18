function procurarNome(){
    var s= docuemnt.getElementaryById("").value;
    var found=0;
    var j;
    for(j=0; j<.legth; j++)
    {
        if(s==[j]){
        found=found+1;
        }
    }
    document.getElementById("").innerHTML=""+found+"";
    console.log(""+found+"");
}
namedOfTheStudent
function enviar()
{
    var displayStudentArray = [

    ];
    var namedOfTheStudent = document.getElementById("BN").value;
        console.log(namedOfTheStudent);
        namedOfTheStudentArray.push(namedOfTheStudent);

    console.log(namedOfTheStudentArray);
    document.getElementById("L1").innerHTML = displayStudentArray;
}
function sorting()
{
    namedOfTheStudentArray.sort();
    console.log(namedOfTheStudentArray);

    var displayStudentArraySorting = [];

    var lenghtOfNameOfStudentsArray = namedOfTheStudentArray.length;
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++)
    {
        displayStudentArraySorting.push("<h4>NAME - "+ namedOfTheStudentArra + "</h4>");
        console.log(displayStudentArraySorting);
    }
    var removeCommas = displayStudentArraySorting.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innnerHTML = removeCommas;
}