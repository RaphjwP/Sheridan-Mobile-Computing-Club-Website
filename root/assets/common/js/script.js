function sendMail() {
    console.log("Email sending")
    var firstName = document.getElementById("inputLastName").value
    var lastName = document.getElementById("inputFirstName").value
    var email = document.getElementById("inputEmail").value
    var subject = "Email from" + firstName + lastName

    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(subject)
    


    var link = "mailto:edward.rj.p@gmail.com"
             + "?cc=" + email
             + "&subject=" + encodeURIComponent(subject)
             + "&body=" + encodeURIComponent(document.getElementById('inputMessage').value)
    ;
    console.log(link)


    window.location.href = "mailto:edward.rj.p@gmail.com";
}