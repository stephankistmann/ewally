export default class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly name: string;

  constructor(message: string, statusCode: number, name: string) {
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}
