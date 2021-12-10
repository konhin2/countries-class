import { Link, useParams } from 'react-router-dom';
const CountryDetails = (props) => {
  const { countries } = props;
  const { cca3 } = useParams();
  // Encontrar al pais clickedo
  const found = countries.find((element) => element.cca3 === cca3);
  // Encontrar los bordes
  const borders = found.borders.map((elementMap) => {
    return countries.find((elementFilter) => elementFilter.cca3 === elementMap);
  });
  return (
    <div className="col-7">
      <h1>{found.name.common}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{found.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {found.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.map((element, i) => {
                  return (
                    <li key={i}>
                      <Link to={`/countries/${element.cca3}`}>
                        {`${element.flag} ${element.name.common}`}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
