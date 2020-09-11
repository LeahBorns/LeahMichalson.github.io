var busSpotChart = document.getElementById('usabilityChart1');
var busSpotChart2 = document.getElementById('usabilityChart2');
var busSpotChart3 = document.getElementById('usabilityPieChart');

var busSpotChart4 = document.getElementById('usabilityTestRound2');

Chart.defaults.global.defaultFontFamily = 'Open Sans';

Chart.defaults.global.responsive = true;

Chart.defaults.global.animation.easing = 'easeOutQuad';

Chart.defaults.global.animation.duration = '2000';

var usabilityChart1 = new Chart(busSpotChart, {
    type: 'horizontalBar',
    data: {
        labels: ['I was running late', 'Bus timing was off', 'Bus Spot too far', 'Bus was full'],
        datasets: [
            {
                backgroundColor: "#294DF2",
                data: [9,8,5,1]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Reason for not taking the bus (# of users)'
        },
        legend: {
            display: false
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

var usabilityChart2 = new Chart(busSpotChart2, {
    type: 'horizontalBar',
    data: {
        labels: ['Live bus locator', 'Bus Capacity', 'Bus location alert', 'Leave reminders', 'I don’t use an app'],
        datasets: [
            {
                backgroundColor: "#294DF2",
                data: [14,7,11,8,1]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Helpful new features (# of users)'
        },
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false
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
var usabilityPieChart = new Chart(busSpotChart3, {
    type: 'pie',
    data: {
        labels: ['Yes', 'No', 'Does’t use the app'],
        datasets: [
            {
                backgroundColor: ["#294DF2","#F2C029","#D94A3D"],
                data: [66.7,28.7,6.7]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Would ride more with new features (%)'
        },
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontSize: 10,
                boxWidth: 10
            }
        }
    }
});

var usabilityTestRound2 = new Chart(busSpotChart4, {
    type: 'bar',
    data: {
        labels: ['User 1', 'User 2', 'User 3', 'User 4'],
        datasets: [
            {
                label: "Onboarding",
                backgroundColor: "#294DF2",
                data: [100,100,100,100]
            },
            {
                label: "Set Alarm",
                backgroundColor: "#71BF39",
                data: [100,100,100,100]
            },
            {
                label: "Find bus schedule",
                backgroundColor: "#F2C029",
                data: [67,33,100,50]
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

usabilityChart1.render();
usabilityChart2.render();
usabilityPieChart.render();
usabilityTestRound2.render();

//var inView = false;
//
//function isScrolledIntoView(elem)
//{
//    var docViewTop = $(window).scrollTop();
//    var docViewBottom = docViewTop + $(window).height();
//
//    var elemTop = $(elem).offset().top;
//    var elemBottom = elemTop + $(elem).height();
//
//    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
//}
//
//$(window).scroll(function() {
//    if (isScrolledIntoView('#usabilityChart1')) {
//        if (inView) { return; }
//        inView = true;
//        new Chart(document.getElementById("usabilityChart1")).horizontalBar(busSpotChart);
//    } else {
//        inView = false;
//    }
//});
