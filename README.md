## Notes for Theater Reservation App
There will be a Theater Model with:
* name
* seats
* seatsAvailable


Cart is another Model for a reservation Schema
* state
* total
* reservations
* modifiedOn
* createdOn


Seats are an array [row, seat]
Sessions are another model

## Operations are basically the routes
Add a new session
Reserve seats in a session
Add reservation to the cart
Release all the reservations for a cart
Create receipt
Commit session reservations
Mark cart as done
Expiring shopping carts
Create the state field index for the carts
Create the reservations._id field index


### Editing for show
