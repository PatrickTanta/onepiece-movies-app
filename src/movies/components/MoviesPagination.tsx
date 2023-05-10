import { Button, Stack, Typography } from '@mui/material'
import { UseQueryResult } from '@tanstack/react-query'
import { FC } from 'react'
import { Detail } from '../interfaces/movies'

interface Props {
    moviesQuery: UseQueryResult<Detail, unknown>
    page: number | string
    prevPage: () => void
    nextPage: () => void
}

export const MoviesPagination: FC<Props> = ({
    moviesQuery,
    page,
    prevPage,
    nextPage
}) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button
                className="btn btn-outline-primary"
                disabled={
                    moviesQuery.isFetching ||
                    moviesQuery.data?.pagination.current_page === 1
                }
                variant="contained"
                onClick={prevPage}
            >
                Prev
            </Button>

            <Typography variant="body1" color="initial" sx={{ p: 1 }}>
                {page}
            </Typography>

            <Button
                className="btn btn-outline-primary"
                disabled={
                    moviesQuery.isFetching ||
                    !moviesQuery.data?.pagination.has_next_page
                }
                variant="contained"
                onClick={nextPage}
            >
                Next
            </Button>
        </Stack>
    )
}
