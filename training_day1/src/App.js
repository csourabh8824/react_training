import HelloWorld from './components/HelloWorld';
import Text from './components/Text';
import ButtonComponent from './components/Button';
import InputText from './components/inpText';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <h1 className="pageHeading">Assignemnt 1:</h1>
      <div>
        <HelloWorld />
      </div>      
      <div>
        <Text name="Day1 react training" />
      </div>
      <div>
        <ButtonComponent />
      </div>
      <div>
      <InputText value="sourabh" placeholder="Enter your email" />
      </div>    
      </div>
  );
}
export default App;
