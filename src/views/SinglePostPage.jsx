import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiUrl } from '../config';
import SinglePost from '../components/SinglePost';
import MenuBar from '../components/MenuBar';
import { Grid } from '@mui/material';

const SinglePostPage = () => {
    const { postId } = useParams();
    const [postData, setPostData] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
        try {
            const response = await fetch(`${apiUrl}/post/${postId}`);
            if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
            }
            const data = await response.json();
            setPostData(data[0]);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
        };

        fetchPost();
    }, [postId]);

    return (
        <>
            <MenuBar />
            <div style={{ paddingTop: 64 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {(isLoading && postData.length) ? (
                        <p>Loading post...</p>
                    ) : error ? (
                        <p>Error fetching post: {error.message}</p>
                    ) : (
                        <Grid container alignItems="center" justifyContent="center" spacing={2}>
                            <Grid item xs={10} md={10} lg={8}>
                                <SinglePost title={postData.title} author={postData.author} date={postData.post_date} content={postData.content} />
                            </Grid>
                        </Grid>
                        
                    )}
                </div>
            </div>
        </>
    );
};

export default SinglePostPage;