'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Role = 'admin' | 'user';
type NullableRole = Role | null;

interface AuthContextType {
    user: string | null;
    role: NullableRole;
    login: (username: string, role: Role) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const [role, setRole] = useState<NullableRole>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedRole = localStorage.getItem('role');

        // Validate if storedRole is either 'admin' or 'user'
        const isValidRole = (value: string | null): value is Role =>
            value === 'admin' || value === 'user';

        if (storedUser && isValidRole(storedRole)) {
            setUser(storedUser);
            setRole(storedRole);
        }
    }, []);

    const login = (username: string, role: Role) => {
        setUser(username);
        setRole(role);
        localStorage.setItem('user', username);
        localStorage.setItem('role', role);
    };

    const logout = () => {
        setUser(null);
        setRole(null);
        localStorage.removeItem('user');
        localStorage.removeItem('role');
    };

    return (
        <AuthContext.Provider value={{ user, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
