export interface Computer {
  id?: string;
  name: string;
  property: string;
  identifier: number;
  purchaseData: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ResponseData {
  data: Computer[];
  error?: string;
}
