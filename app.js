if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}

function ready() {
    document.getElementById('le-cho').addEventListener('click',() => {
        location.href = "https://chris-zano.github.io/Le-Cho/"
    })
    document.getElementById('jsdocs').addEventListener('click',() => {
       location.href = "https://chris-zano.github.io/documentation-page/"
    })
    document.getElementById('namegen').addEventListener('click',() => {
       location.href = "https://chris-zano.github.io/Le-Cho/"
    })
    document.getElementById('carinsu').addEventListener('click',() => {
       location.href = "https://chris-zano.github.io/Le-Cho/"
    })
    document.getElementById('survey').addEventListener('click',() => {
       location.href = "https://chris-zano.github.io/survey_form/"
    })
    document.getElementById('miztaGrills').addEventListener('click',() => {
        location.href = "https://chris-zano.github.io/miztaGrills/"
     })
}