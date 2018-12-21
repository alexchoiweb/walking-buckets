import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [],
        datasets: [{
          label: 'Label for data',
          data: [],
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true
      },
    }
  }

  
  setData = this.setData.bind(this);

  componentDidMount() {
    this.setData()
  }

  setData() {
    let data = this.state.chartData;

    let percentagesLayup = [];
    let percentagesMidrange = [];
    let percentagesThree = [];
    let dates = [];

    this.props.shotLog.map((log) => {
      let percent = Math.round((log.makes/log.attempts)*1000)/10
      if (log.shotType === 'Layup') {
        return percentagesLayup.unshift(percent);
      } else if (log.shotType === 'Midrange') {
        return percentagesMidrange.unshift(percent);
      } else {
        return percentagesThree.unshift(percent)
      }
    })

    this.props.shotLog.map((log) => {
      dates.unshift(log.date.slice(5,10))
    })

    data.labels = dates;
    data.datasets[0] = {
        label: 'Layups',
        data: percentagesLayup,
        backgroundColor: 'rgb(255, 219, 147)',
        borderColor: 'rgb(255, 219, 147)',
        fill: false
    };
    data.datasets[1] = {
      label: 'Midrange',
      data: percentagesMidrange,
      backgroundColor: 'rgb(255, 111, 102)',
      borderColor: 'rgb(255, 111, 102)',
      fill: false
    };
    data.datasets[2] = {
      label: 'Threes',
      data: percentagesThree,
      backgroundColor: 'rgb(104, 152, 255)',
      borderColor: 'rgb(104, 152, 255)',
      fill: false
    };
    data.options = {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
    };

    this.setState({
      chartData: data
    })
  }

  render() {
    return (
      <div className="div-chart">
        <Line
          data={this.state.chartData}
          height={400}
          options={{ }} />
      </div>
    )
  }
}

export default Chart;