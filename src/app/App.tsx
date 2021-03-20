/* --- DEPENDENCIES --- */
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import FloatingMenu from '@atoms/FloatingMenu/FloatingMenu';
import Navbar from '@organisms/Navbar/Navbar';
import DashboardPage from '@pages/DashboardPage/DashboardPage';
/* -------------------- */

const App: React.FC = () => {
  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={DashboardPage} exact />
      </Switch>
      <FloatingMenu className="fixed bottom-0 right-0 mb-4 mr-4 lg:mb-8 lg:mr-8" />
    </div>
  );
};

export default App;
