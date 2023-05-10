import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BasicModal } from '../../shared/components/BasicModal'
import { CircularLoading } from '../../shared/components/CircularLoading'
import { MovieList } from '../components/MovieList'
import { MoviesPagination } from '../components/MoviesPagination'
import { useMovies } from '../hooks'
import { Datum } from '../interfaces/movies'

export const MoviesPage = () => {
    const [open, setOpen] = useState(false)
    const [currentMovie, setCurrentMovie] = useState<Datum | null>(null)

    const setAndOpenMovie = (value: Datum) => {
        setCurrentMovie(value)
        setOpen(true)
    }

    const { moviesQuery, page, prevPage, nextPage } = useMovies({
        q: 'one piece'
    })

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Typography variant="h1">
                Lista de películas de One Piece
            </Typography>

            <MoviesPagination
                moviesQuery={moviesQuery}
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
            />

            <br />

            {moviesQuery.isLoading ? (
                <CircularLoading text="películas" />
            ) : (
                <MovieList
                    movies={moviesQuery.data?.data || []}
                    setCurrentMovie={setAndOpenMovie}
                />
            )}

            <BasicModal open={open} handleClose={() => setOpen(false)} title="">
                <Typography variant="h3">{currentMovie?.title}</Typography>
                <Typography variant="body1">
                    {currentMovie?.synopsis}
                </Typography>
                <br />
                <Box>
                    <b>Rating:</b>
                    {currentMovie?.rating}
                </Box>
                <br />

                <Link
                    to="https://myanimelist.net/anime/53880/One_Piece_The_Planetarium"
                    target="_blank"
                >
                    Ver en myanimelist
                </Link>
            </BasicModal>
        </Box>
    )
}
