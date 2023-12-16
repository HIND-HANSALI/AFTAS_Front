import { Competition } from './Competition'; 
import { Member } from './Member'; 

export interface Ranking {
  id: number;
  competitionId: number;
  memberId: number;

  //   rank: number;
//   score: number;
}