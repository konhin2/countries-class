import { Link, Outlet } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;
  return (
    <div class="container">
      <div class="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {countries.map((element, i) => {
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
