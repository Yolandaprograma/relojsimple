const horaContainer = document.querySelector(".hora")
const minutosContainer = document.querySelector(".minutos")
const segundosContainer = document.querySelector(".segundos")

const actualizarHora= setInterval(function() {
    const date = new Date()
    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()
    horaContainer.innerHTML=horas
    minutosContainer.innerHTML=minutos
    segundosContainer.innerHTML=segundos

},1000)

/* REFACTURACIÓN
horaContainer.innerHTML=${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}*/