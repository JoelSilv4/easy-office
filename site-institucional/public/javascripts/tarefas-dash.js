var ctx = document.getElementById('chart-tarefas').getContext('2d');

// And for a doughnut chart
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    
    data: {
        labels: ["Concluído","Em andamento","Atrasado"],
        datasets: [{
            backgroundColor: ["#009E23", "#0085FF", "#FF0505"],
            data: [28, 8, 1],
            borderWidth: 7
        }],
    },

    options: {
        cutoutPercentage: 80,
        legend: {
            display: false
        }
    }
});