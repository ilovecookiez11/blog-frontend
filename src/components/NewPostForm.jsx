import React, { useState } from 'react';
import { Grid, Box, TextField, Button, Typography } from '@mui/material';
import { apiUrl } from '../config';

const NewPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postData = {
                title: title,
                content: content,
                author: author,
            };
        
            const response = await fetch(apiUrl + '/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
        
            const newPostData = await response.json();
        
            console.log('Post created successfully:', newPostData);
        
        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setTitle('');
            setContent('');
            setImage(null);
            setAuthor('');
        }
    };

    return (
        <div style={{ paddingTop: 64 }}>
            <Grid container alignItems="center" justifyContent="center" spacing={2} >
                <Grid item>
                    <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 4 }}>
                        <Typography>
                            Nuevo Post
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Título"
                                variant="outlined"
                                fullWidth
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <TextField
                                label="Autor"
                                variant="outlined"
                                fullWidth
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                sx={{ marginTop: 2 }}
                            />
                            <Box sx={{ marginTop: 2 }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Post"
                                    multiline
                                    fullWidth
                                    minRows={8}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ marginTop: 2 }}>
                            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                                Publicar post
                            </Button>
                            </Box>
                            
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default NewPostForm;
