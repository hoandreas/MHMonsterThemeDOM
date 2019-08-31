var icons = document.querySelectorAll('.monster');
for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click',function(){
    var buttonInner = this.innerHTML;
    playSong(buttonInner);
    });
}

function playSong(key) {
    var nargacuga = new Audio ('assets/nargacuga.mp3');
    var lagiacrus = new Audio ('assets/lagiacrus.mp3');
    var mizutsune = new Audio ('assets/mizutsune.mp3');
    var zinogre = new Audio ('assets/zinogre.mp3');
    var astalos = new Audio ('assets/astalos.mp3');
    var goremagala = new Audio ('assets/gore.mp3');
    var deviljho = new Audio ('assets/deviljho.mp3');
    var brachydios = new Audio ('assets/brachydios.mp3');
    var valstrax = new Audio ('assets/valstrax.mp3');
    var fatalis = new Audio ('assets/whiteFatalis.mp3');
    
    if (key === 'nargacuga') {
        nargacuga.play();
    } else if (key === 'lagiacrus') {
        lagiacrus.play();
    } else if (key === 'mizutsune') {
        mizutsune.play();
    } else if (key === 'zinogre') {
        zinogre.play();
    } else if (key === 'astalos') {
        astalos.play();
    } else if (key === 'gore') {
        goremagala.play();
    } else if (key === 'deviljho') {
        deviljho.play();
    } else if (key === 'brachydios') {
        brachydios.play();
    } else if (key === 'valstrax') {
        valstrax.play();
    } else if (key === 'fatalis') {
        fatalis.play();
    } else if (key === 'gocrazy') {
        nargacuga.play();
        lagiacrus.play();
        mizutsune.play();
        zinogre.play();
        astalos.play();
        goremagala.play();
        deviljho.play();
        brachydios.play();
        valstrax.play();
        fatalis.play();
    }
}