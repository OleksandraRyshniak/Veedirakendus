function nimiLugemine(){
    //let - muutujate määramine (var)
    let nimi=document.getElementById("nimi");
    let v1=document.getElementById("vastus1");
    //innerText või innerHTML genireerib lehel vastav tekst
    v1.innerText="Tere õpilane, "+nimi.value;
}
//puhasta funktsioon
function puhasta(){
    let v1=document.getElementById("vastus1");
    let nimi=document.getElementById("nimi");
    let v2=document.getElementById("vastus2");
    let mees=document.getElementById("mees");
    let naine=document.getElementById("naine");
    let laps=document.getElementById("laps");
    let v3=document.getElementById("vastus3");
    let slider=document.getElementById("slider");
    let varv=document.getElementById("varv");
    let v4=document.getElementById("vastus4");
    let koht=document.getElementById("koht");
    let v5=document.getElementById("vastus5");
    let java=document.getElementById("java");
    let js=document.getElementById("javascript");
    let py=document.getElementById("python");
    let php=document.getElementById("php");




    v1.innerText="";
    nimi.value= "";
    v2.innerText="";
    mees.checked=false;
    naine.checked=false;
    laps.checked=false;
    v3.innerText="";
    slider.value=50;
    varv.value="black";
    v4.innerText="";
    koht.value="";
    v5.innerText="";
    java.checked=false;
    js.checked=false;
    py.checked=false;
    php.checked=false;
}

//radionuppu valik
function valiSugu(){
    let v2=document.getElementById("vastus2");
    let mees=document.getElementById("mees");
    let naine=document.getElementById("naine");
    let laps=document.getElementById("laps");

    if(naine.checked){
        v2.innerHTML=naine.value;
    }
    else if(mees.checked){
        v2.innerHTML=mees.value;
    }
    else if(laps.checked){
        v2.innerHTML=laps.value;
    }
    else{
        v2.innerHTML="palun vali oma sugu!";
    }
}

//color
function valiVarv(){
    let varv=document.getElementById("varv");
    let v1=document.getElementById("vastus1");
    let v2=document.getElementById("vastus2");
    let v3=document.getElementById("vastus3");
    let v4=document.getElementById("vastus4");
    let v5=document.getElementById("vastus5");
    v1.style.backgroundColor=varv.value;
    v2.style.color=varv.value;
    v3.style.color=varv.value;
    v4.style.color=varv.value;
    v5.style.color=varv.value;

}

//range
function sliderLiigub(){
    let v3=document.getElementById("vastus3");
    let slider=document.getElementById("slider");
    v3.innerText=slider.value + "punkti";
}

//select - selectedIndex
function valiKoht(){
    let v4=document.getElementById("vastus4");
    let koht=document.getElementById("koht");
    //selectedIndex !== 0 - not null
    if(koht.selectedIndex !== 0){
        v4.innerHTML="Sa valisid " + koht.value;
    }
    else {
        v4.innerHTML="Tee ripploendi lahti ja vali!";
    }
}

//checkbox
function teeValik(){
    let v5=document.getElementById("vastus5");
    let java=document.getElementById("java");
    let js=document.getElementById("javascript");
    let py=document.getElementById("python");
    let php=document.getElementById("php");

    let valik="";
    if(java.checked){
        valik+=java.value + ", ";
    }
    if(js.checked){
        valik+=js.value + ", ";
    }
    if(py.checked){
        valik+=py.value + ", ";
    }
    if(php.checked){
        valik+=php.value + ", ";
    }
    v5.innerHTML="Sa valisid: " + valik;
}