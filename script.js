function task_1() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
function task_2() {
    var i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
}
function task_3() {
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
function task_4() {
    var sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += i;
    }
    console.log(sum);
}
function task_5() {
    for (let i = 0; i < 10; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
function task_6() {
    var age = 27;
    if (age > 16) {
        console.log("you are an adult");
    } else {
        console.log("you are an not adult");
    }
}
function task_7() {
    var score = 45;
    if (score < 50) {
        console.log("you failed the test");
    }
    else {
        console.log("you sucsess the test");
    }
}
function task_8() {
    var name = "john";
    if (name == "john") {
        console.log("Hello , john");
    }
}
function task_9() {
    var day = "Monday";
    if (day != "Saturday" && day != "Friday") {
        console.log("it is a " + day);
    }
}
function task_10() {
    var num = 4;
    if (4 % 2 == 0) {
        console.log("This Nimber is even");
    }
}
function task_11() {
    var x = 5;
    if (x > 0) {
        console.log("this is positive number");
    }
}
function task_12() {
    var y = -9;
    if (y < 0) {
        console.log("this is negative number");
    }
}
function task_13() {
    var gpa = 3.5;
    if (gpa >= 3) {
        console.log("Congratulations , you have a good GPA!");
    }
}
function task_14() {
    var gpa = 3.5;
    if (gpa >= 3) {
        console.log("Congratulations , you have a good GPA!");
    }
}
function task_15() {
    var num = 3;
    var isprime = false;
    if (num <= 1) {
        console.log(num + " is not a prime number.");
        return;
    } else {
        isprime = true;
        for (let i = 0; i < num; i++) {
            if (num % i === 0) {
                isprime = false;
                break;
            }
        }
        if(isprime){
            console.log(num + " is a prime number.");
        }else
        console.log(num + " is not a prime number.");
    }

}
