var player = "joker";
var numJogo = 0;

function check(id) {    

    var pc_versus = document.getElementById('jogo').checked;

    var opt = check_src(id);  
    
    if(player == "bat") {
        player = "joker";
    } else {
        player = "bat";
    }


    if (opt == "mg/png.png") {
        document.getElementById(id).src = "img/" + player + ".png";
    }

    numJogo ++;

    if (check_win()) {

        document.getElementById('win').src = "img/win_" + player + ".gif";
        
        return false;
    }

    if (numJogo >= 9) {

        alert ("(texto aqui, deu velha)");
        return false;
    }

if(pc_versus && player == 'bat'){
        
    check(jogoPC());
}

function jogoPC() {

    if(check_src('c5') == "mg/png.png") {
     
     return 'c5'
    } 
 
    return 'c' + Math.floor((Math.random() * 9) + 1);
 }

}

 


function check_src (id){

    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}


function check_win () {

    if(check_src('c1') == check_src('c2') &&(check_src('c1') == check_src('c3') && check_src('c1') != "mg/png.png") ) {
        return true;
    }

    if(check_src('c4') == check_src('c5') &&(check_src('c4') == check_src('c6') && check_src('c4') != "mg/png.png") ) {
        return true;
    }

    if(check_src('c7') == check_src('c8') &&(check_src('c7') == check_src('c9') && check_src('c7') != "mg/png.png") ) {
        return true;
    }

    if(check_src('c1') == check_src('c4') &&(check_src('c1') == check_src('c7') && check_src('c1') != "mg/png.png") ) {
        return true;
    }

    if(check_src('c2') == check_src('c5') &&(check_src('c2') == check_src('c8') && check_src('c2') != "mg/png.png") ) {
        return true;
    }

    if(check_src('c3') == check_src('c6') &&(check_src('c3') == check_src('c9') && check_src('c3') != "mg/png.png") ) {
        return true;
    }

    if(check_src('c1') == check_src('c5') &&(check_src('c1') == check_src('c9') && check_src('c1') != "mg/png.png") ) {
        return true;
    }

    if(check_src('c3') == check_src('c5') &&(check_src('c3') == check_src('c7') && check_src('c3') != "mg/png.png") ) {
        return true;
    }
}
