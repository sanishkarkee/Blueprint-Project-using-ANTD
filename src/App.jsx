import React from 'react';
import './App.css';
import FormCompo from './components/FormCompo';

async function addDatahandler(receiveddata) {
  console.log(receiveddata, 'This is received data in App.js');
  const response = await fetch(
    'http://192.168.1.71:8083/api/FiscalYearUI',
    {
      method: 'POST',
      body: JSON.stringify(receiveddata),
      headers: {
        'Content-type': 'application/json',
      },
    }
  );
  const data = await response.json();
  console.log(data);
}

function App() {
  return <FormCompo onAddData={addDatahandler}></FormCompo>;
}

export default App;
