import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './pages/Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
        <Route index element={<IndexPage></IndexPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
