import React from 'react'
import { Book, LibraryService } from "../services/library";

export function CoolList() {

  //example of using library service
  const _service = new LibraryService(localStorage);
  const _books = _service.readBooks(0,10, 'adventure');

  return (
    <div>Cool List</div>
  )
}

