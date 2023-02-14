function toggleHide(){
    let burger=document.querySelector('.burger');
    let menu=document.querySelector('.menu');
    let navbar=document.querySelector('.navbar')
    if(menu.style.display!='none'){
        menu.style.display='none';
        navbar.style.height='50px';
    }
    else{
        menu.style.display='flex';
        navbar.style.height='230px';
    }
}