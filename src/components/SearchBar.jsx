import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSearch = () => {
        onSearch({ author, title, content });
    };

    return (
        <form onSubmit={handleSearch}>
        <TextField
            label="Autor"
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
            label="Título"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
            label="Contenido"
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" variant="contained">
            Search
        </Button>
        </form>
    );
};

export default SearchBar;