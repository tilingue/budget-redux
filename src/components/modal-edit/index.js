import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { EntryForm } from '../entry-form';

function ModalEdit({
  isOpen,
  setIsOpen,
  addEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close
        </Button>
        <Button
          primary
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export { ModalEdit };
