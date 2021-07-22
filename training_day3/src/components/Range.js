import { Form } from "react-bootstrap";

function Range() {
    return (
        <Form.Group controlId="formBasicRange">
            
            <Form.Control style={{marginRight:"600px", marginTop:"10px",float:"left"}} type="range" />
        </Form.Group>        
    )
}
export default Range;
