import { useQuery } from '@tanstack/react-query'
import { moviesApi } from '../../api/moviesApi'
import { Datum, Detail } from '../interfaces/characters'

interface Props {
    id: string
}

const getCharacters = async ({ id }: Props): Promise<Datum[]> => {
    const { data } = await moviesApi.get<Detail>(`/anime/${id}/characters`)
    const characterList = data.data
    return characterList
}

export const useCharacters = ({ id }: Props) => {
    const charactersQuery = useQuery(
        ['characters'],
        () => getCharacters({ id })
        // {
        //     staleTime: 1000 * (60 * 1000)
        // }
    )
    return {
        charactersQuery
    }
}
