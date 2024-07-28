var kilometre = document.getElementById('kilometre');
var metre = document.getElementById('metre');
kilometre.addEventListener('input', function(){
    let f = this.value;
    let i = f*1000;
    metre.value=i;
});

metre.addEventListener('input', function(){
    let i = this.value;
    let f = i/1000;
    kilometre.value=f;
});
