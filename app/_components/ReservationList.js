"use client"
import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";
import {useOptimistic} from "react";

function ReservationList({bookings}) {
    const [optimisiticBookings,optimisiticDelete]=useOptimistic(
        bookings,
        (curBookings,bookingId)=>{
          return curBookings.filter((booking) => 
            booking.id!=bookingId
          )
        }
    );
    
    async function hanldeDelete(bookingId) {
        optimisiticDelete(bookingId);
        await deleteBooking(bookingId);
    }
    return (
        <ul className="space-y-6">
          {optimisiticBookings.map((booking) => (
            <ReservationCard booking={booking} 
            onDelete={hanldeDelete}
            key={booking.id} />
          ))}
        </ul>
    );
}

export default ReservationList
