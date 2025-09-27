import { editUser, findUserByRefreshToken } from "../../user/user.repository.js";

export const deleteRefreshToken = async (refreshToken) => {
    try {
        let userData = await findUserByRefreshToken(refreshToken);
        if (!userData) {
			throw new Error(204)
        }
        const { id } = userData
        await editUser(id, { refreshToken: null })
        return true
    } catch (error) {
        throw new Error(error.message)
    }
}