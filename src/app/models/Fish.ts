import { Level } from "./Level"; 

export interface Fish {
  id: number;
  name: string;
  averageWeight: number;
  level: {
    id: number;
    description: string;
    points: number;
  };
}