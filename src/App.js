import { Container } from 'semantic-ui-react';
import './App.css';
import {
  DisplayBalance,
  EntryLine,
  MainHeader,
  NewEntryForm,
} from './components';
import { DisplayBalances } from './components/display-balances';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance size='small' label='Balance:' value='2,550.53' />

      <DisplayBalances />

      <MainHeader type='h3' title='History' />
      <EntryLine description='Something' value='10.00' isExpense />
      <EntryLine description='Something else' value='100.00' />
      <EntryLine description='Something wrong' value='62.00' isExpense />

      <MainHeader type='h3' title='Add new transaction' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
