import { Option } from "./option";
export class Questions{
    id:number;
    QuestionText:string;
    options:Option[];
    ans:string;
    selectedOption: string;
    

    constructor(id:number,ques:string,options:Option[],ans:string,selectedOption:string){
        this.id=id;
        this.QuestionText=ques;
        this.options =options;
        this.ans=ans;
        this.selectedOption='';
    }
}