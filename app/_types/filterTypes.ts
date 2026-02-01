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
  id: number;
  guestId: number;
  cabinId: number;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  created_at: string;
  cabins: { name: string; image: string }[];
};
