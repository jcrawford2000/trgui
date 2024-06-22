import { useEffect } from "react";
import { useStats } from "../context/StatsContext";

const StatsWebSocket = ({ url }) => {
    const { dispatch } = useStats();

    useEffect(() => {
        const socket = new WebSocket(url);
        
        socket.addEventListener('message', (event, isBinary) => {
            
            const newMessage = JSON.parse(event.data);
            //console.log("Event: "+ newMessage.type);
            switch (newMessage.type) {
                case 'calls_active':
                    //console.log("New calls Active Event");
                    if (newMessage.calls) {
                        dispatch({type: 'CALLS_ACTIVE', payload: newMessage.calls});
                    }
                    else {
                        dispatch({type: 'CALLS_ACTIVE', payload: []});
                    }
                    
                    break;
                case 'rates':
                    dispatch({type: 'RATES', payload: newMessage.rates})
                    break;
                case 'systems':
                    console.log("Systems Event:" + JSON.stringify(newMessage.systems));
                    dispatch({type: 'SYSTEMS', payload: newMessage.systems})
                    break;
                default:
                    break;
            }
            
        });
        socket.addEventListener('open', (event) => {
            socket.send('{"type":"getSystems"}');
        })
        
        return () => {
            socket.close();
        };
    }, [url, dispatch]);

    return null;
};

export default StatsWebSocket;