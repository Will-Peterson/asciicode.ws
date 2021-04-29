import React from 'react';
import {useForm, ValidationError} from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm('AsciiCodeWs');

  if (state.succeeded) return <h3>Thanks!</h3>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' />
          <ValidationError field='email' prefix='email' errors={state.errors} />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message' rows='4'></textarea>
        </div>
        <div>
          <input type='submit' value='Send' />
          <ValidationError errors={state.errors} />
        </div>
      </form>
    </div>
  );
}

export default Form;