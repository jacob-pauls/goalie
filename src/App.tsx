import React from 'react';
import { Counter } from './components/Counter';

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;