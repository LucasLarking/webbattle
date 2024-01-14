import axios from "axios"
import { Lesson } from "../lesson/Lesson"
import { useQuery } from "react-query"

const useGetLessons = () => {
    const fetchLessons = () => axios.get<Lesson[]>(`http://127.0.0.1:8000/lessons/`)
    .then((res) => res.data)
    const queryKey = 'Lessons'
    return useQuery<Lesson[], Error>({
        queryKey: queryKey,
        queryFn: fetchLessons
    })


}

export default useGetLessons;