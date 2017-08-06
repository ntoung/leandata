import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../js/fixedHeaderTable';
import styles from '../styles/table-fixed.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.displayHeaders = this.displayHeaders.bind(this);
    this.displayData = this.displayData.bind(this);

  }

  displayHeaders() {    
    return this.props.headers.map((header, key) => {
      return (
        <th style={{'float':'left'}} key={key}>
          <div> {header} </div>
        </th>

      );
    });
  }

  displayData() {
    return this.props.data.map((row, key) => {
      return (
        <tr key={key} className={styles.cell}>
          <td style={{'float':'left', 'display': 'block'}} key={key}>{this.props.labels[key]}</td>
          { row.map((item, key) => {
            return (
                <td style={{'float':'left', 'display': 'block'}} key={key}>{item}</td>
              );
            })
          }
        </tr>

      )  
    })
    
  }

  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table className="table table-fixed">
            <thead style={{
              'display': 'block',
              'width': '97%'
            }}>
              <tr style={{
                'display': 'block',
                'float': 'left'
              }}>
                {this.displayHeaders()}
              </tr>
            </thead>
            
            <tbody style={{
              'display': 'block',
              'height': '230px',
              'overflowY': 'auto',
              'width': '100%',
            }}>
                {this.displayData()}
            </tbody>
          </table>
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

