import React, { Component } from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';

class Dynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updater: null,
      config: {
        type: 'line',
      },
      series: [{
        values: [4,5,3,4,5,3,5,4,11]
      }]
    }
    this.chart = React.createRef();
  }
  render() {
    return (
      <div>
        <div>{JSON.stringify(this.state.series)}</div>
        <ZingChart ref={this.chart} data={this.state.config} series={this.state.series}/>
      </div>
    );
  }