import axios from "axios";
import { CAHCE_KEY_LESSON, Lesson_big } from "../lesson/Lesson";
import { useQuery } from '@tanstack/react-query';

const useGetLessons = () => {
    const fetchLessons = () => axios.get<Lesson_big[]>(`http://127.0.0.1:8000/lessons/`)
        .then((res) => res.data)

    return useQuery<Lesson_big[], Error>({
        queryKey: CAHCE_KEY_LESSON,
        queryFn: fetchLessons
    })


}

export default useGetLessons;