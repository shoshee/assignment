// https://github.com/shoshee/assignment
// code of converting kilometer to meter
function kilometerToMeter(kiloMeterUnit) {
    if (kiloMeterUnit > 0) {
        var meterUnit = kiloMeterUnit*1000;
        return meterUnit;


    }
    else {
        return "The meter unit value can not be negative";
    }
}
var check = kilometerToMeter(4900);
console.log(check);


// code of budgetCalculator part
function budgetCalculator(watchNum, mobileNum, laptopNum) {
    if (watchNum > 0) {
        var watchCost = watchNum * 50;
    }
    else {
        watchCost = 0;
    }

    if (mobileNum > 0) {
        var mobileCost = mobileNum * 100;
    }

    else {
        mobileCost = 0;
    }

    if (laptopNum > 0) {
        var laptopCost = laptopNum * 500;
    }
    else {
        laptopCost = 0;
    }

    var totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;
}

var check = budgetCalculator(10, -1, 1);
console.log(check);


// Code of hotelCost part
function hotelCost(numberOfDays) {
    var totalExpense = 0;
    if (numberOfDays <= 10) {
        totalExpense = numberOfDays * 100;
    }
    else if (numberOfDays <= 20) {
        var firstExpenditure = 10 * 100;
        var remainingDays = numberOfDays - 10;
        var secondExpenditure = remainingDays * 80;
        totalExpense = firstExpenditure + secondExpenditure;

    }
    else {
        firstExpenditure = 10 * 100;
        secondExpenditure = 10 * 80
        remainingDays = numberOfDays - 20;
        var LastExpenditure = remainingDays * 50;
        totalExpense = firstExpenditure + secondExpenditure + LastExpenditure;
    }

    return totalExpense;


}
var check = hotelCost(43);
console.log(check);


// Code of megaFriend part

function megaFriend(name) {
    var longestName = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (longestName.length < element.length) {
            longestName = element;
        }
        else if (longestName.length = element.length) {
            var temp = longestName;
            longestName = temp;
        }

    }
    return longestName;
}
var friend = ["sharmin", "shoshe", "mim", "Mubasshira", "subasshira"];
var longname = megaFriend(friend);
console.log(longname);