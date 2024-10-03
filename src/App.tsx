import './App.css';
import { Provider } from 'react-redux';
import Wrapper from './components/wrapper';
import bg from './assets/bg-header-desktop.svg';
import { store } from './store/store'; // Adjust the path if needed

function App() {
  return (
    <Provider store={store}>
      <div className="App"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 20vh',
          minHeight: '100vh',
        }}
      >
        <header className="App-body">
          <div>
            <Wrapper />
          </div>
        </header>
      </div>
    </Provider>
  );
}

export default App;
