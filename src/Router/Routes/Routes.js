import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import AllServices from '../../Pages/Services/AllServices';
import Services from '../../Pages/Services/Services';
import SignUp from '../../Pages/SignUp/SignUp';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/allservices')
            },
            {
                path: '/',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            }
        ]
    }
])
export default router;