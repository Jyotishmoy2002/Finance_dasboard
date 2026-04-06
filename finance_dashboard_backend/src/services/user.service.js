import userRepository from "../repositories/user.repository.js";

class UserService {
    async createUser(data) {
        const user = await userRepository.createUser(data);
        return user;
    }
    async getAllUsers() {
        const users = await userRepository.findAll();
        return users;
    }
    async getUserById(id) {
        const user = await userRepository.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    async updateUser(id, data) {
        const user = await userRepository.update(id, data);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    async deleteUser(id) {
        const user = await userRepository.delete(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    async updateUserRole(id, role) {
        const user = await userRepository.update(id, { role });
    }
    async updateUserStatus(id, status) {
        const user = await userRepository.update(id, { status });
    }
}

export default new UserService();