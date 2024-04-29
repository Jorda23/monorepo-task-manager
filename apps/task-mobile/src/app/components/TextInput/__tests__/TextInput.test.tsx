import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { TextInput } from '../';

describe('TextInput Component', () => {
  test('renders correctly with default props', () => {
    const { getByTestId } = render(
      <TextInput
        value=""
        placeholder="Enter text"
        type="default"
        error={false}
      />
    );
    const input = getByTestId('text-input-outlined');
    expect(input).toBeTruthy();
  });

  test('handles text change, focus, and blur events', () => {
    const onChangeText = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    const { getByTestId } = render(
      <TextInput
        value=""
        placeholder="Enter text"
        type="default"
        error={false}
        onChange={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );

    const input = getByTestId('text-input-outlined');
    act(() => {
      fireEvent.changeText(input, 'New text');
    });
    act(() => {
      fireEvent(input, 'focus');
    });
    act(() => {
      fireEvent(input, 'blur');
    });

    expect(onChangeText).toHaveBeenCalledWith('New text');
    expect(onFocus).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalled();
  });

  test('toggles password visibility when eye icon is pressed', () => {
    const { getByTestId } = render(
      <TextInput
        value=""
        placeholder="Password"
        type="password"
        error={false}
      />
    );

    const eyeIcon = getByTestId('right-icon-adornment');
    act(() => {
      fireEvent.press(eyeIcon);
    });
  });
});
