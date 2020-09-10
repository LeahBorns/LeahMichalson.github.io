var ctx = document.getElementById('myChart');

Chart.defaults.global.defaultFontFamily = 'Open Sans';

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['User 1', 'User 2', 'User 3'],
        datasets: [
            {
                label: "Challenges",
                backgroundColor: "#86BBD8",
                data: [.25,1,1]
            },
            {
                label: "Record",
                backgroundColor: "#E0A458",
                data: [.6,1,.8]
            },
            {
                label: "Profile",
                backgroundColor: "#40476D",
                data: [1,1,1]
            },
            {
                label: "Feed/Leaderboard",
                backgroundColor: "#79B473",
                data: [1,.75,.67]
            }
                  ]
    },
    options: {

        layout: {
          padding: {
              top: 32,
              left: 0,
              right: 0,
              bottom: 0
          }
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
