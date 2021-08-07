import React, {Suspense, lazy} from 'react';
import {Router} from '@reach/router';
import Site from "./layouts/site";
const Calendar = lazy(() => import ( './pages/calendar/calendar'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={'loading...'}>
        <Router >
          <Site path="/">
            <Calendar path={'/'}/>
          </Site>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
