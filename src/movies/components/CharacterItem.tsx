import {
    Button,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@mui/material'
import Card from '@mui/material/Card'
import { useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'
import { Datum } from '../interfaces/characters'

interface Props {
    character: Datum
}

type ParamsType = {
    movieMalId: string
}

export const CharacterItem: FC<Props> = ({ character }) => {
    const navigate = useNavigate()
    const { movieMalId } = useParams<ParamsType>()

    const queryClient = useQueryClient()

    const preSetData = () => {
        queryClient.setQueryData(
            ['character', character.character.mal_id],
            character,
            {
                updatedAt: new Date().getTime() + 100000
            }
        )
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
                sx={{
                    maxWidth: 345,
                    backgroundColor:
                        character.role === 'Main' ? '#FFD700' : '#FFFFFF'
                }}
            >
                <CardMedia
                    component="img"
                    height="440"
                    sx={{ objectFit: 'contain' }}
                    image={
                        character.character.images.webp
                            ? character.character.images.webp.image_url
                            : '/static/images/cards/paella.jpg'
                    }
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {character.character.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() =>
                            navigate(`${character.character.mal_id}`)
                        }
                        // onMouseEnter={ prefetchData }
                        onMouseEnter={preSetData}
                        variant="contained"
                    >
                        Ver Detalle
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
