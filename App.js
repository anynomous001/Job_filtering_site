import Main from "./components/Main";
import Header from "./components/header";
import jsonData from './data.json';
import React from 'react'

const DataContext = React.createContext()

function App() {
  const [filterValue, setFilterValue] = React.useState([]);

  return (
    <div className="App">
      <DataContext.Provider value={{ jsonData, filterValue, setFilterValue }}>

        <Header />
        <Main />
      </DataContext.Provider>

    </div>
  );
}
export default App;
export { DataContext }
