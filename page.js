function drop() {
    let w = document.querySelector('.dropdown-content');
    if (w.style.display == 'none' || w.style.display == "") {
        w.style.display = 'block';
    }
    else {
        w.style.display = 'none';
    }
}

