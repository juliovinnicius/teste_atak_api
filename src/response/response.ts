import ErrorResponse from './error_response';

export default class Response {
  body: any;
  status!: number;
  successful!: boolean;
  error?: ErrorResponse;

  public static success(body: any, status: number){
    const response = new Response();
    
    response.body = body;
    response.status = status;
    response.successful = true;
    response.error = undefined;

    return response;
  }

  public static error(message: string, code: string, trace: any, status: number){
    const response = new Response();
    const error = new ErrorResponse(message, code, trace);
    response.error = error;
    response.status = status;
    response.successful = false;
    response.body = null;
    
    return response;
  }
}
