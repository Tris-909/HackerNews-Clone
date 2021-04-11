import '../styles/App.css';
import LinkList from './LinkList';
import Header from './Header';
import CreateLink from './CreateLink';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="center w100">
      <Header />

      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
