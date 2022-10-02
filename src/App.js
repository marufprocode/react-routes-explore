import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import AllPosts from './components/allPosts/AllPosts';
import FrndDetails from './components/friendDetails/FrndDetails';
import Friends from './components/friends/Friends';
import Home from './components/home/Home';
import Main from './components/layout/Main';
import PostDetail from './components/postDetail/PostDetail';
import Products from './components/Products/Products';

function App() {
  const router = createBrowserRouter([
    { path: '/', 
      element: <Main/>, 
      children: [
      {path: '/home', element: <Home/>},
      {path: '/about', element: <About/>},
      {path: '/products', element: <Products/>},
      {
        path: '/friends', 
        element: <Friends/> ,
        loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/users');
        }
      },
      {
        path: '/friends/:id',
        element: <FrndDetails/>,
        loader: async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        }
      },
      {
        path: '/allpost',
        loader: async () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <AllPosts/>
      },
      {
        path: '/allpost/:id',
        loader: async ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetail/>
      }
      ]
    },
    {path: '*', element: <div>Page Not Found</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
