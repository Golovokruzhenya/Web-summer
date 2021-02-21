[].forEach.call(document.querySelectorAll('.plusBtn'), function(item) {
    item.addEventListener('click', function() {
       this.parentElement.getElementsByClassName('costMenu')[0].value = Number(this.parentElement.getElementsByClassName('costMenu')[0].value) + 1;
       globalCost();
   });
});
//Обработчик нажатия на минус
[].forEach.call(document.querySelectorAll('.minusBtn'), function(item) {
    item.addEventListener('click', function() {
        if (this.parentElement.getElementsByClassName('costMenu')[0].value>0)
        {
       this.parentElement.getElementsByClassName('costMenu')[0].value-=1;
       globalCost();
       }
   });
});