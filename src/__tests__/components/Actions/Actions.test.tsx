import { render, screen, fireEvent } from '@testing-library/react';
import Actions from '../../../components/Actions';
import { TaskFilter } from '../../../types';

describe('Actions component', () => {
  const mockSetActiveFilter = jest.fn();
  const mockClearCompletedTasks = jest.fn();

  const defaultProps = {
    activeFilter: 'all' as TaskFilter,
    setActiveFilter: mockSetActiveFilter,
    activeCount: 100,
    completedCount: 2,
    clearCompletedTasks: mockClearCompletedTasks,
  };

  beforeEach(() => {
    render(<Actions {...defaultProps} />);
  });

  test('should call setActiveFilter on filter button click', () => {    
    const filterButton = screen.getByTestId('active');
    fireEvent.click(filterButton);
    
    expect(mockSetActiveFilter).toHaveBeenCalledWith('active');
  });

  test('should call clearCompletedTasks on "Clear completed" button click', () => {    
    const clearButton = screen.getByText('Clear completed');
    fireEvent.click(clearButton);

    expect(mockClearCompletedTasks).toHaveBeenCalled();
  });

  test('should set "99+" if activeCount > 99', () => {
    const counter = screen.getByTestId('task counter');

    expect(counter).toHaveTextContent('99+');
  });
});
