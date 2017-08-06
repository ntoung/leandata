import React from 'react';

import Graph from './Graph';
import SeriesSelect from './SeriesSelect';
import DateStartSelect from './DateStartSelect';
import DateEndSelect from './DateEndSelect';
import FileUpload from './FileUpload';
import Table from './Table';


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

export default App;