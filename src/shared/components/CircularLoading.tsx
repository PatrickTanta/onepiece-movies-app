import { Box, CircularProgress } from '@mui/material'
import { FC } from 'react'

interface Props {
    text: string
}

export const CircularLoading: FC<Props> = ({ text }) => {
    return (
        <Box display="flex" justifyContent="center">
            <CircularProgress sx={{ mr: 2 }} />
            <h3>{`Cargando ${text}...`}</h3>
        </Box>
    )
}
