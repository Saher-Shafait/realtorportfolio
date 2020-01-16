import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from '../src/components/Navigation';
import Header from '../src/components/Header';
import Services from '../src/components/Services';
import * as serviceWorker from './serviceWorker';



class App extends Component {
    render() {
        return (
            <div>
                <Navigation LogoTitle="Menu"/>
                <Header title="Kevin Campbell" button="Find Out More"/>
                <Services/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
