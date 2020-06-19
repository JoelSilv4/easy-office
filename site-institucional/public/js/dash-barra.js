// dashbar

var ctx = document.getElementById('barraHorizontal').getContext('2d');

// mudando as caracteristicas da fonte geral
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'black';

var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["CPU","Disco","Memória"],
        datasets: [{
            backgroundColor: ["#BFBFBF", "#FFD966", "#7F7F7F"],
            label: "Porcentagem de uso",
            borderWidth: 3,
            barPercentage: 0.5,
            barThickness: 200,
            maxBarThickness: 80,
            minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});