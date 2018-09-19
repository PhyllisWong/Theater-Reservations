// Session model from the tutorial
const sessionSchema = {
  _id : String,
  theaterId : Number,
  name : String,
  description : String,
  start : ISODate(),
  end : ISODate(),
  price : Number,
  seatsAvailable : Number,
  seats : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
   [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
  reservations : [ {
      _id: String,
        seats: [ [ Number, Number ] ],
      price : Number,
      total : Number
  }] // <-------------- ends reservations
}
