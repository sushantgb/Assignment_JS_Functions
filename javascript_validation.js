//function to validate form
function validate(){
    //declaring values in local variables from form fields
    var fname = document.forms["validform"]["fullname"];
    var db = document.forms["validform"]["dob"];
    var mail = document.forms["validform"]["email"];
    var rgn = document.forms["validform"]["region"];
    var pin = document.forms["validform"]["pincode"];
    //verification of name if empty or if length is smaller than 5 characters
    if(fname.value == ""||fname.value.length<5){
        alert("Enter your full name");
        document.validform.fullname.focus();
        return false;
    }
    //date of birth verification for empty field
    if(db.value ==""){
        alert("Enter your date of birth");
        document.validform.dob.focus();
        return false;
    }
    //email verification for empty field
    if(mail.value==""){
        alert("Email field is empty please fill the entry");
        document.validform.email.focus;
        return false;
    }
    //verification of region field in case nothing is selected
    if(rgn.value=="0"){
        alert("You have not selected region, Please select your region!");
        document.validform.region.focus();
        return false;
    }
    /*verification for pincode in case field is empty or entered pin is
    not a number or if the length of pin is smaller than 5 digits*/
    if(pin.value==""||isNaN(pin.value)||pin.value.length<5){
        alert("Please enter correct pincode");
        document.validform.pincode.focus();
        return false;
    }
}

//function ends