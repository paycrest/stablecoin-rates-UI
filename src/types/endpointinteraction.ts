export interface EndpointInteractionProps {
  title: string;
  description: string;
  endpoint: string;
  method: string;
  example: string;
  successData: Object;
  errorData: Object;
  params: Record<string, string>;
}
