// var ctx = document.getElementById('chart_tarefas').getContext('2d');

// // And for a doughnut chart
// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',

//     data: {
//         labels: ["Concluído", "Em andamento", "Atrasado"],
//         datasets: [{
//             backgroundColor: ["#009E23", "#0085FF", "#FF0505"],
//             data: [],
//             borderWidth: 7
//         }],
//     },

//     options: {
//         cutoutPercentage: 80,
//         legend: {
//             display: false
//         }
//     }
// });

// function trello() {
//     fetch("/tarefas/trello", {
//         method: 'GET'
//     }).then((response) => {
//         if (response.ok) {
//             response.json().then(function (resposta) {

//                 var ctx = document.getElementById('chart_tarefas').getContext('2d');

//                 // And for a doughnut chart
//                 var myDoughnutChart = new Chart(ctx, {
//                     type: 'doughnut',
                
//                     data: {
//                         labels: ["Concluído", "Em andamento", "Atrasado"],
//                         datasets: [{
//                             backgroundColor: ["#009E23", "#0085FF", "#FF0505"],
//                             data: [17,22,15],
//                             borderWidth: 7
//                         }],
//                     },
                
//                     options: {
//                         cutoutPercentage: 80,
//                         legend: {
//                             display: false
//                         }
//                     }
//                 });

                // data.datasets[0].data.push(resposta.emAndamento);
                // data.datasets[0].data.push(resposta.concluida);
                // data.datasets[0].data.push(resposta.atrasada);

            // data.push(registro.emAndamento);
            // data.push(registro.concluida);
            // data.push(registro.atrasada);

    //         })
    //     } else {
    //         console.log("Algo deu errado!")
    //     }
    // });
    // setTimeout(hd, 5000);
// }