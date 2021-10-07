import { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';


export default function App() {

  return (
    <section className="w-screen min-h-screen flex flex-col">
      <main className="w-full flex-grow order-4 items-stretch mt-14">
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route exact path='/search-jokes'>
            <SearchPage />
          </Route>
          <Route path='/category-result/:category'>
            <CategoryPage />
          </Route>
        </Switch>
      </main>
      <Header />
    </section>
  );
}