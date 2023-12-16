export interface Competition {
    id: number;
    code: string;
    date: Date;
    startTime: { hours: number, minutes: number };
    endTime: { hours: number, minutes: number };
    totalMember: number;
    location: string;
    amount: number;

    data?: any;
   
  }