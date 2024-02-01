import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ChapterList from "./pages/lessonlist/ChapterList";
import BattlePage from "./pages/day3/createpage/BattlePage";
import Test from "./Test";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <ChapterList />},
            {path: ':slug', element: <BattlePage />},
            {path: 'test', element: <Test />},
        ]

    }
]);

export default router