// import React from 'react'
import React, { useState } from 'react'
import { Menu, Layout } from 'antd'
import { PlaySquareOutlined, ContactsOutlined } from '@ant-design/icons'
// import { Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'
import './Navbar.css'
const { Header } = Layout
const onSearch = (value, _e, info) => console.log(info?.source, value)
const Navbar = () => {
    return (
        <div>
            <Header
                style={{
                    // width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 99,
                }}
            >
                <div
                    className="container"
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div className="logo">
                        <Link
                            to="/"
                            style={{ marginTop: '10px', display: 'block' }}
                        >
                            <h1
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#1890ff',
                                    width: 200,
                                }}
                            >
                                MovieMarket
                                <i
                                    className="bx bxs-gas-pump"
                                    style={{
                                        marginLeft: '10px',
                                        fontSize: '26px',
                                    }}
                                />
                            </h1>
                        </Link>
                    </div>
                    <Menu
                        style={{ width: '70%' }}
                        className="inline-navber"
                        theme="dark"
                        defaultSelectedKeys={[location.pathname]}
                        mode="horizontal"
                        items={[
                            {
                                label: 'All Movies',
                                key: '/allMovies',
                                icon: (
                                    <Link to="/allMovies">
                                        <PlaySquareOutlined
                                            style={{ fontSize: '18px' }}
                                        />
                                    </Link>
                                ),
                            },
                        ]}
                    ></Menu>
                </div>
            </Header>
        </div>
    )
}

export default Navbar
