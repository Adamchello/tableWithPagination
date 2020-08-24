import React from 'react';
import './App.css';
import PaginatedTable from './components/paginatedTable';
import UsePagination from './components/usePagination';
import data from './assets/data';

function App() {
  return (
    <div className="App">
      <PaginatedTable dataEntries={data} />
      <UsePagination dataEntries={data} elementsOnPage={2} />
    </div>
  );
}

export default App;
