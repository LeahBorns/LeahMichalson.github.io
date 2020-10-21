var grommChart = document.getElementById('userSurveyChart1');
var grommChart2 = document.getElementById('userSurveyChart2');
var grommChart3 = document.getElementById('userSurveyChart3');

var grommChart4 = document.getElementById('usabilityTest');

Chart.defaults.global.defaultFontFamily = 'Open Sans';

Chart.defaults.global.responsive = true;

Chart.defaults.global.animation.easing = 'easeOutQuad';

Chart.defaults.global.animation.duration = '2000';

var userSurveyChart1 = new Chart(grommChart, {
    type: 'pie',
    data: {
        labels: ['Schedule in real time', 'Reminders before event', 'Many time slots', 'Quick sign-up'],
        datasets: [
            {
                backgroundColor: ["#1C5D99","#B0E298","#F1D302","#E55934"],
                data: [39.3,10.7,39.3,10.7]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Current features users like the most (%)'
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

var userSurveyChart2 = new Chart(grommChart2, {
    type: 'pie',
    data: {
        labels: ['No clear cancel or reschedule option', 'No verification after sign-up', 'Can not sync with calendar'],
        datasets: [
            {
                backgroundColor: ["#1C5D99","#B0E298","#F1D302"],
                data: [38.1,38.1,23.8]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Current features users like the least (%)'
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
var userSurveyChart3 = new Chart(grommChart3, {
    type: 'pie',
    data: {
        labels: ['Link up to calendar', 'Alert when bike is done with summary', 'Pay in App','Select type of service','Reminder close to appointment','Confirmation after sign-up'],
        datasets: [
            {
                backgroundColor: ["#1C5D99","#B0E298","#F1D302","#E55934","#DDEBF9","#498F28"],
                data: [32.7,22.4,22.4,6.1,10.2,6.1]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Features users would find helpful (%)'
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

var usabilityTest = new Chart(grommChart4, {
type: 'bar',
data: {
labels: ['User 1', 'User 2', 'User 3', 'User 4'],
datasets: [
{
label: "Onboarding",
    backgroundColor: "#1C5D99",
data: [100,100,100,100]
},
{
label: "Schedule",
    backgroundColor: "#B0E298",
data: [100,100,100,100]
},
{
label: "Appointment details",
    backgroundColor: "#F1D302",
data: [100,100,100,100]
},
    {
        label: "Find new event",
        backgroundColor: "#E55934",
        data: [100,80,67,67]
    },
    {
        label: "Conplete transaction",
        backgroundColor: "#DDEBF9",
        data: [100,100,100,100]
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

userSurveyChart1.render();
userSurveyChart2.render();
userSurveyChart3.render();
usabilityTest.render();

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
