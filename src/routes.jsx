import { createBrowserRouter } from 'react-router-dom';
import MainPage from './views/MainPage';
import NewBlogPost from './views/NewBlogPost';
import SinglePostPage from './views/SinglePostPage';

const router = createBrowserRouter([
    { path: '/', element: <MainPage /> },
    { path: '/new', element: <NewBlogPost /> },
    { path: '/posts/:postId', element: <SinglePostPage /> }
]);

export default router;