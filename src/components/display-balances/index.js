import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { DisplayBalance } from '../';

function DisplayBalances() {
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color='green' label='Income:' value='2,550.53' />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance color='red' label='Expenses:' value='2,550.53' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export { DisplayBalances };
