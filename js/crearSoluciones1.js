let alto= window.screen.availHeight;
let ancho= window.screen.availWidth;
let comprar=confirm(`el alto es ${alto} y el ancho es ${ancho}`)

if (comprar) {
    alert(`compra realizada completamente`)
}else{
    alert(`compra cancelada`)
}