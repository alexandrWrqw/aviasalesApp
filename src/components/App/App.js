import './App.scss';

import Header from '../Header/Header';
import FilterTransfers from '../FilterTransfers/FilterTransfers';
import AviaTickets from '../AviaTickets/AviaTickets';

function App() {
  return (
    <div className="container">
      <Header />

      <div className="grid-container">
        <FilterTransfers />
        <AviaTickets />
      </div>
    </div>
  );
}

export default App;
