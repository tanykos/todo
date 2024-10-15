import { render, screen, fireEvent } from '@testing-library/react';
import MainComponent from '../../../components/MainComponent';

describe('MainComponent', () => {
  let input: HTMLElement;
  let button: HTMLElement;

  beforeEach(() => {
    render(<MainComponent />);
    input = screen.getByTestId('add task input');
    button = screen.getByTestId('add task button');
  });

  test('renders input and button for adding a new task', () => {
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('adds a new task to the list', () => {
    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(button);

    const taskItem = screen.getByText('Test Task');
    expect(taskItem).toBeInTheDocument();
  });

  test('toggles task completion', () => {
    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(button);

    const taskItemBtn = screen.getByTestId('list item');
    fireEvent.click(taskItemBtn);

    const checkbox = screen.getByTestId('task checkbox');
    const inputCheck = checkbox.querySelector('input');
    expect(inputCheck).toBeChecked();
  });
});
