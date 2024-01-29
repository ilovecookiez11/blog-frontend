import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import moment from 'moment';

const SinglePost = ({ title, author, date, content }) => {
    const parsedDate = moment(date);
    const naturalDate = parsedDate.format("MMMM D, YYYY");

    return (
        <Card sx={{ margin: '10px' }}>
            <CardContent>
                <Box sx={{ display: 'block', justifyContent: 'space-between' }}>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {naturalDate}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        Por {author}
                    </Typography>
                </Box>
                <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="body1">{content}</Typography>
                </Box>
            </CardContent>
        </Card>
    ) 
};

export default SinglePost;