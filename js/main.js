let selectedIndex = 0;
let bettingCoin = 0;
let coinsValue = [1, 5, 10, 25, 50, 100];
let small = [0, 1, 2, 3];
let big = [6, 7, 8, 9];
let even = [1, 3, 7, 9];
let odd = [0, 2, 6, 8];

let number = null,
    Amount = null,
    Big = null,
    Small = null,
    Even = null,
    Odd = null,
    Total = 0;
let marginTop = []
zIndex = [];
var Balances = [];
for (let i = 0; i < 14; i++) {
    Balances.push([]);
    marginTop.push(0);
    zIndex.push(0)
}
let selectedBalance = [];
var totalAmount;
let RangeIndex;
let ReBalance = [];
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

        RangeIndex = $(this).attr('rangeIndex');
        if ((RangeIndex == 10 && Balances[12].length) || (RangeIndex == 12 && Balances[10].length) || (RangeIndex == 11 && Balances[13].length) || (RangeIndex == 13 && Balances[11].length)) {
            alert('It is possible to place on the box');
            return;
        }

        var balance = coinsValue[selectedIndex];
        Balances[RangeIndex].push(coinsValue[selectedIndex]);
        selectedBalance = Balances[RangeIndex];
        console.log('selectedBalance', selectedBalance);
        $.fn.calcSelectBalence();


        var selectedRange = $(this).attr('dataindex');
        bettingCoin = selectedIndex;
        $('.' + selectedRange + '').remove();
        ReBalance.sort(function(a, b) { return a - b });
        marginTop[RangeIndex] = 0;
        zIndex[RangeIndex] = 0;
        for (let i = 0; i < ReBalance.length; i++) {
            marginTop[RangeIndex] -= 5;
            zIndex[RangeIndex] += 5;
            $(this).prepend("<img class='" + selectedRange + " coin' style='margin-top :" + marginTop[RangeIndex] + "px ; z-index : " + zIndex[RangeIndex] + "' src='img/coin-" + ReBalance[i] + ".svg' />");
        }
    });

    $.fn.calcSelectBalence = function() {
        totalAmount = 0;
        for (let i = 0; i < selectedBalance.length; i++) {
            totalAmount += selectedBalance[i];
        }
        console.log('selectedBalance', selectedBalance);
        $.fn.AssignCoins();


    }
    $.fn.AssignCoins = function() {
        let coinsSortedByValue = coinsValue.slice();
        coinsSortedByValue.sort(function(a, b) { return b - a });
        var temp = [];
        for (let i = 0; i < coinsSortedByValue.length; i++) {
            let coinCount = Math.floor(totalAmount / coinsSortedByValue[i]);
            console.log('coinCount-------', coinCount);
            for (let j = 0; j < coinCount; j++) {
                temp.push(coinsSortedByValue[i]);
            }
            totalAmount -= (coinCount * coinsSortedByValue[i]);
        }
        ReBalance = temp.slice();

    }

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
    $(".add-button").click(function() {

        var round = $('#round').val();
        var selectedDate = $('#date').val();
        var rowspan = 0;
        for (let i = 0; i < Balances.length; i++) {
            if (Balances[i].length) {
                rowspan += 1;
            }
        }
        if (round && selectedDate) {
            Total = 0;
            for (let i = 0; i < Balances.length; i++) {
                if (Balances[i].length) {
                    console.log('----', Balances[i].length);
                    Amount = ''
                    Big = '';
                    Small = '';
                    Even = '';
                    Odd = '';
                    number = '';
                    var IBalance = 0;
                    for (let j = 0; j < Balances[i].length; j++) {
                        IBalance += Balances[i][j];
                    }
                    if (i < 10) {
                        Amount = IBalance + '$';
                        number = i;
                    } else if (i == 10) Small = IBalance + '$';
                    else if (i == 11) Even = IBalance + '$';
                    else if (i == 12) Big = IBalance + '$';
                    else if (i == 13) Odd = IBalance + '$';

                    if (Total) {
                        Total += IBalance;
                        $('.buy-list tbody').append("<tr><td>" + number + "</td><td>" + Amount + "</td> <td>" + Big + "</td><td>" + Small + "</td><td>" + Even + "</td><td>" + Odd + "</td><td>" + Total + "</td></tr>");
                    } else {
                        Total += IBalance;
                        $('.buy-list tbody').append("<tr><td rowspan='" + rowspan + "'>" + selectedDate + "</td><td rowspan='" + rowspan + "'>" + round + "</td><td>" + number + "</td><td>" + Amount + "</td> <td>" + Big + "</td><td>" + Small + "</td><td>" + Even + "</td><td>" + Odd + "</td><td>" + Total + "</td></tr>");
                    }
                }
            }


        } else {
            alert('Please type require items');
        }
        $('.coin').remove();

    })
    $("#date").on("change", function() {
        console.log('ssssss')
        this.setAttribute(
            "data-date",
            moment(this.value, "YYYY-MM-DD")
            .format(this.getAttribute("data-date-format"))
        )
    }).trigger("change")
})
window.onload = function() {
    this.datepickerinit();
    var md5 = 'star99:0123456789';
    console.log('md5------', calcMD5(md5));
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