list.onclick = function(e) {
    e.preventDefault();
  
    let elm = e.target;
    let music = document.getElementById('player');
  
    let source = document.getElementById('audioSource');
    source.src = elm.getAttribute('data-value');
    
    music.load(); //Carga el audio
    music.play(); //Inicia el audio
  };