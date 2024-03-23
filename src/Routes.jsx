import { BrowserRouter as Router} from 'react-router-dom'
import Root from './components/Root';
import './RoutesCoinApp.css'

function RoutesCoinApp() {
    return (
        <Router>
            <Root />
        </Router>
    )
}

export default RoutesCoinApp;