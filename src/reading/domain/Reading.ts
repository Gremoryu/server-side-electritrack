export class Reading {
    constructor(
        readonly id: number,
        readonly power_usage: number,
        readonly room_id: number,
        readonly updated_at: string,
    ) {}
}