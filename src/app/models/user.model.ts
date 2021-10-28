import { environment } from "src/environments/environment";

const base_url = environment.base_url;

export class User {

    constructor ( 
        public name: string, 
        public email: string,
        public password: string,
        public country: string,
        public timeZone: string,
        public language: string,
        public google?: boolean,
        public uid?: string,
    ) { }
}