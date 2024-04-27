
var btn = document.querySelector('button');
var msg = document.getElementById('err');
var styling = document.getElementById('mail');

var valid;

btn.addEventListener("click", () => {
    msg.classList.add('hidden')

    document.getElementById('mail').style = " border: 2px solid rgb(193, 191, 191);"

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var mail = document.getElementById('mail').value
    if (mail.match(pattern)) {
        console.log("hello")
        valid = true;
        msg.classList.add('hidden')
    } else {
        styling.style = "border:2px solid red";

        msg.classList.remove('hidden')
        valid = false;
    }
    if (valid == true) {
        window.open('index1.html')

    } else {
        console.log("invalid")
    }

})





