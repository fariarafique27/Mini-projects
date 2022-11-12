
function myFunction() {
    var firstName = document.getElementById("fname").value;
    var middleName = document.getElementById("sname").value;
    var lastName = document.getElementById("lname").value;
    document.getElementById("demo").innerHTML = firstName+' '+middleName+' '+lastName;
}