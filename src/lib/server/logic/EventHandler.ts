import type {TimeEvent} from "/Users/spour/Documents/Projects/Web Projects/neatCalendar/neatCalendar/src/lib/server/logic/TimeEvents"
 

class EventHandler{

    private userEvents: TimeEvent[]=[];

    private eventPriorityQueue:Array<[Date, TimeEvent,number]> = [];


    enqueue(date: Date, item: TimeEvent, instanceNumber:number): void {
        this.eventPriorityQueue.push([date, item, instanceNumber]);
        this.eventPriorityQueue.sort((a, b) => a[0].getTime() - b[0].getTime());
      }
    
      // Remove and return the item with the highest priority (earliest date).
    dequeue(): [Date, TimeEvent,number] | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
        
        let [date, event, instanceNumber] = this.eventPriorityQueue.shift()!;

        let nextEventDate=event.generateInstance(instanceNumber);
        if(nextEventDate != null){

          this.enqueue(nextEventDate, event, instanceNumber);

        }
        
        return [date, event, instanceNumber]
      }


    
    isEmpty(): boolean {
      return this.eventPriorityQueue.length === 0;
    }


}