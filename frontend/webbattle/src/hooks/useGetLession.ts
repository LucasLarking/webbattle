import axios from "axios"
import { CAHCE_KEY_LESSON, Lesson_big } from "../lesson/Lesson"
import { useQuery } from '@tanstack/react-query';

const useGetLesson = (lesson_id: number) => {
    const fetchLesson = () => axios.get<Lesson_big>(`http://127.0.0.1:8000/lessons/${lesson_id}/`)
    .then(res => res.data)

    return useQuery<Lesson_big, Error>({
        queryKey: CAHCE_KEY_LESSON,
        queryFn: fetchLesson
    })

}

export default useGetLesson;