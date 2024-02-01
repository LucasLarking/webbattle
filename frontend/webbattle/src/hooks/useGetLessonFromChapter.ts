import axios from "axios"
import {CAHCE_KEY_LESSON, Lesson_big } from "../lesson/Lesson"
import { useQuery } from '@tanstack/react-query';

const useGetLessonFromChapter = (chapter_id: string) => {
    const fetchLessonFromChapter = () => axios.get<Lesson_big[]>(`http://localhost:8000/chapters/${chapter_id}/lessons/`)
    .then(res => res.data)

    const queryKey = [CAHCE_KEY_LESSON, chapter_id];
    return useQuery<Lesson_big[], Error>({
        queryKey: queryKey,
        queryFn: fetchLessonFromChapter
    }) 
}

export default useGetLessonFromChapter;