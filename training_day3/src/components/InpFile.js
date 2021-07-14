import { Form } from "react-bootstrap";

function InputFile() {
    return (
        <Form>
            <Form.File style={{float:"left",marginLeft:"10px",display:"inline",marginTop:"20px"}} id="custom-file"/>
        </Form>
    )
}
export default InputFile;
