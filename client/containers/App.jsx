import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Graph from './Graph.jsx';
import SeriesSelect from './SeriesSelect';
import DateStartSelect from './DateStartSelect';
import DateEndSelect from './DateEndSelect';
import FileUpload from './FileUpload.jsx';
import Table from './Table.jsx';

class App extends React.Component {



  render() {
    return (
      <div className="">
        <Graph/>
        <SeriesSelect/>
        <DateStartSelect/>
        <DateEndSelect/>
        <FileUpload/>
        <Table/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(App);