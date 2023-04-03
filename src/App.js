import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import{
//     BrowserRouter as Router,
//     Route,
//     Routes
// } from "react-router-dom"
const App = ()=>{
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(()=>{
            setAlert(null)
        }, 2000)
    }
    const toggleMode=()=>{
        if(mode === 'light'){
            setMode('dark')
            document.body.style.backgroundColor = '#042743'
            showAlert("Dark mode has been enabled", "success")
        }
        if(mode === 'dark'){
           setMode('light')
           document.body.style.backgroundColor = 'white'
           showAlert("Light mode has been enabled", "success")
        }
    }
return <>
{/*App with router */}
{/* <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">

<Routes>
    <Route path="/about" element={ <About/>}></Route>
    <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}></Route>
    </Routes>
</div>
</Router> */}
{/*App without router */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
</>
}
export default App

// CSS
