import User from '../models/user.model.js';

class UserRepository {
    async createUser(data) {
        return await User.create(data);
    }

    async findAll() {
        return await User.find();
    }

    async findByEmail(email) {
        return await User.findOne({ email });
    }

    async update(id, data) {
        return await User.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        });
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}
export default new UserRepository();