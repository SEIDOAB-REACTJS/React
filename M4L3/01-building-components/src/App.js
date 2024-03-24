import React from 'react';
import { uniqueId } from './services/seido-helpers';
import TableAsClass01 from './components/01-table-as-class-th';
import TableAsClass02 from './components/02-table-as-class-th-key';
import TableAsClass03 from './components/03-table-as-class';
import TableAsClass04 from './components/04-table-as-class-state';
import TableAsClass05 from './components/05-table-as-class-dblclick';

import TableAsFunc01 from './components/01-table-as-func-th';
import TableAsFunc02 from './components/02-table-as-func-th-key';
import TableAsFunc03 from './components/03-table-as-func';
import TableAsFunc04 from './components/04-table-as-func-state';
import TableAsFunc05 from './components/05-table-as-func-dblclick';

import './css/table.css';

const tableHeaders = ['Book', 'Author', 'Language', 'Published', 'Sales'];
const tableData = [
  { 
    id: uniqueId(), 
    data: ['A Tale of Two Cities', 'Charles Dickens', 'English', '1859', '200 million']
  },
  { 
    id: uniqueId(), 
    data: ['Le Petit Prince (The Little Prince)', 'Antoine de Saint-Exupéry', 'French', '1943', '150 million']
  },
  { 
    id: uniqueId(), 
    data: ["Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 'English', '1997', '120 million']
  },
  { 
    id: uniqueId(), 
    data: ['And Then There Were None', 'Agatha Christie', 'English', '1939', '100 million']
  },
  { 
    id: uniqueId(), 
    data: ['Dream of the Red Chamber', 'Cao Xueqin', 'Chinese', '1791', '100 million']
  },
  { 
    id: uniqueId(), 
    data: ['The Hobbit', 'J. R. R. Tolkien', 'Chinese', '1937', '100 million']
  }  
];

function App() {

  const onDoubleClick = (e) => 
  {
    const id = e.currentTarget.dataset.rowitemid;
    const book = tableData.find(item => item.id === id);
    console.log(`Double-clicked row-id: ${id}   ${book.data[0]}`);
  }

  return (
    <>
        <h1>Add component one-by-one and study</h1>
        <h2>Table as a class components</h2>
        
        <br/>
        <h2>Table as a func component</h2>
    </>
  );
}

/*      Add component one-by-one and study
        <h1>Table as a class components</h1>
        <TableAsClass01 headers={tableHeaders}/>
        <TableAsClass02 headers={tableHeaders}/>
        <TableAsClass03 headers={tableHeaders} initialData={tableData}/>
        <TableAsClass04 headers={tableHeaders} initialData={tableData}/>
        <TableAsClass05 headers={tableHeaders} initialData={tableData} onDoubleClick={onDoubleClick}/>

        <br/>
        <h1>Table as a func component</h1>
        <TableAsFunc01 headers={tableHeaders}/>
        <TableAsFunc02 headers={tableHeaders}/>
        <TableAsFunc03 headers={tableHeaders} initialData={tableData}/>
        <TableAsFunc04 headers={tableHeaders} initialData={tableData}/>
        <TableAsFunc05 headers={tableHeaders} initialData={tableData} onDoubleClick={onDoubleClick}/>
*/
export default App;
