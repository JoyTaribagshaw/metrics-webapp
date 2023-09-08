import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SingleCompanyDetails from './singleMetricsDetails';
// import singleCompanyData from './singleMetricsDetails';

function DetailsPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.companies);
  const parms = useParams();
  const { symbol } = parms;

  useEffect(() => {
    dispatch(SingleCompanyDetails(symbol));
  }, [dispatch, symbol]);

  return (
    <div>
      {loading && <p className="loading">Loading, please wait!</p>}
      {error && <p className="loading">Error loading data, please try again!</p>}
      {!loading && (
        <SingleCompanyDetails />
      )}
    </div>
  );
}

export default DetailsPage;

// import { singleCompanyData } from '../redux/companiesSlice';
