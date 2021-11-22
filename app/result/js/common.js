jQuery(document).ready(function( $ ) {




  var options = {
    labels: ["43", ""],
    series: [43, 57],
    legend: {
      show: false,
    },    
    plotOptions: {
      pie: {
        donut: {
          size: '55%'
        }
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 0,
      dashArray: 0,
    },
    colors:['#FF4E42', '#FFEEEC'],
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: false},
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          }
        }
      }]
    };

    var chart = new ApexCharts(document.querySelector(".mobile-before"), options);
    chart.render();


    var options = {
      labels: ["95", ""],
      series: [95, 5],
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '55%'
          }
        }
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 0,
        dashArray: 0,
      },
      colors:['#01CC64', '#E7FAF0'],
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false},
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            }
          }
        }]
      };

      var chart = new ApexCharts(document.querySelector(".mobile-after"), options);
      chart.render();







      var ctx = document.getElementById("myChart1");
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["Переходы из поисковых систем", "Переходы по рекламе", "Прямые заходы"],
          datasets: [{
            label: '# of Votes',
            data: [50,30, 20],
            backgroundColor: [             
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 79, 22, 0.5)',
            ],
            borderColor: [               
            'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 0
          }]
        },
        options: {
          rotation: -1.5 * Math.PI,
          circumference: 1 * Math.PI
        }
      });


      var ctx2 = document.getElementById("myChart2");
      var myChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
          labels: ["Переходы из поисковых систем", "Переходы по рекламе", "Прямые заходы"],
          datasets: [{
            label: '# of Votes',
            data: [50,32.5, 20],
            backgroundColor: [             
            '#01CC64',
            '#FFA000',
            '#FF4E42',
            ],
            borderColor: [               
            'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 0
          }]
        },
        options: {
          rotation: 1.5 * Math.PI,
          circumference: 1 * Math.PI,
          plugins: {
            datalabels: {
              display: true,
              align: 'bottom',
              backgroundColor: '#ccc',
              borderRadius: 3,
              font: {
                size: 18,
              }
            },
            
          }
        }
      });






}); //ready

