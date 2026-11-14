function sendToWhatsApp(event) {
    if (event) event.preventDefault();

    let name = document.getElementById('name').value;
    let service = document.getElementById('service').value;
    let phone = document.getElementById('phone').value;
    let location = document.getElementById('location').value;

    let whatsappNumber = "8007163034";

    let message = `Hello Irfan Fashion Tailor,

New Inquiry Details:
Name: ${name}
Service: ${service}
Mobile: ${phone}
Location: ${location}`;

    let whatsappURL = "https://wa.me/918807163034?text=" + encodeURIComponent(message);

    window.open(whatsappURL, '_blank');
}