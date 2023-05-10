import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { moviesApi } from '../../api/moviesApi'
import { Detail } from '../interfaces/movies'

interface Props {
    q: string
    page?: number
    type?: string
}

const getMovies = async ({
    q,
    page = 1,
    type = 'Movie'
}: Props): Promise<Detail> => {
    const params = new URLSearchParams()

    if (q) params.append('q', q)
    if (type) params.append('type', type)

    params.append('page', page.toString())

    const { data } = await moviesApi.get<Detail>('/anime', { params })
    return data
}

export const useMovies = ({ q, type }: Props) => {
    const [page, setPage] = useState(1)

    const moviesQuery = useQuery(
        ['movies', { q, type, page }],
        () => getMovies({ q, page, type }),
        {
            staleTime: 1000 * (60 * 1000)
        }
    )

    const prevPage = () => {
        if (page > 1) setPage(page - 1)
    }

    const nextPage = () => {
        if (moviesQuery.data?.data?.length === 0) return
        setPage(page + 1)
    }

    return {
        moviesQuery,
        page: moviesQuery.isFetching ? 'Loading' : page,
        nextPage,
        prevPage
    }
}
