import './App.css';
import React, {useState, useRef} from 'react';
import Menu from './Menu';

export default function App() {
  const inputRef  = useRef(null);
  const[item, setItem] = useState('');
  const addItem = () => {
    setItem(inputRef.current.value);
  }
  return (
    <div>
      <div>Add to menu</div>
      <div style={{display: 'flex'}}>
      <label>Name:</label>
      <input type='text' ref={inputRef}/>
      </div>
      <button style={{display: 'flex'}} onClick={addItem}>Add Drink</button>
      <Menu item={item}/>
    </div>
  );
}



