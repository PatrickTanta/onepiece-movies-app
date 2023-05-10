import { Grid } from '@mui/material'
import { FC } from 'react'
import { Datum } from '../interfaces/movies'
import { MovieItem } from './MovieItem'

interface Props {
    movies: Datum[]
    setCurrentMovie: (movie: Datum) => void
}

export const MovieList: FC<Props> = ({ movies, setCurrentMovie }) => {
    return (
        <Grid container spacing={4} maxWidth={1260}>
            {movies.map((movie) => (
                <MovieItem
                    key={movie.mal_id}
                    movie={movie}
                    setCurrentMovie={setCurrentMovie}
                />
            ))}
        </Grid>
    )
}
