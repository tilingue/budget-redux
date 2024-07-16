import React from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          placeholder='Add description'
          icon={'tags'}
          label='Description'
          width={12}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          placeholder='Add value'
          icon={'dollar'}
          iconPosition='left'
          label='Value'
          width={4}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label='Is expense?'
          checked={isExpense}
          onChange={(e, data) => setIsExpense(data.checked)}
        />
      </Segment>
    </>
  );
}

export { EntryForm };
