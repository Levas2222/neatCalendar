class Tag {
    private name: string;
    private observers: TimeEvent[] = [];
    private user:User;

    constructor(name: string, user:User) {
        this.name = name;
        this.user= user;
        user.addTag(this);
    }

    attach(observer: TimeEvent): void {
        this.observers.push(observer);
        observer.updateTag("add",this);
    }

    detach(observer: TimeEvent): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
            observer.updateTag("remove",this);
        }
        if (this.observers.length===0)
            this.user.deleteTag(this)
    }
    
    /*
    notify(event: string): void {
        for (const observer of this.observers) {
            observer.updateTag(event, this);
        }
    }
    */
}