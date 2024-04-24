import React, { useEffect, useState } from 'react'
import SearchInputGroup from './SearchInputGroup'
import axios from 'axios'
import { Card, Pagination } from 'antd'
const { Meta } = Card
const AllMOvies = () => {
    const [mPosts, setMPosts] = useState([])
    const [currentMPage, setMCurrentPage] = useState(1)
    const [totalP, setTotalP] = useState(0)
    useEffect(() => {
        getAllMovies()
    }, [currentMPage])
    const getAllMovies = () => {
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day?page=${currentMPage}`,
                {
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWJiNjQ2MjU4NDllMjkwMTA0YjRkZjIzYTFlMjdmYyIsInN1YiI6IjY2MjdkYTUwMmUyYjJjMDE2MzY3YTFiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7T1xVsXAc-kYDh63xBNjtgO5gvDnk3nUAkJ-Q_-Vi_s',
                        Accept: 'application/json',
                    },
                }
            )
            .then((res) => {
                setMPosts(res.data.results)
                setTotalP(res.data.total_results)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const changeMPage = (page) => {
        setMCurrentPage(page)
    }
    return (
        <div>
            <div className="container">
                <SearchInputGroup />
                <h1 style={{ textAlign: 'center', padding: '0 0 50px 0' }}>
                    Barcha kinolar
                </h1>
                <div
                    // className="boxes"
                    style={{
                        display: 'grid',
                        gap: '30px',
                        gridTemplateColumns: 'auto auto auto auto',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* {mPosts.map((item) => (
                        <Card></Card>
                    ))} */}
                    {mPosts.map((item) => (
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
                    current={currentMPage}
                    onChange={changeMPage}
                    total={totalP}
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

export default AllMOvies
