
const mainContainer = document.getElementById ("main_container");

//creo il ciclo
for (let i = 1; i <= 100; i++){
    //creo l'elemento html e gli assegno la classe box (creata da me) e le classi ratio e ratio-1x1 prese da bootstrap
    const scatola = document.createElement ("div");
    scatola.classList.add("box" , "ratio", "ratio-1x1");
    
    //dichiaro le due variabili che utilizzerò per dare lo stile necessario alle "scatole"
    const treMultiplo = i % 3 === 0;
    const cinqueMultiplo = i % 5 === 0; 
    
    
    if(treMultiplo && cinqueMultiplo){          //questo "if" lo posiziono prima degli "else" così che esclude gli altri due se è vero
        scatola.textContent = "fizzbuzz";
        scatola.classList.add ("bg_tre_cinque_multiplo");
    }else if(treMultiplo){
        scatola.textContent = "fizz";
        scatola.classList.add ("bg_tre_multiplo");
    }else if(cinqueMultiplo){
        scatola.textContent = "buzz";
        scatola.classList.add ("bg_cinque_multiplo");
    }else{                                         
        scatola.textContent = i;
    }


    mainContainer.append(scatola)  //mostro la "scatola"
} 