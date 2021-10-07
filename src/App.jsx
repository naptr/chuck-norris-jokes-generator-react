import { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';


export default function App() {

  return (
    <section className="flex flex-col items-center sm:w-411 sm:h-731 relative sm:shadow-md">
      <main className="w-full flex-grow order-4 items-stretch mt-16 pb-4 pt-6 px-5">
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route exact path='/jokes/search'>
            <SearchPage />
          </Route>
          <Route path='/jokes/random'>
            <CategoryPage />
          </Route>
        </Switch>
      </main>
      <Header />
    </section>
  );
}