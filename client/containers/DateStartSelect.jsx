import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDateStart, setDateEnd } from '../actions/GraphActions';

import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';


class DateStartSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange (value) {
    this.setState({ value });
    
    this.props.setDateStart({'dateStart': value});

    // If we set the date start after date end, we update date end to be the last date
    if (value > this.props.dateEnd) {
      this.props.setDateEnd({'dateEnd': this.props.labels.length - 1});
    }
  };

  render() {
    // Date start can't be the last available date so we skip the last date
    let dates = this.props.labels.slice(0, -1);

    let selectOptions = dates.map((label, index) => {
      return {value: index, label: label};  
    });

    return (
      <div className="container">
        <ReactSelect options={selectOptions} simpleValue clearable={false} 
          name="selected-state" disabled={false} value={this.state.value} 
          onChange={this.handleSelectChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    labels: state.Data.labels,
    dateEnd: state.Graph.dateEnd
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({setDateStart, setDateEnd}, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(DateStartSelect);

