// Declaration and Initialization
var ctrA = parseInt(document.getElementById("n_adultos").innerText, 10);
var ctrC = parseInt(document.getElementById("n_criancas").innerText, 10);
var ctrB = parseInt(document.getElementById("n_bebes").innerText, 10);
disBtn("decC");
disBtn("decB");
var mainStr;
var strA = " Adulto";
var strC = " Criança";
var strB = " Bebé";

// Estado Default
var defShp = document.getElementById("shpDeaf");
var defTxt = document.getElementById("default");
mainStr = ctrA + strA;
defTxt.innerText = mainStr;
defShp.style.borderWidth = "2px";

// Estado Aberto
var openShp = document.getElementById("shpOpen");
var openTxt = document.getElementById("open");
openTxt.innerText = mainStr;

window.addEventListener('click', function(e){   
    if (openShp.contains(e.target) || document.getElementById("tooltip").contains(e.target)){
        openShp.style.borderWidth = "2px";
        defShp.style.borderWidth = "1px";
    } else{
        defShp.style.borderWidth = "2px";
        openShp.style.borderWidth = "1px";
        defTxt.innerText = mainStr;
    }
  });

//Increment Buttons

function incA() {
    ctrA++;
    Update();
}

function incC() {
    ctrC++;
    Update();
}

function incB() {
    ctrB++;
    Update();
}

// Decrement Buttons
function decA() {
    ctrA--;
    Update();
}

function decC() {
    ctrC--;
    Update();
}

function decB() {
    ctrB--;
    Update();
}

// Buttons States

function disBtn(btn) {
    
    var btn =document.getElementById(btn);
    btn.disabled = true;
    btn.style.backgroundColor = "#c5c5c5";
}

function enBtn(btn) {
    var btn = document.getElementById(btn);
    btn.disabled = false;
    btn.style.backgroundColor = "#555555";

}

function disAllBtnInc() {
    disBtn("incA");
    disBtn("incC");
    disBtn("incB");
}

function enAllBtnInc() {
    enBtn("incA");
    enBtn("incC");
    enBtn("incB");
}

// Var Rullers
var MAX_PAX = 9;
var MAX_C = 4;

// Logic
function strSP(str,ctr) {

    if (ctr > 1 &&  str.slice(-1) != "s") {
        str += "s";
    }else if (ctr == 1 && str.slice(-1) == "s") {
        str = str.slice(0, -1);
    } 
    
    return str;
}

function Update() {

    strA = strSP(strA, ctrA);

    //Button logic
    if (ctrA <= 0) {
        disBtn("decA");
        mainStr = "";
    }else {
        enBtn("decA");
        mainStr = ctrA + strA;
    }

    strC = strSP(strC, ctrC);
    
    if (ctrC <= 0) {
        disBtn("decC");
        mainStr += "";
    }else {
        enBtn("decC");
        mainStr +=", " + ctrC + strC;
    }

    strB = strSP(strB, ctrB);

    if (ctrB <= 0) {
        disBtn("decB");
        mainStr += "";
    }else {
        enBtn("decB");
        mainStr += ", " + ctrB + strB;
    }

    document.getElementById("n_adultos").innerHTML=ctrA;
    document.getElementById("n_criancas").innerHTML=ctrC;
    document.getElementById("n_bebes").innerHTML=ctrB;

    openTxt.innerText = mainStr;

    var totalPax = ctrA + ctrC + ctrB;

    if (totalPax >= MAX_PAX) {
        disAllBtnInc();
    }else {
        enAllBtnInc();
    }

    if (ctrA <= 0) {
        disBtn("incC");
        disBtn("incB");
        ctrC = 0;
        ctrB = 0;
        Update ();
    }

    if (ctrC >= (MAX_C * ctrA) && ctrB == 0) {
        disBtn("incC");
        disBtn("incB");
            ctrC = (MAX_C * ctrA);
            Update();
    }

    if (ctrC >= (2 * ctrA) || ctrB >= ctrA) {
        disBtn("incB");
    }
        
    
}




