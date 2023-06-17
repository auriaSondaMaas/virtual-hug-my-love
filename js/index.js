function changeMessage() {
    document.getElementById("loading-message").innerText = "¡Enviado!"
}

setTimeout(changeMessage, 2300)

setTimeout(function() {
    alert("Recibiste un abrazo de tu amorcito \u{1F60D} \n -A")
}, 2400)