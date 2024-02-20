export class User {
  constructor(
    readonly id: number,
    readonly user: string,
    readonly password: string,
    readonly created_at: string,
    readonly updated_at: string,
    readonly deleted_at: string,
    readonly deleted_by: string,
    readonly deleted: number,
  ) {}
}