import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
                <Route path="/create" component={AddExpensePage} exact={true}></Route>
                <Route path="/edit" component={EditExpensePage} exact={true}></Route>
                <Route path="/help" component={HelpPage} exact={true}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
