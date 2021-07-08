import Home from './components/options/Home';
import BattlePassFortnite from './components/options/battlePass/BattlePassFortnite';
import ChallengesBattlePass from './components/options/challengesFortnite/ChallengesBattlePass';
import NewsFortnite from './components/options/newsFortnite/NewsFortnite';
import Layout from './components/layout/Layout';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

function App() {
   return (
      <Router>
         <Layout>
            <Provider store={store}>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/BattlePassFortnite" component={BattlePassFortnite} />
                  <Route exact path="/Challenges" component={ChallengesBattlePass} />
                  <Route exact path="/NewsFortnite" component={NewsFortnite} />
                  <Redirect to="/" />
               </Switch>
            </Provider>
         </Layout>
      </Router>
   );
}
   
export default App;
