import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { DisplayBalance } from '../';

function DisplayBalances({ incomes = 0, expenses = 0 }) {
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color='green' label='Income:' value={incomes} />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance color='red' label='Expenses:' value={expenses} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export { DisplayBalances };
