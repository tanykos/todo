import { render, screen, fireEvent } from "@testing-library/react";
import Actions from "../../../components/Actions";
import { TaskFilter } from "../../../types";

describe("Actions component", () => {
  const mockSetActiveFilter = jest.fn();
  const mockClearCompletedTasks = jest.fn();

  const defaultProps = {
    activeFilter: "All" as TaskFilter,
    setActiveFilter: mockSetActiveFilter,
    activeCount: 5,
    completedCount: 2,
    clearCompletedTasks: mockClearCompletedTasks,
  };

  test("should call setActiveFilter on filter button click", () => {
    render(<Actions {...defaultProps} />);
    
    const filterButton = screen.getByText("active");
    fireEvent.click(filterButton);
    
    expect(mockSetActiveFilter).toHaveBeenCalledWith("active");
  });

  test("should call clearCompletedTasks on 'Clear completed' button click", () => {
    render(<Actions {...defaultProps} />);
    
    const clearButton = screen.getByText("Clear completed");
    fireEvent.click(clearButton);

    expect(mockClearCompletedTasks).toHaveBeenCalled();
  });
});
