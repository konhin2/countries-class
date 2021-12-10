import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const CountriesList = (props) => {
  const { countries } = props;
  const [search, setSearch] = useState('')
  function handleChange(event) {
    event.preventDefault()
    setSearch(event.target.value.toLowerCase())
  }
  return (
    <div class="container">
      <div class="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
          <input className="form-control me-2" type="search" placeholder="Search" ariaLabel="Search" onChange={e=>handleChange(e)} />
            {
            countries.filter(elemF => {
              if(search === ''){
                return elemF
              } else if(elemF.name.common.toLowerCase().includes(search)){
                return elemF
              }
            }).map((element, i) => {
              return (
                <Link
                  className="list-group-item list-group-item-action"
                  to={`/countries/${element.cca3}`}
                  key={i}
                >
                  {`${element.flag}  ${element.name.common}`}
                </Link>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default CountriesList;
