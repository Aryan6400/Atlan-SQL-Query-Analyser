import HistoryCard from './components/HistoryCard';
import './App.css';
import HistoryHeader from './components/HistoryHeader';
import InputAndVisualise from './components/InputAndVisualise';
import Editor from './components/Editor';
import Output from './components/Output';
import { useHistory } from './context/HistoryContext';
import ImagePopup from './components/PopupChart';

function App() {
  const {history} = useHistory();
  return (
    <>
      <header className='header'>
        SQL query analyzer
      </header>
      <div className="App">
        <div className='left-panel'>
          <InputAndVisualise />
          <ImagePopup />
        </div>
        <div className='central-panel'>
          <Editor/>
          <Output/>
        </div>
        <div className='right-panel'>
          <HistoryHeader />
          {
            history.map((el,index)=>{
              return <HistoryCard key={index} title={el.title} text={el.code} timestamp={el.timestamp}/>
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
