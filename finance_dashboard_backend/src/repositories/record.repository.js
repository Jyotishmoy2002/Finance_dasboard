import Record from '../models/record.model.js';
class RecordRepository {
    async createRecord(data) {
        return await Record.create(data);
    }

    async findAll(filters = {}) {
        return await Record.find(filters).sort({ date: -1 });
    }

    async findById(id) {
        return await Record.findById(id);
    }

    async update(id, data) {
        return await Record.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        });
    }

    async delete(id) {
        return await Record.findByIdAndDelete(id);
    }

    async aggregate(pipeline) {
        return await Record.aggregate(pipeline);
    }
}

export default new RecordRepository();