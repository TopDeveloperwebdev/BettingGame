let selectedIndex = 0;
let coinsValue = [1, 5, 10, 25, 50, 100];
$(document).ready(function() {

    $('.coins img').click(function() {
        $('.coins img').removeClass('active');
        $(this).addClass('active');
        let coins = $('.coins img');
        for (let i = 0; i < coins.length; i++) {
            if (coins.eq(i).hasClass('active')) {
                selectedIndex = i;
            }
        }
        console.log('this.sect', coinsValue[selectedIndex]);
    });

    $('.range-container , .number-box').click(function() {
        $(this).prepend("<img id='coin' src='img/coin-" + coinsValue[selectedIndex] + ".svg' />")
    });
})