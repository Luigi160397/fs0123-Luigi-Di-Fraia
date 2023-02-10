function aggiungiSimbolo(elemento){
            
    let simbolo = elemento.getAttribute('data-simbolo');

    let display = document.querySelector('#display');
    display.value += simbolo;
}

function totale(){
    let display = document.querySelector('#display');

    display.value = eval(display.value);
}

function cancella(){
    let display = document.querySelector('#display');

    display.value = '';
}
function del(){
    let display = document.querySelector('#display');
    let currentValue = display.value;
    if (currentValue.length > 0) {
    display.value = currentValue.substring(0, currentValue.length - 1);
    }
}
function divertiti(){
    let display = document.querySelector('#display');
    let divertente = display.value;
    if (divertente === '123456') {
        window.open('./assets/video/video.mp4', "popupWindow", "width=800,height=600")
    }
}
function divertiti1(){
    let display = document.querySelector('#display');
    let divertente = display.value;
    if (divertente === '777') {
        window.open('https://www.keblog.it/wp-content/uploads/2016/11/dipinti-classici-traformati-gif-animate-kiszkiloszki-cv4.gif', "popupWindow", "width=699,height=699")
    }
}
function divertiti3(){
    let display = document.querySelector('#display');
    let divertente = display.value;
    if (divertente === '2+2') {
        window.open('https://forum.novelupdates.com/attachments/48964/', "popupWindow", "width=607,height=382")
    }
}
