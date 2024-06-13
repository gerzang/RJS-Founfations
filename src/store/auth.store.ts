import { create } from "zustand";



interface AuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: {
        email: string;
        name: string;
    };
    login: (email: string, password: string) => void;
    logout: () => void;
}


export const useAuthStore = create<AuthState>()(
    (set) => ({
        status: 'checking',
        token: undefined,
        user: undefined,
        login: (email: string, password: string) => {
            set({ 
                status: 'authenticated', 
                token: '123456', 
                user: { 
                    email, 
                    name: 'John Doe'
                }
            })
         },
        logout: () => { 
            set({ 
                status: 'unauthenticated', 
                token: undefined,
                user: undefined
             })

        }
    }
    )
)