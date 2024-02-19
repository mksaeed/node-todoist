import users from '../models/user-model'
import {comparePassword, generateToken} from "../utils/utils";
import {UserData} from "../types/user.interface";

export const login = async (request, response) => {
    try {
        const { email, password } = request.body;

        const user = await users.findOne({ where: { email } });
        if (!user) {
            return response.status(401).json({ status: false, message: 'Invalid credentials' });
        }

        const passwordMatch = await comparePassword(password, user.password);
        if (!passwordMatch) {
            response.status(401).json({ status: false, message: 'Invalid credentials' });
            return;
        }
        let userData: UserData = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.firstName,
            email: user.firstName,
            token: generateToken({ userId: user.id, email: user.email }),
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
        return response.status(200).json({ status: true, data: userData, message: 'Login successful' });
    } catch (error) {
        console.error("login error: ", error);
        return response.status(500).json({ status: false, message: 'Internal Server Error' });
    }

};

export const signUp = (request, response) => {
    console.log('request', request)
    return response.status(200).json({ status: true, data: [], message: 'Login successful' });
}