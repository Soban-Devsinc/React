import React from 'react';
import ReactDOM from 'react-dom/client';
import ColourPicker from "./components/ColourPicker.js"  //useState
import Namechanger from "./components/Namechanger.js"  //useState2
import Calculation from "./components/Calculation.js"   //useEffect
import Globalname from "./components/Globalname.js"     //useContext

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Namechanger />);
