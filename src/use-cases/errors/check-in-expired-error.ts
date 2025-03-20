export class CheckInExpiredError extends Error {
  constructor() {
    super('The check-in is expired!')
  }
}
