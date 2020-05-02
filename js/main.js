let selectedIndex = 0;
let bettingCoin = 0;
let coinsValue = [1, 5, 10, 25, 50, 100];
let small = [0, 1, 2, 3];
let big = [6, 7, 8, 9];
let even = [1, 3, 7, 9];
let odd = [0, 2, 6, 8];

let round = null,
    number = null,
    Amount = null,
    Big = null,
    Small = null,
    Even = null,
    Odd = null,
    Total = 0;


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
        var selectedRange = $(this).attr('dataindex');
        var balance = coinsValue[selectedIndex];
        round = $('#round').val();
        number = ''
        Amount = ''
        Big = '';
        Small = '';
        Even = '';
        Odd = '';
        Total = balance + '$';
        if (selectedRange == 'big') Big = balance + '$';
        else if (selectedRange == 'small') Small = balance + '$';
        else if (selectedRange == 'even') Even = balance + '$';
        else if (selectedRange == 'odd') Odd = balance + '$';
        else {
            Amount = balance + '$';
            number = selectedRange;
        }

        $('#coin').remove();
        bettingCoin = selectedIndex;
        $(this).prepend("<img id='coin' src='img/coin-" + coinsValue[selectedIndex] + ".svg' />");
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
    $(".buy-button").click(function() {
        if (round && date && (number || Big || Small || Even || Odd)) {
            $('.buy-list tbody').append("<tr><td>" + round + "</td><td>" + number + "</td><td>" + Amount + "</td> <td>" + Big + "</td><td>" + Small + "</td><td>" + Even + "</td><td>" + Odd + "</td><td>" + Total + "</td></tr>");
        } else {
            alert('Please select numbers for buy');
        }



    })
})
window.onload = function() {
    this.datepickerinit();
}

function datepickerinit() {
    var today = new Date();
    var today = this.formatDate(today);
    var endDay = new Date();
    endDay.setDate(endDay.getDate() + 7);
    endDay = this.formatDate(endDay);
    console.log('dateSTring', today, endDay);
    $('#date').attr('min', today);
    $('#date').attr('max', endDay);
}

function formatDate(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date = yyyy + '-' + mm + '-' + dd;
    return date;
}