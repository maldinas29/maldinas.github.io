const contactForm = document.getElementById('contact__form'),
    contactMessage = document.getElementById('contact-message')

    const sendEmail = (e) =>{
e.preventDefault()

// serviceID - templateID - #form - publicKey
emailjs.sendForm('service_i2d3gk6', 'template_krmrbod','#contact-form','0F1AS7fMgxHFtL310')
.then(() =>{

//show sent message
    contactMessage.textContent = ' Great! Message sent successfully ✅'

//remove message after 5 secs
    setTimeout(() => {
        contactMessage.textContent = ''
        
    }, 5000);

    // clear input fields
    contactForm.reset()

}, () =>{

    //show error message
    contactMessage.textContent = ' Sorry, Message not sent (service error) ❌'
} )
    }

    contactForm.addEventListener('submit', sendEmail)