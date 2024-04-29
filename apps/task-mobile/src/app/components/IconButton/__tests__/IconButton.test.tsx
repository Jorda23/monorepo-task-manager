import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { IconButton } from '../';

describe('IconButton Component', () => {
  test('renders correctly with default size', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <IconButton iconName="Activity" onPress={onPressMock} />
    );
    const iconButton = getByTestId('icon-button');

    // Check default size
    expect(iconButton.props.style.width).toBe(50);
    expect(iconButton.props.style.height).toBe(50);
  });

  test('renders correctly with small size', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <IconButton iconName="Ambulance2" onPress={onPressMock} size="sm" />
    );
    const iconButton = getByTestId('icon-button');

    // Check small size
    expect(iconButton.props.style.width).toBe(40);
    expect(iconButton.props.style.height).toBe(40);
  });

  test('renders correctly with default props', () => {
    // Mock onPress function
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <IconButton iconName="ArrowDown" onPress={onPressMock} />
    );

    // Get the rendered IconButton
    const iconButton = getByTestId('icon-button');

    expect(iconButton).toBeTruthy();
  });

  test('calls onPress function when pressed', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <IconButton iconName="Ambulance" onPress={onPressMock} />
    );

    // Get the rendered IconButton
    const iconButton = getByTestId('icon-button');

    // Simulate button press
    fireEvent.press(iconButton);

    expect(onPressMock).toHaveBeenCalled();
  });
});
