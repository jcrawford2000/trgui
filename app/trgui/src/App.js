import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalSettings from './pages/GlobalSettings'
import SourcesSettings from './pages/SourcesSettings';
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
                        <Route path="/" element={<GlobalSettings/>} />
                        <Route path="/settings/global" element={<GlobalSettings/>} />
                        <Route path="/settings/sources" element={<SourcesSettings/>} />
                    </Routes>
                </main>
            </div>
        </Router>
       </>
    );
}

export default App;