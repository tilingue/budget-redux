import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import {
  DisplayBalance,
  EntryLines,
  MainHeader,
  ModalEdit,
  NewEntryForm,
} from './components';
import { DisplayBalances } from './components/display-balances';
import { initialEntries } from './data/entries';

function App() {
  const [entries, setEntries] = useState(initialEntries);

  // Edit entry modal values
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [editedEntryId, setEditedEntryId] = useState(null);

  // Totals
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    let incomes = 0;
    let expenses = 0;
    entries.map((entry) => {
      return entry.isExpense
        ? (expenses += entry.value)
        : (incomes += entry.value);
    });
    const balance = incomes - expenses;
    setTotalIncomes(incomes);
    setTotalExpenses(expenses);
    setTotalBalance(balance);
  }, [entries]);

  const resetEntry = () => {
    setDescription('');
    setIsExpense(true);
    setValue('');
  };

  useEffect(() => {
    if (!isOpen && editedEntryId) {
      const editedEntryIndex = entries.findIndex(
        (entry) => entry.id === editedEntryId
      );
      const newEntries = [...entries];
      newEntries[editedEntryIndex] = {
        ...entries[editedEntryIndex],
        description,
        value,
        isExpense,
      };
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line
  }, [isOpen]);

  const handleEditEntry = (id) => {
    if (id) {
      const entry = entries.find((entry) => entry.id === id);
      if (entry) {
        setEditedEntryId(id);
        setIsOpen(true);
        setDescription(entry.description);
        setValue(entry.value);
        setIsExpense(entry.isExpense);
      }
    }
  };

  const handleDeleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const handleAddEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    resetEntry();
  };

  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance size='small' label='Balance:' value={totalBalance} />

      <DisplayBalances incomes={totalIncomes} expenses={totalExpenses} />

      <MainHeader type='h3' title='History' />
      <EntryLines
        entries={entries}
        deleteEntry={handleDeleteEntry}
        editEntry={handleEditEntry}
      />

      <MainHeader type='h3' title='Add new transaction' />
      <NewEntryForm
        addEntry={handleAddEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />

      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={handleAddEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
