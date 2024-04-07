import './App.css';

import React, {useEffect, useState} from 'react';

export default function App() {
  const [address, setAddress] = useState({
    country: '',
    city: '',
  });

  // 👇️ Objects/Arrays are different on re-renders
  const obj = {country: 'Germany', city: 'Hamburg'};

  useEffect(() => {
    setAddress(obj);
    console.log('useEffect called');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Country: {address.country}</h1>
      <h1>City: {address.city}</h1>
    </div>
  );
}
