import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import MenuBar from '../components/MenuBar';
import { apiUrl } from '../config';
import { Grid } from '@mui/material';

const MainPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(apiUrl + '/posts');
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
        
    }, []);

    return (
        <>
            <MenuBar />
            <div style={{ paddingTop: 64 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <>
                        <Grid container alignItems="center" justifyContent="center" spacing={2}>
                            {posts.length ?
                                (posts.map((post) => (
                                    <Grid item xs={10} md={10} lg={8}>
                                        <Link to={`/posts/${post.id}`} key={post.id}>
                                            <BlogCard
                                                author={post.author}
                                                content={post.content}
                                                date={post.post_date}
                                                title={post.title}
                                                key={post.id}/>
                                        </Link>
                                    </Grid>
                                ))) :
                                "No hay posts para mostrar"
                            }
                        </Grid>
                    </>
                </div>
            </div>
        </>
    )
    
};

export default MainPage;