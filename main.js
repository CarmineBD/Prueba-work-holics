function changeProductColor(color, element) {
    const target = element.closest("article").querySelector('figure > img');
    target.src = '00_Recursos/Tshirt' + color + '.png'
}

function contact() {
    document.getElementsByTagName("footer")[0].scrollIntoView();
}