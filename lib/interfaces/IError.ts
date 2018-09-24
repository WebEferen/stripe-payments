export default interface IError {
  type: string;
  charge: string | null;
  code: string | null;
  decline_code: string | null;
  doc_url: string | null;
  message: string | null;
  param: string | null;
}
