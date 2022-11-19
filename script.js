let basic = document.querySelector('#basic');
let pro = document.querySelector('#pro');
let master = document.querySelector('#master');
let toggle = document.querySelector('input');

toggle.addEventListener('click', function(){
    if(toggle.checked){
        basic.innerHTML = "<span>$</span>19.99"
        pro.innerHTML = "<span>$</span>24.99"
        master.innerHTML = "<span>$</span>39.99"
    } else {
        basic.innerHTML = "<span>$</span>199.99"
        pro.innerHTML = "<span>$</span>249.99"
        master.innerHTML = "<span>$</span>399.99"
    }
})