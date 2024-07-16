import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel({ onSave }) {
  return (
    <Button.Group>
      <Button>Cancel</Button>
      <Button.Or></Button.Or>
      <Button onClick={onSave} primary>
        OK
      </Button>
    </Button.Group>
  );
}

export { ButtonSaveOrCancel };
