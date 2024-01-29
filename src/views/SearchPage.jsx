import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async ({ author, title, content }) => {
        
        const results = await mockSearchFunction(author, title, content);
        setSearchResults(results);
    };

    return (
        <>
        <h1>Search Posts</h1>
        <SearchBar onSearch={handleSearch} />
        {searchResults.length > 0 && <SearchResults results={searchResults} />}
        </>
    );
    };

    // Replace with your actual search function
    function mockSearchFunction(author, title, content) {
    return [
        { id: 1, title: 'Post Title 1', author: 'Author 1', content: '...' },
        // ... other mock results based on search terms
    ];
}

export default SearchPage;