import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './components/register.component';
import Login from './components/login.component';


function App() {
  return (
    <div className="App">
      <Register/>
      <Login />
    </div>
  );
}

export default App;
