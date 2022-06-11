import { Cuisine } from './cuisine';
import { User } from './user';
// import { ENDays, ARDays } from './';

export class Restaurant {
  constructor(
    private id: number,
    private name: string,
    private priceRange: string,
    private workingHrs: WorkingHours[],
    private availability: Availability,

    private mainImgSrc?: string,
    private coverImgSrc?: string,
    private viewImgsSrc?: string[],
    private cuisines?: Cuisine[],
    private addressCity?: string,
    private area?: string,
    private avgRating?: number,
    private isRecomm?: boolean,
    private description?: string,
    private distance?: number,
    private dressCode?: DressCode,
    private latitude?: number,
    private longitude?: number,
    private parking?: boolean,
    private phoneNum?: number,
    private tags?: Tag[],
    private hasTakeAway?: boolean,
    private reviews?: Review[]
  ) {}
}

class Review {
  constructor(
    private date: Date,
    private userInfo: User,

    private food?: number,
    private service?: number,
    private ambience?: number,
    private price?: number,
    private overallAvg?: number,
    private reviewText?: string,
    private rateImgSrc?: string
  ) {}
}

class Availability {
  constructor(
    private floors: Floor[],
    private hours: number[],
    private hasNextDay: boolean,
    private hasWaiting: boolean
  ) {}
}

class Floor {
  constructor(
    private id: number,
    private name: string,
    private slots: Slot[]
  ) {}
}

class Slot {
  constructor(
    private chairs: number,
    private price: number,
    private times: Time[]
  ) {}
}

class Time {
  constructor(
    private available: number,
    private floorId: number,
    private floorName: string,
    private hasPayment: boolean,
    private price: number,
    private time: Date
  ) {}
}

interface DressCode {
  id: number;
  name: string;
  data?: string;
}

interface Tag {
  id: number;
  name?: string;
  imgSrc: string;
}

interface WorkingHours {
  // days: enums...
  days: string;
  shifts?: string;
  startTime?: string;
  timeRange: Date[];
}
