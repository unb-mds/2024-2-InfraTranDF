import FocusService from "../services/FocusService.js";

export default class FocusController {
    constructor() {
        this.focusService = new FocusService();

        this.getMonthlyFocusData = this.getMonthlyFocusData.bind(this);
    }

    async getMonthlyFocusData(req, res) {
        const { month, year } = req.params;

        try {
            const data = await this.focusService.getFocusData(parseInt(month, 10), parseInt(year, 10));
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}