import React, { useState } from 'react'
import { chapter } from '../../chapter/chapter'
import useGetLessonFromChapter from '../../hooks/useGetLessonFromChapter'
import { Lesson_big, Lesson_small } from '../../lesson/Lesson'
import LessonContainer from './LessonContainer'
import { animate, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Props {
  chapter: chapter
}

const Chapter = ({ chapter }: Props) => {
  const { data: lessons, isLoading: lesson_loading, error: lesson_error } = useGetLessonFromChapter(chapter.id);
  const [showLessons, setShowLessons] = useState(false)
  const [rotateArrow, setRotateArrow] = useState(false)
  if (lesson_loading) return <p>lesson loading</p>
  if (lesson_error) return <p>lesson error</p>

  if (!lessons) return <p>Loading</p>
  console.log(lessons, chapter.id, chapter.chapter_name)
  if (Array.isArray(lessons)) {


    return (
      <>
        <div onClick={() => {setShowLessons(!showLessons); setRotateArrow(!rotateArrow)}} className='chapterContainer bg-zinc-900 my-10 p-5 flex justify-between rounded-sm cursor-pointer '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 absolute chapterArrow transition-transform transform ${rotateArrow ? 'rotate-180' : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          <h3 className='pl-10 tracking-wider'>{chapter.chapter_name} </h3>
          <span className='opacity-50'>{lessons.length} Modules</span>
        </div>
        {showLessons && (
          
            lessons.map((lesson_: Lesson_small) => (


              <Link to={`/${lesson_.id}`} key={lesson_.id} className='block relative lesson cursor-pointer'>

                <div className="bg-neutral-700 mb-3 ml-20 rounded-sm flex items-center
          before:content-[''] before:absolute before:left-6 before:top-1/2 before:w-14 before:h-1 before:bg-white before:opacity-5 before:transform before:-translate-y-1/2
          after:content-[''] after:absolute after:left-1 after:top-1/2 after:w-6 after:h-6  after:rounded-full after:border-4 after:border-white  after:opacity-5 after:transform after:-translate-x-1/2 after:-translate-y-1/2
           transition hover:scale-105
          ">
                  <div className="lessonType  bg-zinc-900 w-14 h-14 flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>

                  </div>

                  <LessonContainer lesson={lesson_} />
                </div>



              </Link>

            ))
          
        )}


      </>
    )

  }

}

export default Chapter


