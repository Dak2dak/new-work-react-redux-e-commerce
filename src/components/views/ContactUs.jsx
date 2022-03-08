import React from 'react';
import '../styles/Contact.css';
import { Form, Button } from 'react-bootstrap';
import TextareaPage from './TextareaPage';



const ContactUs = () => {

    return (
        <div className='container form__view'>
            <h1>Contact <span>us</span></h1>
            <Form className='contact__form'>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <div className="mydiv">
                        <Form.Label>First name</Form.Label>
                    </div>
                    <div className="front__div">
                        <Form.Control type="text" placeholder="first name" />
                        {/* <Form.Text className="text-muted"> 10 characters maximum, please </Form.Text> */}
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <div className="mydiv">
                        <Form.Label>Last name</Form.Label>
                    </div>
                    <div className="front__div">
                        <Form.Control type="text" placeholder="last name" />
                        {/* <Form.Text className="text-muted"> At least 3 prints </Form.Text> */}
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTel">
                    <div className="mydiv">
                        <Form.Label>Telephone</Form.Label>
                    </div>
                    <div className="front__div">
                        <Form.Control type="text" placeholder="Tel.number" />
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <div className="mydiv">
                        <Form.Label>Subject</Form.Label>    
                    </div>
                    <div className="front__div">
                        <Form.Control type="text" placeholder="subject" />
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className="mydiv">
                        <Form.Label>Email</Form.Label>
                    </div>
                    <div className="front__div">
                        <Form.Control type="email" placeholder="email" />
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className="mydiv"></div>
                    <div className="front__div check__box">
                        <Form.Check type="checkbox" label="May we get in touch with you?" />
                        <Form.Control
                            as="select" 
                            className='selectMe'
                        >
                            <option value="Tel">Tel</option>
                            <option value="Shirt">Shirt</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Watch">Watch</option>
                            <option value="Computer">Computer</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Appliances">Appliances</option>
                        </Form.Control>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3 message__box" controlId="formBasicMessage">
                    <Form.Label>Your message</Form.Label>
                    <div className="text__front--div">
                        <TextareaPage />
                        <Button type="submit" className='form__send--btn'>Send</Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ContactUs;