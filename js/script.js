//cerco di creare i blocchi
const mainContainer = document.getElementById ("main_container");

for (let i = 1; i <= 100; i++){
    const scatola = document.createElement ("div");
    scatola.classList.add("box" , "ratio", "ratio-1x1");
    
    
    const treMultiplo = i % 3 === 0;
    const cinqueMultiplo = i % 5 === 0; 
    
    if(treMultiplo && cinqueMultiplo){
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


    mainContainer.append(scatola)
} 