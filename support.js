document.addEventListener("DOMContentLoaded", function() {
    const supportForm = document.getElementById("support-form");
    supportForm.addEventListener("submit", function(event) {
        event.preventDefault();
        handleFormSubmit();
    });

    function handleFormSubmit() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "fullname": name,
            "from": email,
            "to": "hidrosoft@support.com.bo",
            "subject": "Support",
            "message": message
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://example-mailtrap.onrender.com/api/mailtrap/send-mail", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            alert(`¡Gracias, ${name}! Tu mensaje ha sido enviado.`);
            supportForm.reset();
        })
        .catch(error => console.log('error', error));
    }
});
