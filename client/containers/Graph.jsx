import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChartistGraph from 'react-chartist';


class Graph extends Component {
  constructor(props) {
    super(props);

    this.range = this.range.bind(this);
  }

  range(arr) {
    return arr.slice(this.props.dateStart, this.props.dateEnd + 1);
  }

  render() {
    let series = [];
    
    for (let header in this.props.series) {      
      if (this.props.displayedSeries[header]) {
        let data = this.range(this.props.series[header]);
        series.push(data);
      }
    }

    let data = {
      'labels': this.range(this.props.labels),
      'series': series
    };

    let graphOptions = {
      fullWidth: true,
      chartPadding: {
        right: 20
      },
      low: 0,
      divisor: 4,
      // axisX: {
      //   labelInterpolationFnc: function(value, index) {
      //     return index % 13 === 0 ? 'W' + value : null;
      //   }
      // }
    };

    return (
      <div className="container">
        <ChartistGraph data={data} options={graphOptions} type={'Line'} />
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    labels: state.Data.labels,
    series: state.Data.series,
    dateStart: state.Graph.dateStart,
    dateEnd: state.Graph.dateEnd,
    displayedSeries: state.Graph.displayedSeries
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(Graph);

