import { User } from "./User";


export class Report {
    _id?:String;
    content: String;
	mail?: String;
    owner?: User;
	date: Date;
	accepted: boolean;
    constructor(id: String, content: String, mail: String, owner: User, date: Date, accepted:boolean){
        this._id=id;
        this.content=content;
        this.mail=mail;
        this.owner = owner;
        this.date = date;
        this.accepted =accepted;
    }
}