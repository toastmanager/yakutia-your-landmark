import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import MainMap from "./pages/MainMap"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<LandingPage />} />
                    <Route path="/map" element={<MainMap />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App