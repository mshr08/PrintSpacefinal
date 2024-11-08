var countDownDate = new Date("Nov 30, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 *24));
    var hours = Math.floor((distance % (1000 * 60 * 60 *24))/(1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60))/1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

    }
}, 1000);


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    let initial_count = 0;
    const final_count = counter.dataset.count;

    let  counting = setInterval(updateCounting, 1);

   function updateCounting() {

        if (initial_count < 1000) {
            initial_count += 5;
            counter.innerText = initial_count;
        }

        if (initial_count >= 1000) {
            initial_count += 100;
            counter.innerText = initial_count;
        }

        if (initial_count >= 10000) {
            initial_count += 10000;
            counter.innerText = '$' + (initial_count / 10000).toFixed(0) + 'M';
        }

        if (initial_count >= 1000000) {
            initial_count += 500000;
            counter.innerText = (initial_count / 1000000).toFixed(0) + 'M+';
        }
        

        if (initial_count >= final_count) {
            clearInterval(counting);
        }
    }
})
