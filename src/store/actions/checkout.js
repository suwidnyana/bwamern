import { CHECKOUT_BOOKING } from "../types";
import axios from 'config/axios'
export const checkoutBooking =  (payload) => (dispatch) =>  {
    dispatch({
        type: CHECKOUT_BOOKING,
        payload: payload,
    });
};

export const submitBooking =  (payload) => () =>  {
   return axios.post(`/booking-page`,
    payload,
    {header: {contentType: "multipart/form-data"}}
   )
};