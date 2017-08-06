import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDateEnd } from '../actions/GraphActions';

import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';


class DateEndSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.dateEnd
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }



  handleSelectChange (value) {
    let dateEnd = value; //this.props.dateStart + value;
    this.props.setDateEnd({'dateEnd': dateEnd});
  };

  render() {
    let dateStart = this.props.dateStart;
    var options = this.props.labels.slice(dateStart).map((label, index) => {
      return {value: dateStart + index, label: label};  
    });
    
    return (
      <div className="container">
        <ReactSelect options={options} simpleValue clearable={false} 
          name="selected-state" disabled={false} value={this.props.dateEnd} 
          onChange={this.handleSelectChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dateStart: state.Graph.dateStart,
    dateEnd: state.Graph.dateEnd,
    labels: state.Data.labels
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({setDateEnd}, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(DateEndSelect);

