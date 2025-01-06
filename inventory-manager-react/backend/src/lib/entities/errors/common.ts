export class DatabaseOperationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class InputParseError extends Error {
  constructor(message: string) {
    super(message);
  }
}
