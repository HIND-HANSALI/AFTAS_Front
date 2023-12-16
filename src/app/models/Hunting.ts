import { Member } from "./Member"; 
import { Competition } from "./Competition";
import { Fish } from "./Fish";

export interface Hunting {
  id: number;
  numberOfFish: number;
  averageWeight: number;
  competitionId: number;
  memberId: number;
  fishId: number;

  
  // Relationships
  // member?: Member;
  // competition?: Competition;
  // fish?: Fish;
  
}