export interface Job {
  id: string;
  business: string;
  job: string;
  description: string;
  city: string;
  startDate: Date;
  endDate: Date;
  isCurrent: boolean;
}
