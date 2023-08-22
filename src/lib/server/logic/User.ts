class User {
    private username: string;
    private email: string;

    private userTags:Tag[]=[];
    
    

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
        
    }
    addTag(tag:Tag){
        this.userTags.push(tag)

    }
    deleteTag(tag:Tag){
        const index = this.userTags.indexOf(tag);
        if (index !== -1) {
            this.userTags.slice(index,1);

        }

    }


}
//add user date , user events, user tags
//import username,mail,authenticate passwords
//import timeevents={id,name,description,timecode,[tags]}
//create timeevents object create tags object if unique