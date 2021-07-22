import { Form } from "react-bootstrap";

function Radio() {
    return (    
            <div style={{marginTop:"20px"}}>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3" style={{float:"left",marginLeft:"10px"}}>
                    <Form.Check inline label="1" name="group1" type={type} id={`inline-${type}-1`} />
                    <Form.Check inline label="2" name="group1" type={type} id={`inline-${type}-2`} />
                    <Form.Check
                        inline
                        disabled
                        label="3 (disabled)"
                        type={type}
                        id={`inline-${type}-3`}
                    />
                    </div>                
                ))}
            </div>    
    )
}
export default Radio;
