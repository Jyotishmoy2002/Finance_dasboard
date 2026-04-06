import recordService from "../services/record.service.js";
class RecordController {
    async createRecord(req, res, next) {
        try {
            const record = await recordService.createRecord({
                ...req.body,
                userId: req.user.id
            });
            res.status(201).json({ success: true, data: record });
        } catch (error) {
            next(error);
        }
    }
    async getRecords(req, res, next) {
        try {
            const filters = req.query;
            const records = await recordService.getRecords(filters);
            res.status(200).json({ success: true, data: records });
        } catch (error) {
            next(error);
        }
    }
    async getRecordById(req, res, next) {
        try {
            const record = await recordService.getRecordById(req.params.id);
            res.status(200).json({ success: true, data: record });
        } catch (error) {
            next(error);
        }
    }
    async updateRecord(req, res, next) {
        try {
            const record = await recordService.updateRecord(req.params.id, req.body);
            res.status(200).json({ success: true, data: record });
        } catch (error) {
            next(error);
        }
    }
    async deleteRecord(req, res, next) {
        try {
            const record = await recordService.deleteRecord(req.params.id);
            res.status(200).json({ success: true, data: record });
        } catch (error) {
            next(error);
        }
    }
}
export default new RecordController();