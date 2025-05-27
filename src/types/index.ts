export interface Computer {
  id?: number;
  name: string;
  property: string;
  identifier: number;
  purchaseData: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ResponseData {
  data: Computer[];
  error?: string;
}
