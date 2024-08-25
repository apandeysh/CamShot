function required()// this is used to make the form resposinsive//
{
    var name = document.forms["feedback"]["Name"].value;
    var email = document.forms["feedback"]["Email"].value;
    var comment = document.forms["feedback"]["Comment"].value;
    var rate = document.forms["feedback"]["rate"].value;
    //to check if the user the name, email and comment//
    if(name=="" || email=="" || comment==""){
        alert("Please fill name, email and comment before submitting")
    }
    else
    {
        alert("Thanks for your review!!")
    }
}