import { DriverInterface } from "./Driver";
import { RiderInterface } from "./Rider";
import { RideTypeInterface } from "./RideType";
import { TripInterface } from "./Trip";

export interface AdminAllData {
    riders:RiderInterface[],
    drivers:DriverInterface[],
    trips:TripInterface[],
    rideTypes:RideTypeInterface[]
}