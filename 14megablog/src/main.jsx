// import React from 'react'; //  Required for JSX in older setups
import ReactDOM from 'react-dom/client';

import { StrictMode } from 'react'

import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'

import AddPost from './components/Pages/AddPost.jsx'
import Signup from './components/Pages/Signup.jsx'
import EditPost from './components/Pages/EditPost.jsx'
import Post from './components/Pages/Post.jsx'
import AllPosts from './components/Pages/AllPosts.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>

  </StrictMode>,
)
