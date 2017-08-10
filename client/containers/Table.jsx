import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/table-fixed.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.displayHeaders = this.displayHeaders.bind(this);
    this.displayData = this.displayData.bind(this);

  }

  displayHeaders() {    
    return (
      <div className="table-row header">
        <div className="wrapper text-4">
          {
            this.props.headers.map((header, key) => {
              return (
                <div className="text" key={key}>
                 {header}
                </div>
              );
            })
          }
          </div>
      </div>
      );
  }

  displayData() {
    return this.props.data.map((row, key) => {
      return (
        <div className="table-row" key={key}>
          <div className="wrapper text-4">
            {
              row.map((item, key) => {
                return (
                  <div className="text" key={key}>{item}</div>
                );
              })
            }
          </div>
        </div>
      );  
    });
  }

  render() {
    return (
      <div className="table-container">
          {this.displayHeaders()}
        <div className="data-container">
          <div className='data' style={{'overflowY': 'scroll'}}>
            {this.displayData()}  
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    headers: state.Data.headers,
    labels: state.Data.labels,
    data: state.Data.data
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(Table);