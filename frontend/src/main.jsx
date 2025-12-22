import { createRoot } from 'react-dom/client' 

import 'react-toastify/dist/ReactToastify.css';    // first toastify then tailwind
import './index.css'   // tailwind
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

)
