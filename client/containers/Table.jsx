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
            <div className="text">{this.props.labels[key]}</div>
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
      <div className="container-fluid" >
        {this.displayHeaders()}
            
        <div style={{overflowY: 'scroll', height: '250px'}}>
          {this.displayData()}  
        </div>
      </div>
    );
  }
}
/*
  <div className="container">
        <div className="table-responsive">
          <div className="table table-fixed">
            <div style={{
              'display': 'block',
              'width': '97%'
            }}>
              <div style={{
                'display': 'block',
                'float': 'left'
              }}>
                {this.displayHeaders()}
              </div>
            </div>
            
            <div style={{
              'display': 'block',
              'height': '230px',
              'overflowY': 'auto',
              'width': '100%',
            }}>
                {this.displayData()}
            </div>
          </div>
        </div>
      </div>
*/

const mapStateToProps = state => {
  return {
    headers: state.Data.headers,
    labels: state.Data.labels,
    data: state.Data.data
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(Table);