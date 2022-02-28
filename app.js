if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}

function ready() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit',function(e){
        
    })
}