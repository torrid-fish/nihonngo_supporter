import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TestPage from 'components/TestPage.jsx';

export default function Main(props) {
    return <Router>
        <Route exact path="/" component={TestPage}/>
    </Router>
}