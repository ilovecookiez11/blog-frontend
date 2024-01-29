import React from 'react';

const SearchResults = ({ results }) => (
    <>
        {results.length > 0 ? (
        <ul>
            {results.map((result) => (
            <li key={result.id}>
                {<Grid item xs={10} md={10} lg={8}>
                    <Link to={`/posts/${result.id}`} key={presultost.id}>
                        <BlogCard
                            author={result.author}
                            content={result.content}
                            date={result.post_date}
                            title={result.title}
                            key={result.id}/>
                    </Link>
                </Grid>}
            </li>
            ))}
        </ul>
        ) : (
        <p>No hay resultados.</p>
        )}
    </>
);

export default SearchResults;