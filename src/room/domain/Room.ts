export class Room {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly user_id: number,
        readonly created_by: string,
        readonly updated_at: string,
        readonly deleted_at: string,
        readonly deleted_by: string,
    ) {}
}