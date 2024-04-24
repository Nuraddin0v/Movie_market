import { Button, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const { Search } = Input
const SearchInputGroup = () => {
    const [searchQuery, setSearchQuery] = useState()
    const navigate = useNavigate()
    // console.log(history)
    const handleSearch = (value) => {
        setSearchQuery(value)
        console.log(searchQuery);
    }
    const getSearchData = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`,
                {
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWJiNjQ2MjU4NDllMjkwMTA0YjRkZjIzYTFlMjdmYyIsInN1YiI6IjY2MjdkYTUwMmUyYjJjMDE2MzY3YTFiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7T1xVsXAc-kYDh63xBNjtgO5gvDnk3nUAkJ-Q_-Vi_s',
                        Accept: 'application/json',
                    },
                }
            )
            const movies = response.data.results
            console.log(...movies);
            navigate(`/movies/${searchQuery}`, { state: { ...movies } })
        } catch (error) {
            console.error('Error fetching movies:', error)
        }
    }
    const handleSearchButtonClick = () => {
        getSearchData()
    }
    return (
        <div>
            <div className="container">
                <div
                    className="input-group"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '50px 0',
                    }}
                >
                    <Search
                        placeholder="search movie..."
                        allowClear
                        onSearch={handleSearch}
                        onChange={handleSearch}
                        size="large"
                    />
                    <Button size="large" onClick={handleSearchButtonClick}>
                        Search
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SearchInputGroup
