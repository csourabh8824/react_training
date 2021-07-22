import InputText from './components/InpText';
import InputFile from './components/InpFile';
import Date from './components/Date';
import InputSelect from './components/InpSelect';
import Radio from './components/Radio';
import Range from './components/Range';
import { Form } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const arr = [1,2,3,4,5]
  return (
    <div className="App">
      <div className="container">
        <h3 className="m-2">Displaying input components</h3>
        <div className="inputTags">
          <Form>
            <InputText placeholder="Enter your name"/>
            <InputFile />
            <Date />
            <InputSelect optionValues={arr}/>
            <Radio /> 
            <Range />
          </Form>
        </div>  
      </div>
    </div>
  );
}
export default App;
