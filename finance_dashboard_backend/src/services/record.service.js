import recordRepository from "../repositories/record.repository.js";
class RecordService {
    async createRecord(data) {
        const record = await recordRepository.createRecord(data);
        return record;
    }
    async getRecords(filters) {
        const records = await recordRepository.find(filters);
        return records;
    }
    async getRecordById(id) {
        const record = await recordRepository.findById(id);
        if (!record) {
            throw new Error("Record not found");
        }
        return record;
    }
    async updateRecord(id, data) {
        const record = await recordRepository.update(id, data);
        if (!record) {
            throw new Error("Record not found");
        }
        return record;
    }
    async deleteRecord(id) {
        const record = await recordRepository.delete(id);
        if (!record) {
            throw new Error("Record not found");
        }
        return record;
    }
}

export default new RecordService();