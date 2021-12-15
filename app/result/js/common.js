jQuery(document).ready(function( $ ) {



  /************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});*/

/************************************/



if ($("#plans-table2").length) {

  $("#plans-table2").change(function(){
    console.log($(this).val())
    if($(this).val() == 1){
      $('.new-price-1').text('2 500')
      $('.new-price-2').text('3 500')
      $('.new-price-3').text('5 000')
    }
    else if($(this).val() == 2){       
      $('.new-price-1').text('2 000')
      $('.new-price-2').text('3 000')
      $('.new-price-3').text('4 500')   
    }
    else if($(this).val() == 3){
      $('.new-price-1').text('1 500')
      $('.new-price-2').text('2 500')
      $('.new-price-3').text('4 000')      
    }
  });
}


anychart.onDocumentReady(function() {
  // create pie chart with passed data
  chart = anychart.pie(data0);

  // set container id for the chart
  chart.container('mobile-before');
  chart.labels().fontSize(16);
  chart.labels().fontWeight(600);
  chart.labels().fontFamily("Proxima Nova");
  // set chart title text settings
  chart.title('');

  // set chart labels position to outside
  //chart.labels().position('outside');
  chart.labels(false);
  chart.tooltip().enabled(false);
  // create empty area in pie chart
  chart.innerRadius('58%');
  chart.legend(false);

  // initiate chart drawing
  chart.draw();
  //chart.normal().fill("#669999", 0.5);
});


// create data
var data0 = [
{x: "ПК", value: 4300,
normal:  {
  fill: "#FF4E42",

},
},
{x: "", value: 6700,
normal:  {
  fill: "#FFEEEC",

},

},
];





anychart.onDocumentReady(function() {
  // create pie chart with passed data
  chart = anychart.pie(data01);

  // set container id for the chart
  chart.container('mobile-after');
  chart.labels().fontSize(16);
  chart.labels().fontWeight(600);
  chart.labels().fontFamily("Proxima Nova");
  // set chart title text settings
  chart.title('');

  // set chart labels position to outside
  //chart.labels().position('outside');
  chart.labels(false);
  chart.tooltip().enabled(false);
  // create empty area in pie chart
  chart.innerRadius('58%');
  chart.legend(false);

  // initiate chart drawing
  chart.draw();
  //chart.normal().fill("#669999", 0.5);
});


// create data
var data01 = [
{x: "ПК", value: 500,
normal:  {
  fill: "#E7FAF0",

},
},
{x: "", value: 9500,
normal:  {
  fill: "#01CC64",

},

},
];





/*  var options = {
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
      show: false,
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
        breakpoint: 992,
        options: {
          chart: {
            width: 363
          },
          plotOptions: {
            pie: {
              donut: {
                size: '60%'
              }
            }
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
          breakpoint: 992,
          options: {
            chart: {
              width: 363
            },
          plotOptions: {
            pie: {
              donut: {
                size: '60%'
              }
            }
          }
          }
        }]
      };

      var chart = new ApexCharts(document.querySelector(".mobile-after"), options);
      chart.render();*/


      /*****************************/      
      /*****************************/      
      /*****************************/      
      /*****************************/      
      /*****************************/      
      /*****************************/      
      /*****************************/      
      



      var options = {
        series: [
        {
          name: "",
          data: [0, 0, 2500, 2000, 3500, 4000, 4500, 5000, 5500, 6311]
        },
        {
          name: "",
          data: [0, 0, 1500, 1700, 2500, 3000, 2500, 1500, 2500, 3386]
        }
        ],
        chart: {
          height: 494,
          type: 'line',
          dropShadow: {
            enabled: false,            
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#039BE5', '#BDBDBD'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
          width: 2
        },
        
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#ffffff', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['', '', '', '', '', '', '', '', '', ''],
          title: {
            text: ''
          }
        },
        yaxis: {  
          title: {
            text: ''
          }, 
          labels: {
            align: 'left',          
            style: {
              colors: [],
              fontSize: '16px',
              fontFamily: '"Proxima Nova", Arial, sans-serif',
              fontWeight: 400,
              textAlign: 'left',
              cssClass: 'apexcharts-yyy-label',
            },
            offsetX: 45,
            offsetY: -10,
          },//
          tickAmount: 7,
          min: 0,
          max: 7000
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      };

      var chart = new ApexCharts(document.querySelector(".chart-line-1"), options);
      chart.render();


      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/
      /***********************************/













      anychart.onDocumentReady(function() {
  // create pie chart with passed data
  chart = anychart.pie(data1);

  // set container id for the chart
  chart.container('container1');
  chart.labels().fontSize(16);
  chart.labels().fontWeight(600);
  chart.labels().fontFamily("Proxima Nova");
  // set chart title text settings
  chart.title('');

  // set chart labels position to outside
  chart.labels().position('outside');

  // create empty area in pie chart
  chart.innerRadius('55%');
  chart.legend(false);
  
  // initiate chart drawing
  chart.draw();
  //chart.normal().fill("#669999", 0.5);
});


// create data
var data1 = [
{x: "ПК", value: 3800,
normal:  {
  fill: "#01CC64",

},
},
{x: "Смартфоны", value: 2600,
normal:  {
  fill: "#FFA000",

},
},
{x: "Планшеты", value: 360,
normal:  {
  fill: "#FF4E42",

},
},
{x: "ТВ", value: 0,
normal:  {
  fill: "#039BE5",

},
},
];

// create a chart and set the data


anychart.onDocumentReady(function() {
  // create pie chart with passed data
  chart = anychart.pie(data2);

  // set container id for the chart
  chart.container('container2');
  chart.labels().fontSize(16);
  chart.labels().fontWeight(600);
  chart.labels().fontFamily("Proxima Nova");
  // set chart title text settings
  chart.title('');

  // set chart labels position to outside
  chart.labels().position('outside');

  // create empty area in pie chart
  chart.innerRadius('55%');
  chart.legend(false);

  // initiate chart drawing
  chart.draw();
  //chart.normal().fill("#669999", 0.5);
});


// create data
var data2 = [
{x: "ПК", value: 2800,
normal:  {
  fill: "#01CC64",

},
},
{x: "Смартфоны", value: 4233,
normal:  {
  fill: "#FFA000",

},
},
{x: "Планшеты", value: 160,
normal:  {
  fill: "#FF4E42",

},
},
{x: "ТВ", value: 0,
normal:  {
  fill: "#039BE5",

},
},
];


//3

anychart.onDocumentReady(function() {
  // create pie chart with passed data
  chart = anychart.pie(data3);

  // set container id for the chart
  chart.container('container3');
  chart.labels().fontSize(16);
  chart.labels().fontWeight(600);
  chart.labels().fontFamily("Proxima Nova");
  // set chart title text settings
  chart.title('');

  // set chart labels position to outside
  chart.labels().position('outside');

  // create empty area in pie chart
  chart.innerRadius('55%');
  chart.legend(false);

  // initiate chart drawing
  chart.draw();
  //chart.normal().fill("#669999", 0.5);
});


// create data
var data3 = [
{x: "Переходы из поисковых систем", value: 2300,
normal:  {
  fill: "#01CC64",

},
},
{x: "Переходы по рекламе", value: 500,
normal:  {
  fill: "#FFA000",

},
},
{x: "Прямые заходы", value: 300,
normal:  {
  fill: "#FF4E42",

},
},
{x: "Внутренние переходы", value: 250,
normal:  {
  fill: "#039BE5",

},
},
{x: "Переходы по ссылкам", value: 50,
normal:  {
  fill: "#BDBDBD",

},
},
{x: "Остальные", value: 250,
normal:  {
  fill: "#E5E5E5",

},
},
];

//4

anychart.onDocumentReady(function() {
  // create pie chart with passed data
  chart = anychart.pie(data4);

  // set container id for the chart
  chart.container('container4');
  chart.labels().fontSize(16);
  chart.labels().fontWeight(600);
  chart.labels().fontFamily("Proxima Nova");
  // set chart title text settings
  chart.title('');

  // set chart labels position to outside
  chart.labels().position('outside');

  // create empty area in pie chart
  chart.innerRadius('55%');
  chart.legend(false);

  // initiate chart drawing
  chart.draw();
  //chart.normal().fill("#669999", 0.5);
});


// create data
var data4 = [
{x: "Переходы из поисковых систем", value: 2300,
normal:  {
  fill: "#01CC64",

},
},
{x: "Переходы по рекламе", value: 500,
normal:  {
  fill: "#FFA000",

},
},
{x: "Прямые заходы", value: 300,
normal:  {
  fill: "#FF4E42",

},
},
{x: "Внутренние переходы", value: 250,
normal:  {
  fill: "#039BE5",

},
},
{x: "Переходы по ссылкам", value: 50,
normal:  {
  fill: "#BDBDBD",

},
},
{x: "Остальные", value: 250,
normal:  {
  fill: "#E5E5E5",

},
},
];


$('.charts-grow-7000 .charts-gcol-inn').each(function () {
  let valu = $(this).find('span').text();
  let calc = (+valu / 7000)*100*4.2;
  $(this).css("height", calc+'px');
});



$('.charts-grow-3500 .charts-gcol-inn').each(function () {
  let valu = $(this).find('span').text();
  let calc = (+valu / 3500)*100*4.2;
  $(this).css("height", calc+'px');
});

$('.charts-grow-700 .charts-gcol-inn').each(function () {
  let valu = $(this).find('span').text();
  let calc = (+valu / 700)*100*4.2;
  $(this).css("height", calc+'px');
});

$('.charts-grow-hor .charts-gcol-inn').each(function () {
  let valu = $(this).find('span').text();
  let calc = (+valu / 7000)*100*3.2;
  $(this).css("width", calc+'px');
});


}); //ready

