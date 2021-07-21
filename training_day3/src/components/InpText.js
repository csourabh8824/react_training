import { Form } from "react-bootstrap";

function InputText(props) {
    return (
        <div className="container">
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="text" placeholder={props.placeholder} />
                </Form.Group>
            </Form>
        </div>
    )
}
export default InputText;
