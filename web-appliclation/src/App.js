import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path="/" component={AllProductsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;