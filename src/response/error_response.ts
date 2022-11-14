export default class ErrorResponse {
  constructor(public message: string, public code: string, public trace: any){}
}
