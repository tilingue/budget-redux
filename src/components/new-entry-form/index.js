import React from 'react';
import { Form } from 'semantic-ui-react';
import { ButtonSaveOrCancel } from '../';

function NewEntryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          placeholder='Add description'
          icon={'tags'}
          label='Description'
          width={12}
        />
        <Form.Input
          placeholder='Add value'
          icon={'dollar'}
          iconPosition='left'
          label='Value'
          width={4}
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
}

export { NewEntryForm };
