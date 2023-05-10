import { Routes, Route } from 'react-router-dom'
import { MoviesRoutes } from '../movies/routes/MoviesRoutes'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<MoviesRoutes />} />
            </Routes>
        </>
    )
}
