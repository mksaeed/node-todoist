interface User {
    id: string;
    username: string;
    password: string;
    role: 'Admin' | 'Client';
}

interface LoginRequest { body: { email: string; password: string; }; }

export interface UserData {
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "token": string,
    "role": string,
    "createdAt": string,
    "updatedAt": string
}