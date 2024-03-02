import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShortenUrl from './components/urls/ShortenUrl';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<ShortenUrl />} />
                    <Route path='/urls' element={<ShortenUrl />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App