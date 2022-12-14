import React from 'react';
import styled from 'styled-components';
import { Book } from '../book/book';
export interface BooksProps {
    books: any[];
    onAdd: (book: any) => void;
}
const StyledBooks = styled.div`
border: 1px solid #ccc;
border-radius: 4px;
`;
export const Books = ({ books, onAdd }: BooksProps) => {
    return (
        <StyledBooks>
            {books.map(book => (
                // Pass down new callback prop
                <Book key={book.id} book={book} onAdd={onAdd} />
            ))}
        </StyledBooks>
    );
};
export default Books;