import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Quran from './components/Quran-App/Quran';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Quran></Quran>
    </div>
  );
}

export default App;
