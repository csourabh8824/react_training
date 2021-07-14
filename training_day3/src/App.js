import InputText from './components/InpText';
import InputFile from './components/InpFile';
import Date from './components/Date';
import InputSelect from './components/InpSelect';
import Radio from './components/Radio';
import Range from './components/Range';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="m-2">Displaying input components</h3>
        <div className="inputTags">
          <InputText />
          <InputFile />
          <Date />
          <InputSelect />
          <Radio /> 
          <Range />
        </div>  
      </div>
    </div>
  );
}
export default App;
