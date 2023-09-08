import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Searchbox from '../components/Searchbox';

function Homepage() {
  const { loading, error, companies } = useSelector((state) => state.company);
  return (
    <section>
      <div className="home-div">
        <Navbar />
        <Searchbox />
      </div>
      <div className="home-container">
        {loading && <p>Loading, please wait!</p>}
        {error && <p>Error loading data, please try again!</p>}
        {companies.map((company) => (
          <div key={company.symbol}>
            <div className="div-container">
              <div className="arrow-div">
                <FaArrowRight className="arrow-icon" />
              </div>
              <div className="company-info">
                <p className="company-name">
                  {/* Wrap the category name with Link */}
                  <Link to={`/metrics/${company.symbol}`}>{company.name}</Link>
                </p>
                <p className="company-symbol">{company.symbol}</p>
                <p className="company-price">{company.price}</p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
}

export default Homepage;
