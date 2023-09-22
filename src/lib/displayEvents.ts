import type { RequestHandler } from "@sveltejs/kit";
import {TimeEvent} from "/Users/spour/Documents/Projects/Web Projects/neatCalendar/neatCalendar/src/lib/server/logic/TimeEvents"


const eventone=new TimeEvent("Match1","Good Match1",new Date("2023-09-10") ,[], false);
const eventtwo=new TimeEvent("Match2","Good Match2",new Date("2023-09-11") ,[], false);
const eventthree=new TimeEvent("Match3","Good Match3",new Date("2023-09-12") ,[], false);
const eventfour=new TimeEvent("Match4","Good Match4",new Date("2023-09-13") ,[], false);
const eventfive=new TimeEvent("Match5","Good Match5",new Date("2023-09-14") ,[], false);

export const GET:RequestHandler=async()=>{





    
}


