import React from 'react';
import AnimationProvider from './contexts/AnimationContext';
import ApiProvider from './contexts/apiContext';
import AllRoutes from './routes';

function App() {
  return (
    <div className="App">
      <AnimationProvider>
        <ApiProvider>
          <AllRoutes />
        </ApiProvider>
      </AnimationProvider>
    </div>
  );
}

export default App;
