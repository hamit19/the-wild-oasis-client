export type filterType = "small" | "medium" | "large" | "all";

export type guestType = {
  guestId: string;
  nationality: string;
  nationalID: string;
  countryFlag: string;
  fullName: string;
  email: string;
};

export type Booking = {
  id?: number;
  guestId?: number;
  cabinId?: number;
  startDate?: Date;
  endDate?: Date;
  numNights?: number;
  totalPrice?: number;
  numGuests?: number;
  created_at?: string;
  observations?: string;
  cabins?: { name: string; image: string }[];
};

export interface ReservationCardProps {
  booking: Booking;
  onDelete: (bookingId: string) => void;
}

export interface ReservationDeleteProps {
  bookingId: string;
  onDelete: (bookingId: string) => void;
}

export type getCountryType = {
  name: string;
  flag: string;
  independent: boolean;
};

export type Settings = {
  id: number;
  created_at: string;
  minBookingLength: number;
  maxBookingLength: number;
  maxGustesPerBooking: number;
  breakfastPrice: number;
};

export type Cabin = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description?: string;
  image: string;
};

export type DateSelectorPropsTypes = {
  settings: {
    minBookingLength: number;
    maxBookingLength: number;
  };
  bookedDates: Date[];
  cabin: Cabin;
};

export type EditReservationFormProps = {
  maxCapacity?: number;
  bookingId?: string;
  numGuests?: number;
  observations?: string;
};

export type CabinPrice = {
  regularPrice: number;
  discount: number;
};

export type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
};
