export const HttpErrorTypes = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  SERVER_ERROR: 'SERVER_ERROR',
  UNVERIFIED: 'UNVERIFIED',
  BAD_REQUEST: 'UNVERIFIED',
  NOT_FOUND: 'NOT_FOUND',
}

function getHttpErrorType(status) {
  if (status === 400) {
    return HttpErrorTypes.BAD_REQUEST;
  }
  if (status === 401) {
    return HttpErrorTypes.UNAUTHORIZED;
  }
  if (status === 403) {
    return HttpErrorTypes.UNVERIFIED;
  }
  if (status === 404) {
    return HttpErrorTypes.NOT_FOUND;
  }
  if (status === 500) {
    return HttpErrorTypes.SERVER_ERROR;
  }
  return HttpErrorTypes.SERVER_ERROR;
}

export class HttpError {
  constructor(errorData) {
    this.status = errorData.status;
    this.type = getHttpErrorType(errorData.status);
    this.data = errorData.data;
  }

  is(httpErrorType) {
    return this.type === httpErrorType;
  }

  getStatus() {
    return this.status;
  }

  getData() {
    return this.data;
  }
}
