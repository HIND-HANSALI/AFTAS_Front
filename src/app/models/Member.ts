import { IdentityDocumentType } from "./IdentityDocumentType"; 

export interface Member {
    id:number;
    membershipNumber: number;
    name: string;
    familyName: string;
    accessDate: Date;
    nationality: string;
    identityDocumentType: IdentityDocumentType;
    identityNumber: string;
  }
  