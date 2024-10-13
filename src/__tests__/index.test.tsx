import ReactDOM from 'react-dom/client';
import '../index';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe('Index.tsx', () => {
  it('should create a root div and render the App component', () => {
    const rootDiv = document.getElementById('root');
    expect(rootDiv).toBeInTheDocument();

    expect(ReactDOM.createRoot).toHaveBeenCalledWith(rootDiv);
  });
});
