let href= window.location.href;
let pathname= window.location.pathname;
let hostname = window.location.hostname;
let protocol= window.location.protocol;

let html = `<p>Protocolo: <b>${protocol}</b></p> <br>`
html+= `<p>Pathname: <b>${pathname}</b></p> <br>`
html+= `<p>Hostname: <b>${hostname}</b></p> <br>`
html+= `<p>Href: <b>${href}</b></p> <br>`

let insertarContenido= document.querySelector(`body`)
debugger
let hijoBody=document.createElement(`DIV`)

insertarContenido.appendChild(hijoBody)

hijoBody.innerHTML=`${html}`

