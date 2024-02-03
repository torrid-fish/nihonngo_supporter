import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Test from 'components/Test.jsx';

export default function Main(props) {
    return <Router>
        <Route exact path="/" component={Test}/>
    </Router>
}