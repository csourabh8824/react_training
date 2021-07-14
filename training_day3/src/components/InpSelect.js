import { Form } from "react-bootstrap";

const inpSelect = {
    marginTop: "20px",
    marginLeft:"10px"
}

function InputSelect() {
    return (
        <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
                
                <Form.Control style={inpSelect} as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
            </Form.Group>
        </Form>
    )
}
export default InputSelect;
