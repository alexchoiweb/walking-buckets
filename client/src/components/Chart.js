import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [{
            label: 'Shot Percentage',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    }
  }

  setData = this.setData.bind(this);

  componentDidMount() {
    this.setData()
  }

  setData() {
    let data = this.state.chartData;
    let makes = [];
    let dates = [];

    this.props.shotLog.map((log) => {
      makes.push(log.makes)
    })

    this.props.shotLog.map((log) => {
      dates.unshift(log.date.slice(5,10))
    })

    data.labels = dates
    data.datasets[1] = {data: makes}

    this.setState({
      chartData: data
    })
    console.log('set state data')
  }

  render() {
    return (
      <div className="div-chart">
        <Line
          data={this.state.chartData}
          options={{
            
          }}
        />
      </div>
    )
  }
}

export default Chart;