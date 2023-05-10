import { useQuery } from '@tanstack/react-query'
import { moviesApi } from '../../api/moviesApi'
import { Data, Detail } from '../interfaces/characterDetail'

interface Props {
    id: string
}

const getCharacterDetail = async ({ id }: Props): Promise<Data> => {
    const { data } = await moviesApi.get<Detail>(`/characters/${id}/full`)
    const characterDetail = data.data
    return characterDetail
}

export const useCharacterDetail = ({ id }: Props) => {
    const characterDetailQuery = useQuery(
        ['characterDetail'],
        () => getCharacterDetail({ id })
        // {
        //     staleTime: 1000 * (60 * 1000)
        // }
    )
    return {
        characterDetailQuery
    }
}
