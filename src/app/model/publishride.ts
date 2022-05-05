export class Publishride {
    constructor(public publisherId?:string, public fromId?:string, public toId?:string, public rideDate?:Date, public rideTime?:Date, public seatAvailable?:number,public distance?:number,public totalAmount?:number,public amountPerPerson?:number,public isBooked?:boolean,public isTimeExpired?:boolean,public isCancelled?:boolean,public ridePublishDate?:Date,public feedback?:string,public rate?:number,public otp?:number,public isRideStarted?:boolean,request?:any,public msgForBooker?:string,createdAt?:string,public updatedAt?:string){}
}
