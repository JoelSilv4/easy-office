// Essa variavel é necessaria para transformar o canvas num objeto
    // Estou pegando o elemento atraves da classe por isso o get
    var ctx = document.getElementsByClassName("grafico-produtividade");

    // setando a configuração dele
    var chartGraph = new Chart (ctx,{
        type: 'line',
        data: {
            labels: ["Segunda","Terça","Quarta","Quinta","Sexta"],
                datasets: [{
                    label: 'Produtividade pela semana',
                    data: [5, 6, 3, 5, 8],
                    borderColor: 'white',
                    backgroundColor: 'transparent',
                    borderWidth: 6,
                    pointRadius: 5
            }],
        },
        options: {
            legend: {
                labels: {
                    fontColor: 'white',
                    fontSize: 18
                }
            },
            maintainAspectRatio: false,
            title: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: 'white',
                        fontSize: 16
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: 'white',
                        fontSize: 16
                    }
                }]
            }
        }
    });