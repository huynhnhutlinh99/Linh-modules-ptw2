
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//List omponents
const Comp6 = lazy(() => import('./components/6/Component6'));
const Comp14 = lazy(() => import('./components/14/Component14'));
const Comp19 = lazy(() => import('./components/19/Component19'));
const Comp26 = lazy(() => import('./components/26/Component26'));
const Comp29 = lazy(() => import('./components/29/Component29'));
const Comp41 = lazy(() => import('./components/41/Component41'));
const Comp50 = lazy(() => import('./components/50/Component50'));
const Comp64 = lazy(() => import('./components/64/Component64'));
const Comp65 = lazy(() => import('./components/65/Component65'));
const Comp66 = lazy(() => import('./components/66/component66'));
const Comp68 = lazy(() => import('./components/68/Component68'));
const Comp71 = lazy(() => import('./components/71/Component71'));
const Comp78 = lazy(() => import('./components/78/Component78'));
const Comp81 = lazy(() => import('./components/81/Component81'));
const Comp94 = lazy(() => import('./components/94/Component94'));
const Comp95 = lazy(() => import('./components/95/Component95'));

function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/' component={Comp6}/>
          <Route path='/6' component={Comp6}/>
          <Route path='/14' component={Comp14}/>
          <Route path='/19' component={Comp19}/>
          <Route path='/26' component={Comp26}/>
          <Route path='/29' component={Comp29}/>
          <Route path='/41' component={Comp41}/>
          <Route path='/50' component={Comp50}/>
          <Route path='/64' component={Comp64}/>
          <Route path='/65' component={Comp65}/>
          <Route path='/66' component={Comp66}/>
          <Route path='/68' component={Comp68}/>
          <Route path='/71' component={Comp71}/>
          <Route path='/78' component={Comp78}/>
          <Route path='/81' component={Comp81}/>
          <Route path='/94' component={Comp94}/>
          <Route path='/95' component={Comp95}/>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
