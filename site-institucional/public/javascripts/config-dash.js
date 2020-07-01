//atualizarGrafico();


// só mexer se quiser alterar o tempo de atualização
// ou se souber o que está fazendo!
// function atualizarGrafico() {
//     obterDadosGrafico();
//     setTimeout(atualizarGrafico, 30000);
// }

// // altere aqui as configurações do gráfico
// // (tamanhos, cores, textos, etc)
// function configurarGrafico() {
//     var configuracoes = {
//         responsive: true,
//         maintainAspectRatio: false,
//         stacked: false,
//         scales: {
//             yAxes: [{
//                 type: string,
//                 display: true,
//                 ticks: {
//                     beginAtZero: false
//                 }
//             }]
//         }
//     };


//     return configuracoes;
// }

// altere aqui como os dados serão exibidos
// e como são recuperados do BackEnd
// function obterDadosGrafico() {

//     // neste JSON tem que ser 'labels', 'datasets' etc, 
//     // porque é o padrão do Chart.js
//     var dados = {
//         labels: ["Concluído", "Em andamento", "Atrasado"],
//         datasets: [
//             {
//                 label: [],
//                 fill: true,
//                 data: []
//             }
//         ]
//     };

//     fetch('/tarefas', { cache: 'no-store' }).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (resposta) {

//                 console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

//                 resposta.reverse();

//                 for (i = 0; i < resposta.length; i++) {
//                     var registro = resposta[i];

//                     // aqui, após 'registro.' use os nomes 
//                     // dos atributos que vem no JSON 
//                     // que gerou na consulta ao banco de dados

//                     dados.labels.push(registro.STATUS_ATIVIDADE);

//                     andamento = registro.emAndamento;
//                     concluido = registro.concluida;
//                     atrasado = registro.atrasada;

//                     dados.datasets[0].data.push(registro.emAndamento);
//                     dados.datasets[1].data.push(registro.concluida);
//                     dados.datasets[2].data.push(registro.atrasada);

//                 }
//                 console.log(JSON.stringify(dados));

//                 plotarGrafico(dados);
//             });
//         } else {
//             console.error('Nenhum dado encontrado ou erro na API');
//         }
//     })
//         .catch(function (error) {
//             console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
//         });

// }

// function plotarGrafico(dados) {
//     console.log('iniciando plotagem do gráfico...');

//     var ctx = chart_tarefas.getContext('2d');
//     window.grafico_doughnut = Chart.doughnut(ctx, {
//         data: dados,
//         options: configurarGrafico()
//     });
// }