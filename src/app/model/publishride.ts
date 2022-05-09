export class Publishride {
    constructor(public publisherId?:string, public fromId?:string, public toId?:string, public rideDate?:string, public seatAvailable?:number,public distance?:number,public totalAmount?:number,public amountPerPerson?:number,public isBooked?:boolean,public isCancelled?:boolean,public ridePublishDate?:Date,public feedback?:string,public rating?:number,public otp?:any,public isRideStarted?:boolean,request?:any,public msgForBooker?:string){}
}
