import React from 'react'
import { useState } from 'react';

const IncDec = () => {

    const [initial, setinitial] = useState(0);

    const handleInc = () => {
        setinitial(Number(initial)+1);
    }

    const handleDec = () => {
        setinitial(initial-1);
    }

  return (
    <div>
        <h1 data-testid="disp">Increment and Decrement</h1>
        <h2 data-testid="initial">{initial}</h2>
        <button data-testid="button-up" onClick={handleInc}>+</button>
        <button disabled data-testid="button-down" onClick={handleDec}>-</button>
    </div>
  )
}

export default IncDec