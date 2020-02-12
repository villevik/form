function svar(){
    var rolig = document.getElementsByName('rolig');
    var rolig_svar;
    for(var i = 0; i < rolig.length; i++){
        if(rolig[i].checked){
            rolig_svar = rolig[i].value;
        }
    }
    var rolig_mot = document.getElementById("textarea").value;
    if(rolig_mot.length < 10){ 
        alert("Motivering måste vara minst 10 tecken");
        return;
    }
    
    //console.log(rolig_svar)
    var hitta = document.getElementsByName('hitta');
    var hitta_svar;
    for(var i = 0; i < hitta.length; i++){
        if(hitta[i].checked){
            hitta_svar = hitta[i].value;
        }
    }
    var design = document.getElementsByName('design');
    var design_svar;
    for(var i = 0; i < design.length; i++){
        if(design[i].checked){
            design_svar = design[i].value;
        }
    }
    
    var design_mot = document.getElementById("textarea2").value;
    if(design_mot.length < 10){ 
        alert("Motivering måste vara minst 10 tecken");
        return;
    }
    

    const res_container = document.getElementById("results");
    res_container.style.display = "block";
    const div = document.createElement("div");
    div.className = "newDiv";

    const h1 = document.createElement("h1");
    h1.textContent = "Dina svar";

    const p1 = document.createElement("p");
    p1.textContent = "Spelet var: " + rolig_svar + ", med motiveringen: " + rolig_mot;

    const p2 = document.createElement("p");
    p2.textContent = "Det var: " + hitta_svar;

    const p3 = document.createElement("p");
    p3.textContent = "Sidan var: " + design_svar + ", med motiveringen: " + design_mot;
    div.appendChild(p1);
    
    
    div.appendChild(h1);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    res_container.appendChild(div);

}