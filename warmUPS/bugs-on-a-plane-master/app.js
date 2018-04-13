var form = document.getElementById("airlineForm");
var submit = document.getElementById(submit);
var quert = document.querySelector;

function formAlertt() {



    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["traveLocation"].value;
    var diet= [];


    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "Last Name: " + lastName +
     "Age: " + age + "Gender: " + gender + "Travel Location: " +
     location + "Diet: " + diet +
      "Awesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);
