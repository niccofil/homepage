function drop() {
    let toggle = document.querySelector('.dropdown-conteiner');
    if (toggle.style.display == 'none'  || toggle.style.display == '') {
        toggle.style.display = 'block';
    }
    else {
        toggle.style.display = 'none';
    }
}


