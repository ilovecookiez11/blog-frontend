import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch({ author, title, content });
    };

    return (
        <form onSubmit={handleSearch}>
            <Grid container alignItems="center" justifyContent="center" spacing={2}>
                <Grid item>
                    <TextField
                        label="Autor"
                        variant="outlined"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Título"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Contenido"
                        variant="outlined"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Button type="submit" variant="contained">
                        Buscar
                    </Button>
                </Grid>
        </Grid>
        </form>
    );
};

export default SearchBar;