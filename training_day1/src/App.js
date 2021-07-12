import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Text from './components/Text';
import ButtonComponent from './components/Button';
import InputText from './components/inpText';
import Input from './components/Input';

function App() {
  
  return (
    <div className="App">
      <h1 className="assign1">Assignemnt 1:</h1>
      <hr/>
      <HelloWorld />
      <hr />
      <Text name=" Day1 react training" />
      <hr />
      <ButtonComponent />
      <hr />
      
      <InputText value="" placeholder="Enter your email" />
    </div>
  );
}

export default App;
