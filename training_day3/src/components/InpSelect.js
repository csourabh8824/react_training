import { Form } from "react-bootstrap";

const inpSelect = {
    marginTop: "20px",
    marginLeft:"10px"
}

function InputSelect(props) {
    return (
        <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
                
                <Form.Control style={inpSelect} as="select" custom>
                {
                    props.optionValues.map((item) => 
                        <option>{item}</option>
                )
                }
                </Form.Control>
            </Form.Group>
        </Form>
    )
}
export default InputSelect;
