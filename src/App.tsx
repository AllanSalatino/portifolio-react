import React from 'react';
import Global from './style/global';

function App() {
  return (
    <div className="App">
      <Global />
      <header>
        <h1>Teste</h1>
        <h2>Teste</h2>
        <h3>Teste</h3>
      </header>
      <main>
        <p>Teste</p>
        <span>Teste</span>
        <button>Teste</button>
        <section>
          <select name="Teste" id="">Teste
            <object data="" type="">Teste</object>
          </select>
        </section>
      </main>
      <footer>
        <form action="">
          <input type="text" placeholder='Teste'/>
        </form>
      </footer>
    </div>
  );
}

export default App;
