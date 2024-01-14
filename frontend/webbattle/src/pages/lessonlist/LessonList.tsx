import React from 'react'
import useGetLessons from '../../hooks/useGetLessons'
import { Link } from 'react-router-dom'
import { Lesson_big } from '../../lesson/Lesson'
import { Box, Heading } from '@chakra-ui/react'

// import '../../styles/styles.scss';
const LessonList = () => {
    const { data: lessons, isLoading, error } = useGetLessons()

    if (error) return <p>Error</p>
    if (isLoading) return <p>is loading</p>

    return (
        <>
            <Box maxW='md' m={'auto'} color={'white'} py={20}>
            <Heading as='h1' size='2xl'>Hello Larking!</Heading>
                {lessons?.map((lesson: Lesson_big) => (
                    <div key={lesson.id}>
                        <p>{lesson.name}</p>
                        <Link to={`/${lesson.id}`}>{lesson.name}</Link>

                    </div>
                ))}
            </Box>


        </>
    )
}

export default LessonList