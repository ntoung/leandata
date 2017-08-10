import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { customSort } from '../util';
import { setData, setSeries, setHeaders, setLabels } from '../actions/DataActions';
import { setDisplayedSeries, setDateStart, setDateEnd } from '../actions/GraphActions';


class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.uploadFile = this.uploadFile.bind(this);
    this.loadHandler = this.loadHandler.bind(this);
    this.processData = this.processData.bind(this);
  }

  uploadFile(e) {
    const reader = new FileReader();

    reader.readAsText(e.target.files[0]);
    reader.onload = this.loadHandler;
  }


  loadHandler(e) {
    var csv = e.target.result;
    this.processData(csv);
  }
  
  processData(csv) {
    let lines = [], 
        headers = [], 
        data = [], 
        labels = [], 
        series = {},
        displayedSeries = {};

    lines = csv.split(/\r\n|\n/);
    headers = lines.shift().split(',');
    headers.slice(1).forEach(header => {displayedSeries[header] = true}); // Initialize displayedSeries

    // convert each line into an array so we can use Array.sort()
    lines.forEach((line) => {
      data.push(line.split(','));
    });
    
    // sort data
    data.sort(customSort);

    // debugger;

    // results is data with gaps filled
    let results = [];
    // get first index
    let startDate = data[0][0]; // "Q1-2010"
    let startQuarter = +startDate.slice(1,2);
    let startYear = +startDate.slice(-4);

    // get last index     
    let endDate = data[data.length-1][0]; // "Q1-2017"
    let endQuarter = +endDate.slice(1,2);
    let endYear = +endDate.slice(-4);


    for (let d = 0, y = startYear; y < endYear; y++) {
      for (let q = 1; q <= 4; q++) {
        let label = `Q${q}-${y}`;
        let row;

        if (data[d][0] === label) {
          row = data[d];
          d++;
        } else {
          row = [label,null,null,null];
        }

        labels.push(label);
        results.push(row);
      }
    }

    // represent the data in series
    results.forEach((line) => {
      line.forEach((datum, index) => {
        // Skip the first index for Period
        series[headers[index+1]] = series[headers[index+1]] || [];
        series[headers[index+1]].push(+datum);
      })
    });

    // Update store
    this.props.setHeaders({'headers':headers});
    this.props.setSeries({'series':series});
    this.props.setLabels({'labels': labels});
    this.props.setData({'data': results});
    this.props.setDateStart({'dateStart': 0});
    this.props.setDateEnd({'dateEnd': labels.length - 1});    
    this.props.setDisplayedSeries({'displayedSeries': displayedSeries});
  };

  render() {
    return (
      <div className="container">
        <input style={{'margin': '0 auto'}} type="file" accept=".csv" encType="multipart/form-data" onChange={this.uploadFile} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setData, setSeries, setHeaders, setLabels, setDateStart, setDateEnd, setDisplayedSeries}, dispatch); 

export default connect(null, mapDispatchToProps)(FileUpload);

