import {
    Button,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    Stack,
    Typography
} from '@mui/material'
import Card from '@mui/material/Card'
import { useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import { truncate } from '../helpers/formatters'
import { Datum } from '../interfaces/movies'

interface Props {
    movie: Datum
    setCurrentMovie: (movie: Datum) => void
}

export const MovieItem: FC<Props> = ({ movie, setCurrentMovie }) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const preSetData = () => {
        queryClient.setQueryData(['movie', movie.mal_id], movie, {
            updatedAt: new Date().getTime() + 100000
        })
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, m: 'auto' }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={
                        movie.images
                            ? movie.images.webp.image_url
                            : '/static/images/cards/paella.jpg'
                    }
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap={false}
                        sx={{ mb: 1 }}
                    >
                        <Chip label={movie.status} color="error" />
                        {movie.demographics.length !== 0 && (
                            <Chip
                                label={movie.demographics[0].name}
                                color="success"
                            />
                        )}
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                        {!movie.synopsis
                            ? 'No Synopsis'
                            : truncate(movie.synopsis, 200)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => setCurrentMovie(movie)}
                        variant="contained"
                    >
                        Ver detalle
                    </Button>
                    <Button
                        onClick={() =>
                            navigate(`/movies/${movie.mal_id}/characters`)
                        }
                        onMouseEnter={preSetData}
                        variant="contained"
                    >
                        Ver personajes
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
