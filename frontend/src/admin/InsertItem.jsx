
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios"

const InsertItem=()=>{
    const[input,setInput]=useState({});
    const[myimage,setMyimage]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setInput(values=>({...values,[name]:value}));
    }

    const handleImage=(e)=>{
        setMyimage(e.target.files[0]);
        console.log(myimage);
    }

    const handleSubmit=async(e)=>{
        e.prevent.default();
    

    const formData=new formData();
    formData.append("file",myimage);
    formData.append('upload_preset','My cloud');
    formData.append('cloud_name','dsjqshmjc');
    const response=await axios.post('https://api.cloudinary.com/v1_1/dsjqshmjc/image/upload',formData)
    console.log('Image uploaded:',response.data);
    console.log('Image uploaded:',response.data.url);

    let api1="http://localhost:8080/item/itemsave";
    axios.post(api1,{...input,Image:response.data.url}).then((res)=>{
        alert("Data Save!!")
    })
    }
    return(
        <>
        <h1>Insert Item From here</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Item Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text"  name='description' value={input.description} onChange={handleInput} />
      </Form.Group> <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text"  name='price' value={input.price} onChange={handleInput} />
      </Form.Group> <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file"  name='file' onChange={handleImage} />
      </Form.Group>

      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default InsertItem