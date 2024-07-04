function downloadCV() {
    
    var cvUrl = 'NResume.pdf'; 
    
    // Create an anchor element and simulate a click to download the file
    var link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Pavan_Kumbhar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function contactMe() {

    var email = 'pavankumbhar1718@gmail.com';
    var phone = '+91 86******38';
    

    alert('Email: ' + email + '\nPhone: ' + phone);
}
