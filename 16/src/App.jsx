import { useState } from 'react'
import AllComponents from './Components/AllCOmponents';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
  <AllComponents />
    </BrowserRouter>
  );
}

export default App;
