import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page404 from './Views/Page404';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Article from './Views/Article';
import Tags from './Views/Tags';


function App() {
    return (
        <div>
            <Router>
             <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/article">
                        <Article />
                    </Route>
                    <Route path="/tags">
                        <Tags />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
