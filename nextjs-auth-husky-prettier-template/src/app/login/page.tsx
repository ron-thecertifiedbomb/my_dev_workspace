'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';



export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();



    
    const handleLogin = (role: 'admin' | 'user') => {
        login(`test_${role}`, role);
        router.push(`/${role}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Login</h1>
                <div className="space-y-4">
                    <button
                        onClick={() => handleLogin('admin')}
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
                    >
                        Login as Admin
                    </button>
                    <button
                        onClick={() => handleLogin('user')}
                        className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
                    >
                        Login as User
                    </button>
                </div>
            </div>
        </div>
    );
}
