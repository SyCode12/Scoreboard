let count = 0 , countForg = 0;
let total = 0;
                  //FOR HOME SIDE
function prt(){
    count += 1;
    document.getElementById('input').value = count ;    
}
function prt2(){
    count += 2;
    document.getElementById('input').value= count ;    
}
function prt3(){
    count += 3;
    document.getElementById('input').value= count ;    
}
                       // FOR GUEST
function btn(){
    countForg += 1;
    document.getElementById('guest').value = countForg ;    
}
function btn2(){
    countForg += 2;
    document.getElementById('guest').value = countForg ;    
}
function btn3(){
    countForg += 3;
    document.getElementById('guest').value= countForg ;    
}
function oncl(){
    document.getElementById('guest').value= 0;
    document.getElementById('input').value = 0;
    count = 0;
    countForg = 0;
}

