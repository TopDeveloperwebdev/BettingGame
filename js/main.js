let selectedIndex = 0;
let coinsValue = [1, 5, 10, 25, 50, 100];
let small = [0, 1, 2, 3];
let big = [6, 7, 8, 9];
let even = [1, 3, 7, 9];
let odd = [0, 2, 6, 8];
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
    $(".range-container").eq(0).mouseover(function() {
        $('.number-box').removeClass('active-box');
        let numberBox = $('.number-box');
        for (let i = 0; i < small.length; i++) {
            numberBox.eq(small[i]).addClass('active-box');
        }
    });
    $(".range-container").eq(1).mouseover(function() {
        $('.number-box').removeClass('active-box');
        let numberBox = $('.number-box');
        for (let i = 0; i < small.length; i++) {
            numberBox.eq(odd[i]).addClass('active-box');
        }
    });
    $(".range-container").eq(2).mouseover(function() {
        $('.number-box').removeClass('active-box');
        let numberBox = $('.number-box');
        for (let i = 0; i < small.length; i++) {
            numberBox.eq(big[i]).addClass('active-box');
        }
    });
    $(".range-container").eq(3).mouseover(function() {
        $('.number-box').removeClass('active-box');
        let numberBox = $('.number-box');
        for (let i = 0; i < small.length; i++) {
            numberBox.eq(even[i]).addClass('active-box');
        }
    });
    $(".number-box").mouseover(function() {
        $('.number-box').removeClass('active-box');
        let numberBox = $('.number-box');
        $(this).addClass('active-box');
    });

    $(".zero-number-section").mouseover(function() {
        $('.number-box').removeClass('active-box');
        let numberBox = $('.number-box');
        for (let i = 0; i < small.length; i++) {
            numberBox.eq(small[i]).addClass('active-box');
            numberBox.eq(even[i]).addClass('active-box');
        }
    });
    $(".five-number-section").mouseover(function() {
        $('.number-box').removeClass('active-box');
        let numberBox = $('.number-box');
        for (let i = 0; i < small.length; i++) {
            numberBox.eq(big[i]).addClass('active-box');
            numberBox.eq(odd[i]).addClass('active-box');
        }
    });
})