import {TimeTagList} from "/Users/spour/Documents/Projects/Web Projects/neatCalendar/neatCalendar/src/lib/server/logic/TimeTagList";



export class TimeEvent {
    //character variables
    public name: string;
    public description: string;
    private id: number;
    private tagsList: Tag[]=[];
    private idcount=0;


    //time variables
    private initialDate: Date;
    private repetable: boolean;
    private repeatedDay:TimeTagList=new TimeTagList(["None"]);
    private spacedType:string="Days";
    private spacedDuration:number=1;
    private dueDate:Date;
    
    

    constructor(name: string, description: string, initialDate: Date,tagsList:Tag[], repetable:boolean) {
        this.name = name;
        this.description = description;
        this.id = this.generateID(name,initialDate.toString());
        
        this.tagsList=tagsList;
        this.initialDate = initialDate;
        this.repetable=repetable;
        this.dueDate=initialDate;
    }

    updateParameters(name: string, description: string, initialDate: Date,tagsList:Tag[], repetable:boolean,
        repeatedDay:TimeTagList,spacedType:string,spacedDuration:number, dueDate:Date ){
        
        this.name=name;
        this.description=description;
        this.tagsList=tagsList;
        this.initialDate=initialDate;
        this.repetable=repetable;
        this.repeatedDay=repeatedDay;
        this.spacedType=spacedType;
        this.spacedDuration=spacedDuration;
        this.dueDate=dueDate;
        


    }
    readParameters(){

        const parameteresDictionary:{[key: string]: any}={

            name:this.name,
            description:this.description,
            tagsList:this.tagsList,
            initialDate:this.initialDate,
            repetable:this.repetable,
            repeatedDay:this.repeatedDay,
            spacedType:this.spacedType,
            spacedDuration:this.spacedDuration,
            dueDate:this.dueDate
        }
        return parameteresDictionary
    }

    getID(){
        return this.id;
    }

    updateTag(flag:string,tag:Tag){
        if(flag=="add"){
            this.tagsList.push(tag);
        
        } else{
            const index = this.tagsList.indexOf(tag);
            if (index !== -1) {
                this.tagsList.slice(index,1);
            }
        } 
    }
    private generateID(name:string,dateStr:string){
        
        const keystring=name+dateStr;
        let keyvalue:number=0;
        for (let i = 0; i < keystring.length; i++) {
            const charCode: number = keystring.charCodeAt(i);
            keyvalue += charCode;
        }

        return keyvalue

    }
    generateInstance(sequenceNumber:number):Date | null{
        
        
        if(this.repetable){

            return null;

        }
        
        let instancedate:Date;

        
        let nextEventDate:Date= new Date (this.initialDate.getTime()+86400000)

        
        return nextEventDate;


    }


}