import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import AIProducts from './pages/AIProducts';
import Enterprise from './pages/Enterprise';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import Guides from './pages/Guides';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Security from './pages/Security';
import ComingSoon from './pages/ComingSoon'; // Placeholder for unimplemented pages

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/ai-products" component={AIProducts} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/enterprise" component={ComingSoon} />
        <Route path="/resources/library" component={ResourceLibrary} />
        <Route path="/resources/blog" component={Blog} />
        <Route path="/resources/case-studies" component={CaseStudies} />
        <Route path="/resources/guides" component={Guides} />
        <Route path="/about" component={About} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/security" component={Security} />
        <Route path="*" component={ComingSoon} />
      </Switch>
    </Router>
  );
};

export default App;
