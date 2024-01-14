import React from 'react'
import useGetLessons from '../../hooks/useGetLessons'
import { Link } from 'react-router-dom'
import { Lesson_big } from '../../lesson/Lesson'

const LessonList = () => {
    const { data: lessons, isLoading, error } = useGetLessons()

    if (error) return <p>Error</p>
    if (isLoading) return <p>is loading</p>

    return (
        <>
            <h1>Lesson List</h1>
            {lessons?.map((lesson: Lesson_big) => (
                <div>
                    <p key={lesson.id}>{lesson.name}</p>
                    <Link to={`/${lesson.id}`}>{lesson.name}</Link>

                </div>
            ))}

        </>
    )
}

export default LessonList