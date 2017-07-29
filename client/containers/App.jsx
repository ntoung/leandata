import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Graph from '../components/Graph.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="">
        <Graph/>
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