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

    // process data before updating store
    data.forEach((line) => {
      labels.push(line.shift());
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
    this.props.setData({'data': data});
    this.props.setDateStart({'dateStart': 0});
    this.props.setDateEnd({'dateEnd': labels.length - 1});    
    this.props.setDisplayedSeries({'displayedSeries': displayedSeries});
    


  };



  render() {
    return (
      <div className="container">
        <input type="file" accept=".csv" encType="multipart/form-data" onChange={this.uploadFile} />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({ setData, setSeries, setHeaders, setLabels, setDateStart, setDateEnd, setDisplayedSeries}, dispatch); 

export default connect(null, mapDispatchToProps)(FileUpload);

