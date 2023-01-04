import { UserProfile } from "./user-profile";

export class UserAccount {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    cellNumber:string;
    userName: string;
    dateCreated: string;
    profiles: UserProfile[];

}
