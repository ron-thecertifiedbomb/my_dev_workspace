'use client';

import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user, role, logout } = useAuth();
  const router = useRouter();

  const goToDashboard = () => {

    if (role) router.push(`/${role}`);
    else router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      


      
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Home Page</h1>

        {user ? (
          <>
            <p className="mb-4 text-gray-700">Welcome back, <strong>{user}</strong>!</p>
            <div className="space-y-3">
              <button
                onClick={goToDashboard}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
              >
                Go to {role} Dashboard
              </button>
              <button
                onClick={logout}
                className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={() => router.push('/login')}
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
