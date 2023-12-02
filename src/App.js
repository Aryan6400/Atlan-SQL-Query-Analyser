import HistoryCard from './components/HistoryCard';
import './App.css';
import HistoryHeader from './components/HistoryHeader';
import InputAndVisualise from './components/InputAndVisualise';
import Editor from './components/Editor';
import Output from './components/Output';
import { useHistory } from './context/HistoryContext';
import ImagePopup from './components/PopupChart';
import { useTheme } from './context/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';


function App() {
  const {history} = useHistory();
  const {theme,setTheme} = useTheme();
  
  // Displaying the header, panels, graphs and tables in this app.
  return (
    <>
      <header className={`header ${theme=="Dark"?"header-dark":null}`}>
        <span className={theme=="Dark"?"dark-font":null}>SQL query analyzer</span>
        {theme=="Dark" ? 
          <IconButton title='Dark Mode' onClick={()=>setTheme("Light")}>
            <LightModeIcon className='theme-toggle-light' />
          </IconButton>
          :
          <IconButton title='Light Mode' onClick={()=>setTheme("Dark")}>
            <DarkModeIcon className='theme-toggle-dark' />
          </IconButton>
        }
      </header>
      
      <div className={`App ${theme=="Dark"?"App-dark":null}`}>
        <div className={`left-panel ${theme=="Dark"?"App-dark":null}`}>
          <InputAndVisualise />
          <ImagePopup />
        </div>
        <div className={`central-panel ${theme=="Dark"?"App-dark":null}`}>
          <Editor/>
          <Output/>
        </div>
        <div className={`right-panel ${theme=="Dark"?"App-dark":null}`}>
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
