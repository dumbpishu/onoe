export class ApiResponse {
    constructor(statusCode, message = "Success", data = null) {
        this.statusCode = statusCode;
        this.message = message;
        if (data !== null) {
            this.data = data;
        }
        this.success = statusCode >= 200 && statusCode < 300;
    }
}