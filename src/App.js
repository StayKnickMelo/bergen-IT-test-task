import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


import Header from './components/Header';
import GalleryList from './components/GalleryList';
import AboutMe from './components/AboutMe';
import Photo from './components/Photo';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <div id="outer-container">
          <Header pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <div id="page-wrap">
            <Route path="/" exact component={GalleryList} />
          </div >
        </div>
          <Switch>
            <Route path="/me" exact component={AboutMe} />
            <Route exact path="/photo/:id" component={Photo} />
          </Switch>
      </Router>
    </Provider >

  );
}

export default App;
