import React, { useEffect, useState } from 'react'
import CodeEditor from '../CodeEditor'
import html2canvas from 'html2canvas'
import RenderAnswerImg from './answerImage'
import useGetLesson from '../../../hooks/useGetLesson'
import { useParams } from 'react-router-dom'


// Have user write code
// Make code into iframe
// Make code into HTML => Canvas
// Read canvas data (data1)
// Make asnwerimage to canvas
// Read its data (data2)
// Run calc function with data

const BattlePage = () => {

  const { slug } = useParams();

  const { data: lesson, isLoading: lessonLoading, error: lessonError } = useGetLesson(slug!)
  const [code, setCode] = useState('')
  const [answerImageData, setAnswerImgData] = useState<Uint8ClampedArray | null>(null);
  const [userImgData, setUserImgData] = useState<Uint8ClampedArray | null>(null);

  
  useEffect(() => {
    if (userImgData && answerImageData) {
      
      let differentPixels = 0;
      
      for (let i = 0; i < userImgData.length; i += 4) {
        // Compare RGB values
        if (
          userImgData[i] !== answerImageData[i] ||
          userImgData[i + 1] !== answerImageData[i + 1] ||
          userImgData[i + 2] !== answerImageData[i + 2]
          ) {
            differentPixels++;
          }
        }
        
        const totalPixels = 100 * 100;
        const similarityPercentage = ((totalPixels - differentPixels) / totalPixels) * 100;
        console.log(similarityPercentage.toFixed(2));
        
      }
    }, [userImgData])
    
    const handleSetAnswerData = (newData: Uint8ClampedArray) => {
      setAnswerImgData(newData);
    };
    
    
    
    
    const codeToImage = async () => {
      // Get written code and turn into image data

      const node = document.querySelectorAll<HTMLElement>(`#output`)[0];
      if (!node || !lesson) return;
      const canvas = await html2canvas(node, { useCORS: true });
      const ctx = canvas.getContext('2d')
      await new Promise(resolve => setTimeout(resolve, 1000));
      const imgData = ctx?.getImageData(0, 0, lesson.image_set[0].width, lesson.image_set[0].height).data
      
      if (imgData) {
        setUserImgData(imgData)
      }
      
      
    }
    
    if (lessonLoading) return (<p>lesson loading</p>)
    if (lessonError) return (<p>lesson Error</p>)

    console.log(lesson, 'LESSON')
  return (
    <>
      <h1>{lesson?.name}</h1>
      <div className='flex'>
        <CodeEditor value={code} onChange={setCode} />

        <iframe
          id="capture"
          srcDoc={code}
          title="output"
          sandbox="allow-scripts"
        />
      </div>
      <div id="output" dangerouslySetInnerHTML={{ __html: code }} />
      <button onClick={codeToImage}>Calculate Similarity</button>
      <RenderAnswerImg AnswerImgData={handleSetAnswerData} />
    </>
  )
}

export default BattlePage