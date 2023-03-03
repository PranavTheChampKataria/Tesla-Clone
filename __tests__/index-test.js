import React from 'react';
import renderer from 'react-test-renderer';
import CarsList from '../Components/CarsList/index';

test('renders correctly', () => {
  const tree = renderer.create(<CarsList />).toJSON();
  expect(tree).toMatchSnapshot();
});