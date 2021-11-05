export const HandleBookng = () => {
  let AllBookButtons = document.querySelectorAll(".book-btn");
  let AllCancelButtons = document.querySelectorAll(".cancel-button");

  AllBookButtons.forEach((EachBookButton) => {
    EachBookButton.addEventListener("click", BookingFunction);
  });

  AllCancelButtons.forEach((EachCancelButton) => {
    EachCancelButton.addEventListener("click", CancelBooking);
  });
};
const BookingFunction = (e) => {
  let ElementId = e.target.id;
  let GetUniqueId = ElementId.split("-")[1];
  let Element = e.target;
  let CancelButton = document.querySelector(`#cancel-${GetUniqueId}`);
  let BookedButton = document.querySelector(`#booked-${GetUniqueId}`);
  let Seats = document.querySelector(`#seats-${GetUniqueId}`);
  Element.style.display = "none";
  CancelButton.style.display = "block";
  BookedButton.style.display = "block";
  Seats.style.display = "none";
};
const CancelBooking = (e) => {
  let ElementId = e.target.id;
  let GetUniqueId = ElementId.split("-")[1];
  let Element = e.target;
  let BookingButton = document.querySelector(`#book-${GetUniqueId}`);
  let BookedButton = document.querySelector(`#booked-${GetUniqueId}`);
  let Seats = document.querySelector(`#seats-${GetUniqueId}`);
  Element.style.display = "none";
  BookingButton.style.display = "block";
  BookedButton.style.display = "none";
  Seats.style.display = "block";
};
