import React from 'react';
import { render, screen, act } from '@testing-library/react-native';

import { Avatar } from '../';

describe('Avatar Component', () => {
  test('renders correctly with minimum props', () => {
    render(<Avatar label="AB" />);
    const text = screen.getByText('AB');
    expect(text).toBeTruthy();
  });

  test('displays the first two letters of the label', () => {
    render(<Avatar label="Avatar" />);
    const text = screen.getByText('AV');
    expect(text).toBeTruthy();
  });

  test('renders an image when source is provided', () => {
    const testSource = { uri: 'https://example.com/test.jpg' };
    render(<Avatar label="AB" source={testSource} />);
    const image = screen.getByTestId('avatar-image');
    expect(image.props.source).toEqual(testSource);
  });

  test('handles image error by displaying label', () => {
    const testSource = { uri: 'https://example.com/test.jpg' };
    render(<Avatar label="AB" source={testSource} />);
    const image = screen.getByTestId('avatar-image');

    act(() => {
      image.props.onError(); // Wrap state-changing actions in act()
    });

    const text = screen.getByText('AB');
    expect(text).toBeTruthy();
  });

  test('applies styles based on the size prop', () => {
    render(<Avatar label="AB" size="large" />);
    const view = screen.getByTestId('avatar-view');
    expect(view.props.style.width).toBe(150);
    expect(view.props.style.height).toBe(150);
  });

  test('renders with custom border color', () => {
    const borderColor = 'red';
    render(<Avatar label="AB" borderColor={borderColor} />);
    const view = screen.getByTestId('avatar-view');
    expect(view.props.style.borderColor).toBe(borderColor);
  });

  test('applies opacity', () => {
    const opacity = 0.5;
    render(<Avatar label="AB" opacity={opacity} />);
    const view = screen.getByTestId('avatar-view');
    expect(view.props.style.opacity).toBe(opacity);
  });
});
