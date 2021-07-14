import { Form } from "react-bootstrap";

function InputText() {
    return (
        <div className="container">
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
            </Form>
        </div>
    )
}
export default InputText;
