import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import configureStore from 'redux-mock-store';
import Searchbox from '../components/Searchbox';
import { setSearchTerm } from '../redux/Searchbox/searchboxSlice';

const mockStore = configureStore([]);

test('it should dispatch setSearchTerm when input changes', () => {
  const store = mockStore({}); // Provide an initial state if needed

  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <Searchbox />
    </Provider>,
  );

  const input = getByPlaceholderText('search by company name...');
  fireEvent.change(input, { target: { value: 'your search term' } });

  const actions = store.getActions();
  const expectedAction = setSearchTerm('your search term');
  expect(actions).toContainEqual(expectedAction);
});
