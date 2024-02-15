import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Index from '../layout/Index'
import Account from '../layout/Account'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import NewTodoForm from '../layout/NewTodoForm'
import RecordIN from '../layout/Record-IN'
import RecordOut from '../layout/Record-out'
import Edituser from '../layout/Edituser'
import Detail from '../layout/Detail'

const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <Index /> },
      { path: '/Account', element: <Account />},
      { path: '/Edituser', element: <Edituser />},
      { path: '/RecordIN', element: <RecordIN />},
      { path: '/RecordOut', element: <RecordOut />},
      { path: '/Detail', element: <Detail />}

    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <UserHome /> },
      { path: '/new', element: <NewTodoForm />}
    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  const finalRouter = user?.id ? userRouter : guestRouter
  return (
    <RouterProvider router={finalRouter} />
  )
}
