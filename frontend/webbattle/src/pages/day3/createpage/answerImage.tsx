import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient, QueryClientProvider } from '@tanstack/react-query';
import halfgreen from '../../../white.png'
import html2canvas from 'html2canvas';
import { CAHCE_KEY_LESSON, Lesson_big } from '../../../lesson/Lesson';


interface Props {
    AnswerImgData: (newData: Uint8ClampedArray) => void;
}

const RenderAnswerImg = ({ AnswerImgData }: Props) => {
    const [data, setData] = useState<boolean>(false)
    const queryClient = useQueryClient();
    // const {data: lesson, isLoading: lessonLoading, error: lessonError} = useQuery(CAHCE_KEY_LESSON, () => queryClient.getQueryData<Lesson_big>(CAHCE_KEY_LESSON))

    
    const lesson = queryClient.getQueryData<Lesson_big>(CAHCE_KEY_LESSON)

    const setAnswerImgData = async () => {
        const node = document.querySelectorAll<HTMLElement>(`.AnswerImage`)[0];
        if (!node || !lesson) return;
        const canvas = await html2canvas(node, { useCORS: true });
        const ctx = canvas.getContext('2d')
        const imgDataCode = ctx?.getImageData(0, 0, lesson.image_set[0].width, lesson.image_set[0].height).data

        if (imgDataCode) {

            setData(true)
            AnswerImgData(imgDataCode);}
    }

    useEffect(() => {
        if (!data) setAnswerImgData()

    }, [])

    if (!lesson) return (<p>loading</p>)
    if (!lesson.image_set) return (<p>loading</p>)
    if (!lesson.image_set[0]) return (<p>loading</p>)
    // if (lessonError) return (<p>lessonError</p>)

    return (
        <>
            <hr />
            <h2>from server</h2>


            <p>Answer:</p>
            {lesson.image_set[0].image && (<img className='AnswerImage' src={lesson?.image_set[0].image} />)}
            </>
    )
}

export default RenderAnswerImg