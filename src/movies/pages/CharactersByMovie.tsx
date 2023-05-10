import { ArrowBack } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import { useNavigate } from 'react-router'
import { Navigate, useParams } from 'react-router-dom'
import { CircularLoading } from '../../shared/components/CircularLoading'
import { CharacterList } from '../components/CharacterList'
import { useCharacters } from '../hooks'

type ParamsType = {
    movieMalId: string
}
export const CharactersByMovie = () => {
    const navigate = useNavigate()

    const { movieMalId } = useParams<ParamsType>()
    const { charactersQuery } = useCharacters({
        id: movieMalId || '0'
    })

    if (!movieMalId) return <Navigate to="/movies" />
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <IconButton onClick={() => navigate('/movies')} aria-label="back">
                <ArrowBack />
            </IconButton>

            <br />

            {charactersQuery.isLoading ? (
                <CircularLoading text="personajes" />
            ) : (
                <CharacterList characters={charactersQuery.data || []} />
            )}
        </Box>
    )
}
