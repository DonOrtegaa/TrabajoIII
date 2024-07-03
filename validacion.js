const nombre = document.getElementById("name")
const correo = document.getElementById("correo")
const parrafo = document.getElementById("warnings")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML =""
    if(nombre.value.length <1 || correo.value.length <5){
        warnings += 'PORFAVOR RELLENE TODOS LOS CAMPOS'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado :))"
    }
})