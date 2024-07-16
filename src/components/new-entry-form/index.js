import React from 'react';
import { Form } from 'semantic-ui-react';
import { ButtonSaveOrCancel } from '../';
import { EntryForm } from '../';

function NewEntryForm({
  addEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel onSave={() => addEntry()} />
    </Form>
  );
}

export { NewEntryForm };
