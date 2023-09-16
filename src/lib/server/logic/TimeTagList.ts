export class TimeTagList{

    public static dayOptions:{ [key: string]: Set<number> } = {
        
        "None":new Set([1]),
        "Monday":new Set([1]),
        "Tuesday":new Set([2]),
        "Wednesday":new Set([3]),
        "Thrusday":new Set([4]),
        "Friday":new Set([5]),
        "Saturday":new Set([6]),
        "Sunday":new Set([0]),
        'Weekday':new Set([1,2,3,4,5]),
		'Weekend':new Set([0,6]),
		'Workday':new Set([1,2,3,4,5]),
        'Everyday':new Set([0,1,2,3,4,5,6])


    };

    public dayList:string[]=[];
    public dayListasnumber:number[]=[];


    constructor(daylist:string[]){

        this.dayList=daylist;

        let mergedSet: Set<number> = new Set();

        for(const day of daylist){

            mergedSet= new Set([...mergedSet, ...TimeTagList.dayOptions[day]]);
        }

        this.dayListasnumber=[...mergedSet];
    }


}