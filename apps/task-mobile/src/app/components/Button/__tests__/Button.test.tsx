import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../'; // Adjust the import path as needed

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  jest.mock('../../../../../assets/customIcons', () => ({
    ...jest.requireActual('../../../../../assets/customIcons'), // This line imports all existing icons normally
    Ambulance: jest.fn().mockReturnValue(<svg />), // Mock only the 'Ambulance' icon
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with label', () => {
    const { getByText } = render(<Button label="Click me" />);
    expect(getByText('Click me')).toBeTruthy();
  });

  test('calls onPress when clicked', () => {
    const { getByText } = render(
      <Button label="Click me" onPress={mockOnPress} />
    );
    const button = getByText('Click me');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });

  test('renders icon when iconName provided', () => {
    const iconName = 'Ambulance'; // Use a valid icon name based on your Icons object
    const { getByTestId } = render(
      <Button label="Click me" iconName={iconName} />
    );
    expect(getByTestId('button-icon')).toBeTruthy(); // Ensure you add `testID="button-icon"` to your Icon component in the Button
  });
});
