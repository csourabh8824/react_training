import { Form } from "react-bootstrap";

const dateInput = {    
    marginTop: "20px",
    float: "left",
    marginLeft:"10px",
    marginRight:"450px"
}

function InputDate() {
    return (
        <Form>            
            <input style={dateInput} type="date" placeholder="Your name.." />       
        </Form>
    )
}
export default InputDate;
