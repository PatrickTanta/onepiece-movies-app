import { ArrowBack } from '@mui/icons-material'
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import { Navigate, useParams } from 'react-router-dom'
import { CircularLoading } from '../../shared/components/CircularLoading'
import { useCharacterDetail } from '../hooks'

type ParamsType = {
    characterMalId: string
    movieMalId: string
}

export const CharacterDetail: FC = () => {
    const navigate = useNavigate()
    const { movieMalId, characterMalId } = useParams<ParamsType>()

    const { characterDetailQuery } = useCharacterDetail({
        id: characterMalId || '0'
    })

    if (!characterDetailQuery.data?.mal_id) return <Navigate to="/movies" />

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box display="flex" justifyContent="start">
                <IconButton
                    onClick={() => navigate(`/movies/${movieMalId}/characters`)}
                    aria-label="back"
                >
                    <ArrowBack />
                </IconButton>
                <Typography variant="body1">Volver</Typography>
            </Box>

            <>
                {characterDetailQuery.isLoading ? (
                    <CircularLoading text="personaje" />
                ) : (
                    <Grid
                        container
                        spacing={2}
                        sx={{ m: 'auto' }}
                        maxWidth={1260}
                    >
                        <Grid item xs={12} sm={6} md={4}>
                            {characterDetailQuery.data?.images?.webp && (
                                <img
                                    src={
                                        characterDetailQuery.data?.images.webp
                                            .image_url
                                    }
                                    alt={characterDetailQuery.data.name}
                                    width="100%"
                                />
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                            <Box>
                                <Typography variant="h4">
                                    {characterDetailQuery.data?.nicknames} ($
                                    {characterDetailQuery.data?.name_kanji})
                                </Typography>
                                <Typography variant="body1">
                                    {characterDetailQuery.data?.about}
                                </Typography>
                                <Divider />
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </>
        </Box>
    )
}
