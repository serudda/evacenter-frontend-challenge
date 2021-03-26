/* --- DEPENDENCIES --- */
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Navbar from '@organisms/Navbar/Navbar';
import DashboardPage from '@pages/DashboardPage/DashboardPage';
/* -------------------- */

const App: React.FC = () => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const testId = 'App';

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div data-testid={testId} className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={DashboardPage} exact />
      </Switch>
    </div>
  );
};

export default App;
