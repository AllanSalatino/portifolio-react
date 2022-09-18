import React from 'react';
import AnimationProvider from './contexts';
import AllRoutes from './routes';

function App() {
  return (
    <div className="App">
      <AnimationProvider>
        <AllRoutes />
      </AnimationProvider>
    </div>
  );
}

export default App;
