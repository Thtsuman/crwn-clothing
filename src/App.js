import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Homepage from './pages/homepage/homepage.components'

import ShopPage from './pages/shop/shop.components';

const App = () => {
    return (
        <div>
            <Router>
                <Route exact path='/' component={Homepage} />
                <Route path='/shop' component={ShopPage} />
            </Router>
        </div>
    )
}

export default App;