class TimeEvent {
    private name: string;
    private description: string;
    private id: string;
    private tagsList: Tag[]=[];


    //time variables
    private initialDate: Date;
    private repetable: boolean;


    constructor(name: string, description: string, initialDate: Date, repetable:boolean) {
        this.name = name;
        this.description = description;
        this.id = "none";
        
        this.initialDate = initialDate;
        this.repetable=repetable;
    }
    updateTag(flag:string,tag:Tag){
        if(flag=="add"){
            this.tagsList.push(tag);
        
        }
        else{
            
            const index = this.tagsList.indexOf(tag);
            if (index !== -1) {
                this.tagsList.slice(index,1);
        }

        }
        

    }
}