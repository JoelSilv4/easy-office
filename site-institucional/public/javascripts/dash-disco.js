// Essa variavel é necessaria para transformar o canvas num objeto
    var ctx = document.getElementsByClassName("grafico-disco");
    // setando a configuração dele
    var chartGraph = new Chart (ctx,{
        type: 'line',
        data: {
            labels: ["07:00","09:00","11:00","13:00","15:00","17:00","19:00"],
                datasets: [{
                    label: 'Disco',
                    data: [0, 10, 30, 80, 60, 30, 90],
                    borderColor: 'white',
                    backgroundColor: 'transparent',
                    borderWidth: 4
            }],
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: false
            },
        }
    });