var greenerChart = document.getElementById('myChart');

Chart.defaults.global.defaultFontFamily = 'Open Sans';

Chart.defaults.global.responsive = true;

Chart.defaults.global.animation.easing = 'easeOutQuad';

Chart.defaults.global.animation.duration = '2000';

var myChart = new Chart(greenerChart, {
    type: 'bar',
    data: {
        labels: ['User 1', 'User 2', 'User 3'],
        datasets: [
            {
                label: "Challenges",
                backgroundColor: "#86BBD8",
                data: [25,100,100]
            },
            {
                label: "Record",
                backgroundColor: "#E0A458",
                data: [60,100,80]
            },
            {
                label: "Profile",
                backgroundColor: "#40476D",
                data: [100,100,100]
            },
            {
                label: "Feed/Leaderboard",
                backgroundColor: "#79B473",
                data: [100,75,67]
            }
                  ]
    },
    options: {
        title: {
            display: true,
            text: 'Success Rate (%)'
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontSize: 10,
                boxWidth: 10
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//var inView = false;
//
//function isScrolledIntoView(elem)
//{
//    var docViewTop = $(window).scrollTop();
//    var docViewBottom = docViewTop + $(window).height();
//
//    var elemTop = $(elem).offset();
//    var elemBottom = elemTop + $(elem).height();
//
//    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
//}
//
//$(window).scroll(function() {
//    if (isScrolledIntoView('#canvas')) {
//        if (inView) { return; }
//        inView = true;
//        new Chart(
//            document.getElementById("canvas").getContext("2d"),
//            {type: 'bar', data: data, options: option });
//    }
//});
