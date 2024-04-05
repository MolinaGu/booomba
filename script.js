let bt1 = document.getElementById('bt1');
let bt2 = document.getElementById('bt2');
let bt3 = document.getElementById('bt3');
let bt_entrar = document.getElementById('bt4');
let bt5 = document.getElementById('bt5');
let bt_pausa = document.getElementById('bt6');
let bt_play = document.getElementById('bt7');
let bt_sorte1 = document.getElementById('bts1');
let bt_sorte2 = document.getElementById('bts2');
let bt_sorte3 = document.getElementById('bts3');
let bt_beep = document.getElementById('btoff1');
let bt_boom = document.getElementById('btoff2');



let controle = document.getElementById('control');
let display = document.getElementById('display');


let explosion = document.getElementById('explosion');
let beep = document.getElementById('beep');


controle.addEventListener('mouseenter', ()=>{
    display.innerHTML = "...";
});


let alreadyclicked = false;
let intervalo;
let timestoped;
let pause = false;
let oculto = false;
let escolha;
let beep_off = false;
let boom_off = false;

let classes = ["animais", "coisas de cozinha", "coisas de banheiro", "nomes", "roupas", "cores", "comidas", "esportes", "coisas de festa de aniversário", "coisas da praia", "coisas da escola", "sobremesas", "bebidas", "comidas geladas", "adjetivos", "vestuario", "meios de transporte", "personagens famosos", "fantasias", "contos de fada", "coisas da sala de casa", "materiais escolares"];


const temporizar = (tempo_pre_marcado) => {
    var time = tempo_pre_marcado;
    intervalo = setInterval(function() {
        if(oculto == true){
            document.getElementById('cronometro').innerHTML = "---";
        }else{
        document.getElementById('cronometro').innerHTML = time;
        }
        
        
        if (time == 0) {
            clearInterval(intervalo);
            alreadyclicked = false;
            oculto = false;
            if(boom_off == true){
                alert('A BOMBA EXPLODIU');
            }else{
                explosion.play();
            }
        } else {
            if(beep_off == false){
                beep.play();
            }else{
                console.log("beep")
            }
            time--; 
            timestoped = time + 1;
        }
    }, 1000); 
}

const aleatorizar = (max, min) => {
    oculto = true;
    var time = Math.floor(Math.random() * (max - min)+min);
    

    escolha = Math.floor(Math.random() * (classes.length - 0)+0);
    display.innerHTML = classes[escolha];
    intervalo = setInterval(function() {
        document.getElementById('cronometro').innerHTML = "---";
        
        
        if (time == 0) {
            clearInterval(intervalo);
            alreadyclicked = false;
            oculto = false;
            if(boom_off == true){
                alert('A BOMBA EXPLODIU');
            }else{
                explosion.play();
            }

        } else {
            if(beep_off == false){
                beep.play();
            }else{
                console.log("beep");
            }
            time--; 
            timestoped = time + 1;
        }
    }, 1000); 
    
}


bt1.addEventListener('mouseenter', ()=>{
    display.innerHTML = "Explodir em 120 seg";
});
bt1.addEventListener('mouseleave', ()=>{
    display.innerHTML = "...";
});
bt1.addEventListener('click',   ()=>{
    if(alreadyclicked == false){
    temporizar(120);
    alreadyclicked = true;
    }else{
        console.log("Cronometro ja ativo");
    }
});


bt2.addEventListener('mouseenter', ()=>{
    display.innerHTML = "Explodir em 60 seg";
});
bt2.addEventListener('mouseleave', ()=>{
    display.innerHTML = "...";
});
bt2.addEventListener('click',   ()=>{
    if(alreadyclicked == false){
        temporizar(60);
        alreadyclicked = true;
    }else{
        console.log("Cronometro ja ativo");
    }
});


bt3.addEventListener('mouseenter', ()=>{
    display.innerHTML = "Explodir em 30 seg";
});
bt3.addEventListener('mouseleave', ()=>{
    display.innerHTML = "...";
});
bt3.addEventListener('click',   ()=>{
    if(alreadyclicked == false){
        temporizar(30);
        alreadyclicked = true;
    }else{
        console.log("Cronometro ja ativo");
    }
});


bt_sorte1.addEventListener('mouseenter', ()=>{
    if(alreadyclicked != true){
        display.innerHTML = "INICIAR SEQUÊNCIA  ALEATÓRIA RÁPIDA";
    }else{
        display.innerHTML = classes[escolha];
    }
});
bt_sorte1.addEventListener('mouseleave', ()=>{
    if(alreadyclicked != true){
        display.innerHTML = "...";
    }else{
        display.innerHTML = classes[escolha];
    }
    display.innerHTML = "...";
});
bt_sorte1.addEventListener('click',   ()=>{
    if(alreadyclicked == false){
        aleatorizar(1, 20);
        alreadyclicked = true;
    }else{
        console.log("Cronometro ja ativo");
    }
});


bt_sorte2.addEventListener('mouseenter', ()=>{
    if(alreadyclicked != true){
        display.innerHTML = "INICIAR SEQUÊNCIA  ALEATÓRIA MÉDIA";
    }else{
        display.innerHTML = classes[escolha];
    }
});
bt_sorte2.addEventListener('mouseleave', ()=>{
    if(alreadyclicked != true){
        display.innerHTML = "...";
    }else{
        display.innerHTML = classes[escolha];
    }
    display.innerHTML = "...";
});
bt_sorte2.addEventListener('click',   ()=>{
    if(alreadyclicked == false){
        aleatorizar(10, 30);
        alreadyclicked = true;
    }else{
        console.log("Cronometro ja ativo");
    }
});


bt_sorte3.addEventListener('mouseenter', ()=>{
    if(alreadyclicked != true){
        display.innerHTML = "INICIAR SEQUÊNCIA  ALEATÓRIA LENTA";
    }else{
        display.innerHTML = classes[escolha];
    }
});
bt_sorte3.addEventListener('mouseleave', ()=>{
    if(alreadyclicked != true){
        display.innerHTML = "...";
    }else{
        display.innerHTML = classes[escolha];
    }
    display.innerHTML = "...";
});
bt_sorte3.addEventListener('click',   ()=>{
    if(alreadyclicked == false){
        aleatorizar(30, 60);
        alreadyclicked = true;
    }else{
        console.log("Cronometro ja ativo");
    }
});


bt5.addEventListener('mouseenter', ()=>{
    display.innerHTML = "EXPLODIR AGORA";
});
bt5.addEventListener('mouseleave', ()=>{
    display.innerHTML = "...";
});
bt5.addEventListener('click', () => {
    if (alreadyclicked == true) {
        clearInterval(intervalo);
        alreadyclicked = false;
        document.getElementById('cronometro').innerHTML = '0';
        console.log('Cronômetro parado');
        display.innerHTML = "...";
        if(boom_off == true){
            alert('A BOMBA EXPLODIU');
        }else{
            explosion.play();
        }
    } else {
        console.log('Cronômetro não está ativo');
    }
});


bt_entrar.addEventListener('mouseenter', ()=>{
    display.innerHTML = "Explodir em X segundos";
});
bt_entrar.addEventListener('mouseleave', ()=>{
    display.innerHTML = "...";
});
document.getElementById('otherinpt').addEventListener('mouseenter', ()=>{
    display.innerHTML = "Digite o tempo em segundos";
});
document.getElementById('otherinpt').addEventListener('mouseleave', ()=>{
    display.innerHTML = "...";
});
bt_entrar.addEventListener('click', ()=>{
    let newtime = document.getElementById('otherinpt').value;
    if(newtime > 0 && newtime != null){
        temporizar(newtime);
        alreadyclicked = true;
        document.getElementById('otherinpt').value = "";
    }else{
        display.innerHTML = "DIGITE UM VALOR VÁLIDO"
    }
}); 


bt_pausa.addEventListener('mouseenter', ()=>{
    display.innerHTML = "Pausar cronômetro";
});
bt_pausa.addEventListener('mouseleave', ()=>{
    display.innerHTML = "...";
});
bt_pausa.addEventListener('click', ()=>{
    if(alreadyclicked == true && pause == false){
        clearInterval(intervalo);
        console.log("timestoped: "+timestoped);
        pause = true;
    }else{
        alert("Bomba inativa / pausada");
        pause = false;
    }
});


bt_play.addEventListener('mouseenter', ()=>{
    display.innerHTML = "Despausar cronômetro";
});
bt_play.addEventListener('mouseleave', ()=>{
    display.innerHTML = "...";
});
bt_play.addEventListener('click', ()=>{
    if(pause == true){
        temporizar(timestoped);
        pause = false;
    }else{
        alert("Bomba despausada");
    }
});


bt_beep.addEventListener('mouseenter', ()=>{
    if(beep_off == true){
        display.innerHTML = "Ligar som de beep";
    }else{
        display.innerHTML = "Desligar som de beep";
    }
});
bt_beep.addEventListener('mouseleave', ()=>{
    display.innerHTML = "...";
});
bt_beep.addEventListener('click', ()=>{
    if(beep_off == false){
        bt_beep.innerHTML = `BEEP <svg style="margin-left: 5px;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
        </svg>`;
        beep_off = true;
    }else{
        beep_off = false;
        bt_beep.innerHTML = `BEEP <svg style="margin-left: 5px;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
        <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"/>
      </svg>`;
    }
});


bt_boom.addEventListener('mouseenter', ()=>{
    if(beep_off == true){
        display.innerHTML = "Ligar som de explosão";
    }else{
        display.innerHTML = "Desligar som de explosão";
    }
});
bt_beep.addEventListener('mouseleave', ()=>{
    display.innerHTML = "...";
});
bt_boom.addEventListener('click', ()=>{
    if(boom_off == false){
        boom_off = true
        bt_boom.innerHTML = `EXPLOSÃO <svg style="margin-left: 5px;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
      </svg>`;
    }else{
        boom_off = false;
        bt_boom.innerHTML = `EXPLOSÃO <svg style="margin-left: 5px;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
        <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"/>
      </svg>`;
    }
});