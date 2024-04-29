import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';

import Header from '../';

jest.mock('../../../shared/screenUtils', () => ({
  isMobileSmall: jest.fn(),
}));

describe('Header Component', () => {
  const mockHandleNavigate = jest.fn();

  beforeEach(() => {
    mockHandleNavigate.mockClear();
  });

  test('renders correctly with custom background color', () => {
    mockHandleNavigate.mockReturnValue(true);

    const backgroundColor = 'blue';
    const { getByTestId } = render(
      <Header label="Home" backgroundColor={backgroundColor} />
    );
    const headerView = getByTestId('header-view');

    const headerStyle = StyleSheet.flatten(headerView.props.style);
    const receivedBackgroundColor = headerStyle.backgroundColor;

    expect(receivedBackgroundColor).toBe(backgroundColor);
  });

  test('renders correctly with default props', () => {
    const { getByText } = render(<Header label="Home" />);
    expect(getByText('Home')).toBeTruthy();
  });

  test('renders correctly with custom background color', () => {
    const backgroundColor = 'blue';
    const { getByTestId } = render(
      <Header label="Home" backgroundColor={backgroundColor} />
    );
    const headerView = getByTestId('header-view');

    const headerStyle = StyleSheet.flatten(headerView.props.style);
    const receivedBackgroundColor = headerStyle.backgroundColor;
    expect(receivedBackgroundColor).toBe(backgroundColor);
  });

  test('calls handleNavigate when TouchableOpacity is pressed', () => {
    const { getByTestId } = render(
      <Header label="Home" handleNavigate={mockHandleNavigate} />
    );
    const touchable = getByTestId('header-button');
    fireEvent.press(touchable);
    expect(mockHandleNavigate).toHaveBeenCalled();
  });
});
