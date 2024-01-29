import React, { useState } from 'react';
import MenuBar from '../components/MenuBar';
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults';
import { apiUrl } from '../config';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const searchPosts = async (author, title, content) => {
        let queryURL = ""
        if (author) {
            queryURL = `${queryURL}?author=${author}`
        }
        if (title) {
            queryURL = `${queryURL}?author=${title}`
        }
        if (content) {
            queryURL = `${queryURL}?author=${content}`
        }
        const response = await fetch(`${apiUrl}/search${queryURL}`);
        const data = await response.json();

        return data;
    }

    const handleSearch = async ({ author, title, content }) => {
        const results = await searchPosts(author, title, content);
        setSearchResults(results);
    };

    return (
        <>
        <MenuBar />
        <h1>Buscar Posts</h1>
        <SearchBar onSearch={handleSearch} />
        {searchResults.length > 0 && <SearchResults results={searchResults} />}
        </>
    );
    };

    

export default SearchPage;