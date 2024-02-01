
import useGetLessons from '../../hooks/useGetLessons'


import { chapter } from '../../chapter/chapter'
import useGetChapters from '../../chapter/useGetChapter'
import Chapter from './Chapter';
const ChapterList = () => {
    const { data: lessons, isLoading, error } = useGetLessons()
    const { data: chapters, isLoading: chapterLoading, error: errorLoading } = useGetChapters()

    if (error) return <p>Error</p>
    if (isLoading) return <p>is loading</p>
    if (errorLoading) return <p>Error</p>
    if (chapterLoading) return <p>is loading</p>

    if (!chapters) return <p>chapter loading</p>

    return (
        <>
            <section className='listSection  bg-zinc-800 min-h-screen text-white relative'>
                <div className="conainer w-8/12  m-auto pt-20 relative">

                    <h1 className='text-4xl'>Hello Larking!</h1>
                 

                        {chapters.map((chapter: chapter) => (
                            <div key={chapter.id} className="relative before:content-[''] before:absolute before:left-12 before:top-16 before:w-1 before:h-full before:bg-white before:opacity-5">
                                
                                <Chapter chapter={chapter} />


                            </div>
                        ))}
           
                </div>
            </section>


        </>
    )
}

export default ChapterList