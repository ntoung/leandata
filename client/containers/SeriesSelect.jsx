import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import '../styles/select.css';
import { setDisplayedSeries } from '../actions/GraphActions';

class SeriesSelect extends Component {
  constructor(props) {
    super(props);
    
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange (values) {
    // React select joins values by a comma, so we have to split by comma and recreate
    // our displayed series
    let displayedSeries = {};
    values.split(',').forEach((value) => displayedSeries[value] = true);
    
    this.props.setDisplayedSeries({displayedSeries: displayedSeries});
  };

  render() {
    let selectOptions = this.props.headers.slice(1).map(header => {
      return {value: header, label: header};
    });

    return (
      <div className="container">
        <ReactSelect multi simpleValue 
          value={Object.keys(this.props.displayedSeries)} 
          placeholder="Select Series to display" 
          options={selectOptions} 
          onChange={this.handleSelectChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    headers: state.Data.headers,
    displayedSeries: state.Graph.displayedSeries
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({ setDisplayedSeries }, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(SeriesSelect);

