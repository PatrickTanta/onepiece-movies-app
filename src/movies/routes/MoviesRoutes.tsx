import { Navigate, Route, Routes } from 'react-router-dom'
import { CharacterDetail, CharactersByMovie, MoviesPage } from '../pages'

export const MoviesRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="movies" element={<MoviesPage />} />
                <Route
                    path="movies/:movieMalId/characters"
                    element={<CharactersByMovie />}
                />
                <Route
                    path="movies/:movieMalId/characters/:characterMalId"
                    element={<CharacterDetail />}
                />

                <Route path="/" element={<Navigate to="/movies" />} />
            </Routes>
        </div>
    )
}
