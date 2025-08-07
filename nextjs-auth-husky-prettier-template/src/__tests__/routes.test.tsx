// src/__tests__/routes.test.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import Home from '@/app/page';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';

// ✅ Cast mocks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/context/auth-context', () => ({
  useAuth: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  push: mockPush,
});

const mockUseAuth = useAuth as jest.Mock;

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render login button when user is not authenticated', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      role: null,
      logout: jest.fn(),
    });

    render(<Home />);

    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.queryByText(/welcome back/i)).not.toBeInTheDocument();
  });

  it('should render welcome message and buttons when user is authenticated', () => {
    mockUseAuth.mockReturnValue({
      user: 'John Doe',
      role: 'admin',
      logout: jest.fn(),
    });

    render(<Home />);

    expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /go to admin dashboard/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
  });

  it('should navigate to role dashboard when Go to Dashboard is clicked', () => {
    mockUseAuth.mockReturnValue({
      user: 'John Doe',
      role: 'admin',
      logout: jest.fn(),
    });

    render(<Home />);
    fireEvent.click(
      screen.getByRole('button', { name: /go to admin dashboard/i })
    );

    expect(mockPush).toHaveBeenCalledWith('/admin');
  });

  it('should navigate to login when Go to Dashboard is clicked without role', () => {
    mockUseAuth.mockReturnValue({
      user: 'John Doe',
      role: null,
      logout: jest.fn(),
    });

    render(<Home />);
    fireEvent.click(screen.getByRole('button', { name: /go to dashboard/i }));

    expect(mockPush).toHaveBeenCalledWith('/login');
  });

  it('should navigate to login when Login button is clicked', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      role: null,
      logout: jest.fn(),
    });

    render(<Home />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(mockPush).toHaveBeenCalledWith('/login');
  });

  it('should call logout when Logout button is clicked', () => {
    const mockLogout = jest.fn();
    mockUseAuth.mockReturnValue({
      user: 'John Doe',
      role: 'admin',
      logout: mockLogout,
    });

    render(<Home />);
    fireEvent.click(screen.getByRole('button', { name: /logout/i }));

    expect(mockLogout).toHaveBeenCalled();
  });
});
