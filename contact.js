// email contact page

const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event){
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'lasse ';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Thanks, we will be in touch!')
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});