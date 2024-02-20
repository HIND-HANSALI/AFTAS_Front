import { AuthorityEnum } from "src/app/enums/AuthorityEnum";

export interface RoleResponseDTO {
    name: string;
    authorities: AuthorityEnum[];
    isDefault: boolean;
}