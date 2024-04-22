export interface RateLimitRepository {
  createLimit(config: {}): Promise<any>;
}
