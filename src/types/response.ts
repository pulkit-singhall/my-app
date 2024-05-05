export default class ApiResponse{
    success: boolean
    message: string
    status: number
    data: any
    error: any
    constructor(
        status: number,
        success: boolean,
        message: string,
        data: any,
        error?: any
    ) {
        this.success = success
        this.status = status
        this.data = data
        this.message = message
        this.error = error
    }
}