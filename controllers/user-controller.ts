import users from '../models/user-model'
import bcrypt from 'bcrypt';

export const signUp = async (request, response) => {

    const {firstName, lastName, email, password, inviteToken} = request.body;
    const user = await users.findOne({ where: { email: email, invites: inviteToken } })
    if (user) {
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

       await users.update({
            firstName,
            lastName,
            email,
            password: hashPassword,
           invites: "",
        }, {where: {id: user.id}})
        return response.status(200).send({status: true, data: user, message: 'User Successfully Registered'});
    } else {
        return  response.status(401).send({status: true, message: 'Invalid Invitation Token'});
    }
}

export const sendInvite = async (request, response) => {

    const { adminId, email } = request.body;
    const adminUser = users.findOne({ where: { id: adminId, role: 'admin' } })

    if (adminUser) {
        const inviteToken = generateInviteToken();

        users.create({
            invites: inviteToken,
            email: email,
            role: 'client'
        });

        response.status(200).send({status: true, data: inviteToken, message: 'Invite Sent Successfully'});
    } else {
        response.status(401).send({status: true, data: "", message: 'User Doesn\'t have permission '});
    }
}

const generateInviteToken = (): string => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};