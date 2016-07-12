/**
 * Created by Administrator on 2016/6/2.
 */
(function (){
  var myChart = echarts.init($("#main")[0]);
  var dataAll = [
    [
      [10.0, 8.04],
      [8.0, 6.95],
      [13.0, 7.58],
      [9.0, 8.81],
      [11.0, 8.33],
      [14.0, 9.96],
      [6.0, 7.24],
      [4.0, 4.26],
      [12.0, 10.84],
      [7.0, 4.82],
      [5.0, 5.68]
    ],
  ];
  // 指定图表的配置项和数据
  var markLineOpt = {
    animation: false,
    label: {
      normal: {
        formatter: 'y = x + 5',
        textStyle: {
          align: 'right'
        }
      }
    },
    lineStyle: {
      normal: {
        type: 'solid'
      }
    },
    tooltip: {
      formatter: 'y = x + 5'
    },
    data: [[{
      coord: [0, 3],
      symbol: 'none'
    }, {
      coord: [20, 13],
      symbol: 'none'
    }]]
  };

  option = {
    title: {
      text: 'Anscombe\'s quartet',
      x: 'center',
      y: 0
    },
    grid: [
      {x: '7%', y: '7%', width: '80%', height: '80%'},

    ],
    tooltip: {
      formatter: 'Group {a}: ({c})'
    },
    xAxis: [
      {gridIndex: 0, min: 0, max: 20},

    ],
    yAxis: [
      {gridIndex: 0, min: 0, max: 15},

    ],
    series: [
      {
        name: 'I',
        type: 'scatter',
        xAxisIndex: [0],
        yAxisIndex: [0],
        data: dataAll[0],
        markLine: markLineOpt
      },
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  $("#sayHi").click(function (){
    var result = prompt("what's your name");
    if(result!==null){
      alert("welcome, "+result);
    }
  });
  $("#printer").click(function (){
    $("#stop").removeClass("one");
    $("#stop").addClass("start");
  })
})();
