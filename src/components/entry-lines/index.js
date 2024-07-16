import React from 'react';
import { EntryLine } from '../';

function EntryLines({ entries, deleteEntry, editEntry }) {
  return (
    <>
      {entries.map((entry) => (
        <EntryLine
          key={`EntryLine_${entry.id}`}
          {...entry}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />
      ))}
    </>
  );
}

export { EntryLines };
