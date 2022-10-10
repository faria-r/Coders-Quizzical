import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Error from './Components/ErrorPage/Error';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Main from './Layouts/Main';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/topic',
          element:<Topics></Topics>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        }
      ]
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
