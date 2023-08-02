import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Settings from './pages/Settings'
import Header from './components/Header';

//Main App Component
function App() {
    return (
       <>
        <Router>
            <div>
                <Header />
                <main className='container mx-auto px-3 pb-12'>
                    <Routes>
                        <Route path="/" element={<Settings/>} />
                        <Route path="/settings/:setting" element={<Settings/>} />
                    </Routes>
                </main>
            </div>
        </Router>
       </>
    );
}

export default App;