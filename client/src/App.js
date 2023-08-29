import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Systems from './components/settings/Systems';
import { SettingsProvider } from './context/SettingsContext';
import Global from './components/settings/Global';
import Sources from './components/settings/Sources';

//Main App Component
function App() {
    return (
       <>
        <Router>
            <div>
                <Header />
                <main className='container mx-auto px-3 pb-12'>
                    <Routes>
                        <Route path="/" element={<SettingsProvider><Global/></SettingsProvider>} />
                        <Route path="/settings/" element={<SettingsProvider><Global/></SettingsProvider>} />
                        <Route path="/settings/global" element={<SettingsProvider><Global/></SettingsProvider>} />
                        <Route path="/settings/sources" element={<SettingsProvider><Sources/></SettingsProvider>} />
                        <Route path="/settings/systems" element={<SettingsProvider><Systems/></SettingsProvider>}/>
                    </Routes>
                </main>
            </div>
        </Router>
       </>
    );
}

export default App;