let star = document.getElementById('star');
let moon = document.getElementById('moon');
let mount3 = document.getElementById('mount3');
let mount4 = document.getElementById('mount4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let donel = document.querySelector('.donel');


onscroll = ()=> {
    let value = scrollY;
    star.style.left = value + 'px';
    moon.style.top = value * 4+ 'px';
    mount3.style.top = value * 2+ 'px';
    mount4.style.top = value * 1.5+ 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3+ 'px';
    donel.style.fontSize =  value +'px';

    if(scrollY >= 67){
    donel.style.fontSize =  67 +'px';
    donel.style.position = 'fixed';
    if(scrollY >= 478){
        donel.style.display = 'none';

    }
    else{
        donel.style.display = 'block';

    }
    if(scrollY >= 126){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('main').style.background =   'linear-gradient(#2e0221,#4e0427 )' ;

    }
}



}

