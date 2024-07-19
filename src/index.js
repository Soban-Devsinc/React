import React from 'react';
import ReactDOM from 'react-dom/client';
import ColourPicker from "./components/ColourPicker.js"  //useState
import Calculation from "./components/Calculation.js"   //useEffect
import Globalname from "./components/Globalname.js"     //useContext

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Globalname />);
