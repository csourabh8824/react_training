import { Form } from "react-bootstrap";

function Range() {
    return (
        <Form>
            <Form.Group controlId="formBasicRange">
                
                <Form.Control style={{marginRight:"600px", marginTop:"10px",float:"left"}} type="range" />
            </Form.Group>
        </Form>
    )
}
export default Range;
