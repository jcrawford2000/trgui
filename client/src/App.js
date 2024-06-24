import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Systems from './components/settings/Systems';
import { SettingsProvider } from './context/SettingsContext';
import Global from './components/settings/Global';
import Sources from './components/settings/Sources';
import Events from './stats/Events';
import StatsProvider from './context/StatsContext';
import StatsWebSocket from './stats/StatsWebSocket';
import Home from './components/Home';
import ActiveIncidents from './components/ActiveIncidents';

//Main App Component
function App() {
    const webSocketURL = 'ws:192.168.0.36:8899';

    return (
       <>
        <Router>
            <div>
                <Header />
                <main className='container mx-auto px-3 pb-12 bg-neutral'>
                    <Routes>
                        <Route path="/" element={<SettingsProvider><Home/></SettingsProvider>} />
                        <Route path="/stats" element={<StatsProvider><StatsWebSocket url={webSocketURL}/><Events/></StatsProvider>} />
                        <Route path="/settings/" element={<SettingsProvider><Global/></SettingsProvider>} />
                        <Route path="/settings/global" element={<SettingsProvider><Global/></SettingsProvider>} />
                        <Route path="/settings/sources" element={<SettingsProvider><Sources/></SettingsProvider>} />
                        <Route path="/settings/systems" element={<SettingsProvider><Systems/></SettingsProvider>}/>
                        <Route path="/active" element={<ActiveIncidents/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
       </>
    );
}

export default App;