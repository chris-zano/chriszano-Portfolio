if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}

function ready() {
    document.getElementById('le-cho').addEventListener('click',() => {
        location.href = "http://miztagrills.herokuapp.com/#"
    })
    document.getElementById('tabbi').addEventListener('click',() => {
       location.href = "https://tabbi-web.herokuapp.com/"
    })
    document.getElementById('namegen').addEventListener('click',() => {
       location.href = " https://chris-zano.github.io/name-generator/"
    })
    document.getElementById('carinsu').addEventListener('click',() => {
       location.href = "https://chris-zano.github.io/car-Insurance-calculator/"
    })
    document.getElementById('survey').addEventListener('click',() => {
       location.href = "https://chris-zano.github.io/survey_form/"
     })
    // document.getElementById('miztaGrills').addEventListener('click',() => {
    //     location.href = "https://chris-zano.github.io/survey_form/"
    //  })


     const form = document.getElementById('contact-form'),
            name = document.getElementById('name'),
            email = document.getElementById('email'),
            subject = document.getElementById('subject'),
            message = document.getElementById('message');
    
    form.addEventListener('submit',(e)=>{
        var formDetails = {}
        e.preventDefault()
        formDetails.name = name.value
        formDetails.email = email.value
        formDetails.subject = subject.value
        formDetails.message = message.value
        localStorage.setItem('contactForm',JSON.stringify(formDetails));
    })

    
}
