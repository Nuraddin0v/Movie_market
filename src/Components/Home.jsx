import React, { useEffect, useState } from 'react'
import { Card, Pagination, Input, Button } from 'antd'
import axios from 'axios'
import SearchInputGroup from './SearchInputGroup'
const { Meta } = Card
// const { Search } = Input
const Home = () => {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        getMovies()
    }, [currentPage])
    const getMovies = () => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?page=${currentPage}`,
                {
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWJiNjQ2MjU4NDllMjkwMTA0YjRkZjIzYTFlMjdmYyIsInN1YiI6IjY2MjdkYTUwMmUyYjJjMDE2MzY3YTFiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7T1xVsXAc-kYDh63xBNjtgO5gvDnk3nUAkJ-Q_-Vi_s',
                        Accept: 'application/json',
                    },
                }
            )
            .then((res) => {
                setPosts(res.data.results)
                console.log((res.data.results))
                setTotal(res.data.total_results)
                // console.log(res.idata.total_results)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const changePage = (page) => {
        setCurrentPage(page)
    }
    return (
        <div>
            <div className="container">
                <SearchInputGroup />
                <h1 style={{ textAlign: 'center', padding: '50px 0' }}>
                    Mashhur Filmlar
                </h1>
                <div
                    className="boxes"
                    style={{
                        display: 'grid',
                        gap: '30px',
                        gridTemplateColumns: 'auto auto auto auto',
                        justifyContent: 'space-between',
                    }}
                >
                    {posts.map((item) => (
                        <Card
                            hoverable
                            key={item.id}
                            // dataSource={searchResults}
                            style={{
                                width: 300,
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                />
                            }
                        >
                            <Meta title={item.title} description={item.id} />
                        </Card>
                    ))}
                </div>
                <Pagination
                    current={currentPage}
                    onChange={changePage}
                    total={total}
                    pageSize={20}
                    style={{
                        padding: '50px 0',
                        display: 'flex',
                        justifyContent: 'end',
                    }}
                />
            </div>
        </div>
    )
}

export default Home
