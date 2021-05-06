import React from 'react';
import {useForm, ValidationError} from '@formspree/react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('AsciiCodeWs');

  if (state.succeeded) return <h3>Thanks!</h3>;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="contactName">
          <Form.Label htmlFor='name'>Name</Form.Label>
          <Form.Control type="text" name='name' id='name' placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="contactEmail">
          <Form.Label htmlFor='email'>Email address</Form.Label>
          <Form.Control type="text" name='email' id='email' placeholder="Enter email" />
          <ValidationError field='email' prefix='email' errors={state.errors} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="contactMessage">
          <Form.Label htmlFor='message'>Message</Form.Label>
          <Form.Control as="textarea" name='message' id='message' rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <ValidationError errors={state.errors} />
      </Form>
    </div>
  );
}

export default ContactForm;
