import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import data from './countries.json'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/countries' element={<CountriesList countries={data} />}>
                <Route path=':cca3' element={<CountryDetails countries={data} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;