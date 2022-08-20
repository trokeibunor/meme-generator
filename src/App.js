import './App.css';
import Header from './components/Header';
import Body from './components/Body';
function App() {
  return (
    <div className="App  flex w-100 h-screen bg-slate-300">
      <div className="content w-5/12 h-auto m-auto bg-white">
        <Header/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
