import React from 'react';
import { render } from '@testing-library/react-native';
import moment from 'moment';

import { CardItem } from '../'; 

describe('CardItem Component', () => {
  const mockProps = {
    createdAt: '2020-05-15T00:00:00.000Z',
    name: 'John Doe',
    srcImage: 'https://example.com/avatar.jpg',
    id: '1',
  };

  test('renders correctly', () => {
    const { getByText, getByTestId } = render(<CardItem {...mockProps} />);

    expect(getByText(mockProps.name)).toBeTruthy();
    expect(getByTestId('avatar-view')).toBeTruthy();
    expect(getByText(moment(mockProps.createdAt).format('LL'))).toBeTruthy();
  });

  test('displays the correct name and formatted date', () => {
    const { getByText } = render(<CardItem {...mockProps} />);
    const formattedDate = moment(mockProps.createdAt).format('LL');

    expect(getByText(mockProps.name)).toBeTruthy();
    expect(getByText(formattedDate)).toBeTruthy();
    expect(getByText('created at:')).toBeTruthy();
  });

  test('passes correct props to Avatar component', () => {
    const { getByTestId, getByText } = render(<CardItem {...mockProps} />);
    
    const avatarImageProps = getByTestId('avatar-image').props;
    expect(avatarImageProps.source.uri).toBe(mockProps.srcImage);
    
    // If `label` is displayed as text in the Avatar component
    expect(getByText(mockProps.name)).toBeTruthy(); 
  });
  
  
});

