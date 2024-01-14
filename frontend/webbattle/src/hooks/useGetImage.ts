// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import axios from "axios";
// import { useQuery } from'@tanstack/react-query';


// interface image {
//     image: File;
// }

// const useGetImage = (lessont_id: number) => {
//     const fetchAnswerImg = () => axios.get<File>(`http://127.0.0.1:8000/media/images/halfgreen_VSX6eUQ.png/`)
//         .then((res) => {
//             return res.data;
//         })
//     const queryKey = 'AnswerImg'

//     return useQuery<File, Error>({
//         queryKey: queryKey,
//         queryFn: fetchAnswerImg
//     })
// }

// export default useGetImage;