function sendEmail() {
    const templateParams ={
        name:document.querySelector("#name").value,
        email: document.querySelector("#email").value,
       message: document.querySelector("#messa").value,
        gender: document.querySelector("#gende").value,

    };
emailjs.send("service_ovfz09b","template_3gt3j8k", templateParams )
.then(() => alert("Email sent!!").catch(() => alert("Email not sent!!")) )
}
