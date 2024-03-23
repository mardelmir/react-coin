import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Coin from './Coin'
import Favorites from './Favorites'

function Root() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coin/:id" element={<Coin />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </>
    )
}

export default Root