import { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

import Test from './pages/Test';


export default function App() {

  return (
    <section className="flex flex-col items-center relative sm:w-411 sm:h-731 sm:shadow-md h-screen">
      <main className="w-full flex-grow order-4 items-stretch mt-16 pb-4 pt-6 px-5 font-body-custom">
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
          <Route path='/test'>
            <Test />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <Header />
    </section>
  );
}