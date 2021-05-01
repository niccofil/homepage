function drop() {
    let toggle = document.querySelector('.dropdown-conteiner');
    if (toggle.style.display == 'none' || toggle.style.display == '') {
        toggle.style.display = 'block';
    }
    else {
        toggle.style.display = 'none';
    } 
}

function check(){
    let user = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;

    if (user == ""){
        document.getElementById('emptyUser').innerHTML = "username required";
        document.getElementById('emptyUser').style.color = 'red';
        document.getElementById('name').style.borderColor = 'red';
    }

    
    if (pass == "") {
        document.getElementById('emptyPass').innerHTML = "password required";
        document.getElementById('emptyPass').style.color = 'red';
        document.getElementById('pass').style.borderColor = 'red';
    }

    else if (pass != "" && user != ""){
        document.getElementById('emptyUser').innerHTML = "";
        document.getElementById('name').style.borderColor = "";
        document.getElementById('emptyPass').innerHTML = "";
        document.getElementById('pass').style.borderColor = "";
        drop(); 
    }
    
}





