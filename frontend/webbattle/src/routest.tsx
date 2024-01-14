import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import LessonList from "./pages/lessonlist/LessonList";
import BattlePage from "./pages/day3/createpage/BattlePage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <LessonList />},
            {path: ':slug', element: <BattlePage />},
        ]

    }
]);

export default router