'use client';

import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UserPage() {
    const { user, role } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || role !== 'user') {
            router.replace('/login');
        }
    }, [user, role, router]);

    if (!user || role !== 'user') return null;

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Welcome, User!
                </h1>
                <p className="text-gray-700">You are logged in as <strong>{user}</strong></p>
            </div>
        </div>
    );
}
