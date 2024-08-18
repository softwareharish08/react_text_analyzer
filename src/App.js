// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert'

//importing router
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'


function App() {

  //hooks
  const [mode, setMode] = useState('light')
  const [rMode, setRMode] = useState('dark')
  const [bg, setBg] = useState('white')
  const [alert, setAlert] = useState(null)
  const [textAreaColor, setTextAreaColor] = useState({ backgroundColor: 'light', color: 'black' })
  const [aboutBg, setAboutBg]=useState({
    backgroundColor: 'light',
    color: 'black'
})

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  //function1
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setRMode('light')
      setBg('gray')
      document.body.style.backgroundColor = 'gray'
      showAlert('Dark mode is enabled', 'success')
      setTextAreaColor({ backgroundColor: 'gray', color: 'white'})
      setAboutBg({backgroundColor: 'gray', color: 'white'})
    }
    else {
      setMode('light')
      setRMode('dark')
      setBg('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark mode is disabled', 'success')
      setTextAreaColor({ backgroundColor: 'white', color: 'black' })
      setAboutBg({backgroundColor: 'white', color: 'black'})
    }
  }

  //function2
  const bluishMode = () => {
    if (mode === 'light' || mode === '#012c01') {
      setMode('dark')
      setRMode('light')
      setBg('#010146')
      document.body.style.backgroundColor = '#010146'
      showAlert('bluish mode is enabled', 'success')
      setTextAreaColor({ backgroundColor: '#010146', color: 'white' })
      setAboutBg({backgroundColor: '#010146', color: 'white'})
    }
    else {
      setMode('light')
      setRMode('dark')
      setBg('light')
      document.body.style.backgroundColor = 'white'
      showAlert('bluish mode is disabled', 'success')
      setTextAreaColor({ backgroundColor: 'white', color: 'black' })
      setAboutBg({backgroundColor: 'white', color: 'black'})
    }
  }

  //function3
  const greenishMode = () => {
    if (mode === 'light' || mode === '#010146') {
      setMode('dark')
      setRMode('light')
      setBg('#012c01')
      document.body.style.backgroundColor = '#012c01'
      showAlert('greenish mode is enabled', 'success')
      setTextAreaColor({ backgroundColor: '#012c01', color: 'white' })
      setAboutBg({backgroundColor: '#012c01', color: 'white'})
    }
    else {
      setMode('light')
      setRMode('dark')
      setBg('light')
      document.body.style.backgroundColor = 'white'
      showAlert('greenish mode is disabled', 'success')
      setTextAreaColor({ backgroundColor: 'white', color: 'black' })
      setAboutBg({backgroundColor: 'white', color: 'black'})
    }
  }

  //routing  
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar title='TextUtils' mode={mode} rMode={rMode} toggleMode={toggleMode} bluishMode={bluishMode} greenishMode={greenishMode} />
          <Alert alert={alert} />
          <Outlet/>
        </>
      ),
      children: [{ path: '/', element: <TextForm heading='Enter The Text To Analyze' showAlert={showAlert} rMode={rMode} bg={bg} textAreaColor={textAreaColor} /> },
      { path: '/about', element: <About aboutBg={aboutBg} rMode={rMode}/> }]
    }

  ])

  return (
    <RouterProvider router={router} />  
  );
}

export default App;
