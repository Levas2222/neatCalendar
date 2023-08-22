class TimeEvent {
    private name: string;
    private description: string;
    private id: number;
    const private tagsList: Tag[];
    private initialDate: Date;

    constructor(name: string, description: string, id: number, initialDate: Date) {
        this.name = name;
        this.description = description;
        this.id = id;
        
        this.initialDate = initialDate;
    }
}