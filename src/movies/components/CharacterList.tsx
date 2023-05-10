import { Grid } from '@mui/material'
import { FC } from 'react'
import { Datum } from '../interfaces/characters'
import { CharacterItem } from './CharacterItem'

interface Props {
    characters: Datum[]
}

export const CharacterList: FC<Props> = ({ characters }) => {
    return (
        <Grid container spacing={4} maxWidth={1260}>
            {characters.map((character) => (
                <CharacterItem
                    key={character.character.mal_id}
                    character={character}
                />
            ))}
        </Grid>
    )
}
