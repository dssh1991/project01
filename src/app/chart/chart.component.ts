import { MessagesService } from './../services/messages.service';
import { Message } from './../services/message';
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
// import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  // LineChart: any;

  constructor() { }

  ngOnInit() { }

  // tslint:disable-next-line:member-ordering
  option = {
    title: {
      text: 'Gráfico',
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      top: '15%',
      containLabel: true
    },
    legend: {
      data: ['Temp1', 'Hum1']
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    ],
    yAxis: {
      type: 'value'
    }
    ,
    series: [
      {
        name: 'Temp1',
        type: 'line',
        areaStyle: {
          normal: {
            type: 'default',
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(199, 37, 50,0.2)'
            }, {
              offset: 1,
              color: 'rgba(199, 37, 50,0.2)'
            }], false)
          }
        },
        smooth: true,
        itemStyle: {
          normal: { areaStyle: { type: 'default' } }
        },
        data: [136, 375, 380, 449, 114, 267, 142, 318, 357, 193, 421, 391]
      },
      {
        name: 'Hum1',
        type: 'line',
        areaStyle: {
          normal: {
            type: 'default',
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(19, 37, 250,0.2)'
            }, {
              offset: 1,
              color: 'rgba(19, 37, 250,0.2)'
            }], false)
          }
        },
        smooth: true,
        itemStyle: { normal: { areaStyle: { type: 'default' } } },
        data: [610, 312, 221, 654, 910, 630, 310, 521, 354, 560, 830, 310]
      }
    ]
  };
  /*this.LineChart = new Chart('LineChart', {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb'],
      datasets: [{
        label: 'prueba',
        data: [9, 7],
        fill: false,
        lineTension: 0.2,
        borderColor: 'red',
        borderWidth: 1
      }]
    },
    options: {
      title: {
        text: 'Line Chart',
        display: true
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });*/
}

