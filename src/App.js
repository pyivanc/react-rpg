import React from 'react'
import World from './World'
import { StoreProvider } from './store'

function App() {
  return (
    <StoreProvider>
      <World />
    </StoreProvider>
  );
}

export default App;
