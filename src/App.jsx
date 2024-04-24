import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AllMovies from './Components/AllMovies'

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/allMovies" element={<AllMovies />} />
                    {/* <Route path="/allMovies" element={<AllMovies />} /> */}
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
