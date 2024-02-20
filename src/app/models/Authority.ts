import { AuthorityEnum } from "../enums/AuthorityEnum";
import { Role } from "./Role";


export interface Authority {
  id: number;
  roles: Role[];
  name: AuthorityEnum;
}