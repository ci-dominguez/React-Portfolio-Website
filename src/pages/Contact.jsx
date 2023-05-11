import React from 'react';
import Form from '../components/Form';
import observer from '../utils/observer';

const Contact = () => {
  observer();
  return (
    <div className="bg-white pt-16">
      <Form />
    </div>
  );
};

export default Contact;
