import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './components/header';
import ChargeBack from './components/chargeBack';
import Excel from './components/excel';
import ForcastView from './components/forcastView';
import { useState } from 'react';

function App() {
  const [idx, setIdx] = useState(0)
  console.log(idx)
  return (
    <div className="App">
      <DrawerAppBar setIdx={setIdx} />

      {idx == 0 ? <ForcastView /> : idx == 1 ? <ChargeBack /> : <Excel />}
    </div>
  );
}

export default App;
