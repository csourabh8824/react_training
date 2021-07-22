import { Form } from "react-bootstrap";

function InputText(props) {
    return (
        <div className="container">
            <Form.Group controlId="formGroupEmail">
                <Form.Control type="text" placeholder={props.placeholder} />
            </Form.Group>
        </div>
    )
}
export default InputText;
