import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import AIProducts from './pages/AIProducts';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import Resources from './pages/Resources';
import RequestDemo from './pages/RequestDemo';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/ai-products" component={AIProducts} />
        <Route path="/resources" component={Resources} />
        <Route path="/request-demo" component={RequestDemo} />
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
        {/* Placeholder routes */}
        <Route path="/pricing" component={ComingSoon} />
        <Route path="/enterprise" component={ComingSoon} />
        <Route path="/about" component={ComingSoon} />
        <Route path="/careers" component={ComingSoon} />
        <Route path="/terms" component={ComingSoon} />
        <Route path="/privacy" component={ComingSoon} />
        <Route path="/security" component={ComingSoon} />
        {/* Catch-all */}
        <Route path="*" component={ComingSoon} />
      </Switch>
    </Router>
  );
};

export default App;
