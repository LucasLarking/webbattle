import React from 'react'
import { Lesson_big, Lesson_small } from '../../lesson/Lesson'

import useGetLessonFromChapter from '../../hooks/useGetLessonFromChapter';
import { Link } from 'react-router-dom';

interface Props {
    lesson: Lesson_small;

}
const LessonContainer = ({lesson}: Props) => {
  

  return (
    <>
  
    <h4 className='ml-5 capitalize'>{lesson.name}</h4>
    </>
  )
}

export default LessonContainer