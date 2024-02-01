import axios from "axios"
import { CAHCE_KEY_CHAPTERS, chapter } from "./chapter"
import { useQuery } from '@tanstack/react-query';

const useGetChapters = () => {
    const fetchChapters = () => axios.get<chapter[]>('http://127.0.0.1:8000/chapters/')
    .then(res => res.data)

    const queryKey = CAHCE_KEY_CHAPTERS;
    return useQuery<chapter[], Error>({
        queryKey: queryKey,
        queryFn: fetchChapters
    })
}

export default useGetChapters;