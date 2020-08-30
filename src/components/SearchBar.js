/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchBar() {
  const options = commonSearchs.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="searchBar"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} color="primary" label="Search" variant="outlined" />}
      size={"small"}
    />
  );
}

const commonSearchs = [
  { name: '_future' },
  { name: '_main' },
  { name: '_dummy_thread' },
  { name: '_thread' },
  { name: 'abc' },
  { name: 'aifc' },
  { name: 'array' },
  { name: 'ast' },
  { name: 'audiooop' },
  { name: 'bdb'},
  { name: 'for'},
  { name: 'while'},

  { name: 'base64'},
  { name: 'binascii'},
  { name: 'calendar' },
  { name: 'cmath' },
  { name: 'copy' },
  { name: 'copyreg' },
  { name: 'dataClasses' },
  { name: 'decimal' },
  { name: 'dis' },
  { name: 'difflib'},

  { name: 'email'},
  { name: 'enum'},
  { name: 'errno' },
  { name: 'for loops' },
  { name: 'loops' },
  { name: 'http' },
  { name: 'io' },
  { name: 'import' },
  { name: 'json' },
  { name: 'keyword'},

  { name: 'math'},
  { name: 'mmap'},
  { name: 'nis' },
  { name: 'os' },
  { name: 'pdp' },
  { name: 'pty' },
  { name: 'posix' },
  { name: 'queue' },
  { name: 'numpy' },
  { name: 'conditions'},
];
