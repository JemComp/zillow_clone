# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(email: 'demo@login.com',  password: '123456')

# "address"
# "zip_code", 
# "city"
# "state"
# "lat"
# "lng"
# "beds"
# "baths"
# "sqft"
# "price"
# "description"


listing1 = Listing.create(
    address: "1140 Miller Ave",
    zip_code: 94080,
    city: "South San Francisco",
    state: "CA",
    lat: 37.66385274501688, lng: -122.4351120016871,
    beds: 4,
    baths: 2,
    sqft: 2000,
    price: 1495000,
    description: "Centrally located in Sunshine Gardens, this traditional home is convenient to everything. "
)

listing2 = Listing.create(
    address: "985 Monterey Blvd",
    zip_code: 94127,
    city: "San Francisco",
    state: "CA",
    lat:  37.73066723161403, lng: -122.45876887284979,
    beds: 4,
    baths: 2,
    sqft: 2056,
    price: 1999000,
    description: "This gorgeous remodeled 4 bedroom, two bath home features an open floor plan which allows for easy indoor/outdoor living and entertaining. No expenses were spared in this beautiful design! "
)

listing3 = Listing.create(
    address: "1371 6th Ave",
    zip_code: 94122,
    city: "San Francisco",
    state: "CA",
    lat:  37.762999186897474, lng: -122.46331907470041,
    beds: 5,
    baths: 4,
    sqft: 2620,
    price: 2595000,
    description: "Located on coveted 6th Avenue in the Inner Sunset, this three level home has the floor plan, space and character that you have been looking for."
)

listing4 = Listing.create(
    address: "230 Northwood Dr",
    zip_code: 94080,
    city: "South San Francisco",
    state: "CA",
    lat:  37.64083864178106, lng: -122.43134098545676,
    beds: 3,
    baths: 2,
    sqft: 1200,
    price: 1498000,
    description: "This is Brentwood's show place home located on a flat lot. Crafted w/ brand-name features and amenities."
),

listing5 = Listing.create(
    address: "2660 Scott St",
    zip_code: 94123,
    city: "San Francisco",
    state: "CA",
    lat:  37.79463718497679, lng: -122.43965831530667,
    beds: 7,
    baths: 7,
    sqft: 9190,
    price: 17500000,
    description: "This Beaux Arts-era masterpiece from the early 20th Century has been seamlessly transformed into a stunning contemporary residence with beautiful transitional finishes"
)

listing6 = Listing.create(
    address: "624 Haight Ave #A",
    zip_code: 94501,
    city: "Alameda",
    state: "CA",
    lat: 37.774127907764424, lng: -122.27830333065265,
    beds: 1,
    baths: 1,
    sqft: 664,
    price: 695000,
    description: "Sitting in the heart of Alameda’s vibrant West End neighborhood, this bright and airy cottage is in a great location!"
)

listing7 = Listing.create(
    address: "44 newBurg St",
    zip_code: 94131,
    city: "San Francisco",
    state: "CA",
    lat: 37.74621513406561, lng: -122.43451074599876,
    beds: 3,
    baths: 2,
    sqft: 1482,
    price: 1695000,
    description: "Located near Castro/27th & perched above the busy part of Noe Valley w/ views downtown"
)

listing8 = Listing.create(
    address: "23026 Voss Ave",
    zip_code: 95014,
    city: "Cupertino",
    state: "CA",
    lat: 37.31944529367376, lng: -122.07957155949849,
    beds: 4,
    baths: 4,
    sqft: 3125,
    price: 4948900,
    description: "Unbeatable hilltop location with spectacular panoramic views of Silicon Valley, yet just minutes away from the Apple Park, schools, shops and downtown"
)

listing9 = Listing.create(
    address: "35 W Loop",
    zip_code: 93637,
    city: "Madera",
    state: "CA",
    lat: 36.973766807654684, lng: -120.09126881532377,
    beds: 3,
    baths: 3,
    sqft: 33311,
    price: 724950,
    description: "Unbeatable hilltop location with spectacular panoramic views of Silicon Valley, yet just minutes away from the Apple Park, schools, shops and downtown"
)

listing10 = Listing.create(
    address: "1909 Locust Ave",
    zip_code: 90806,
    city: "Long Beach",
    state: "CA",
    lat: 33.79212824185429, lng: -118.19128733073154,
    beds: 2,
    baths: 2,
    sqft: 741,
    price: 540000,
    description: "Welcome to your very own 2bed, 1.5 bath home located in the friendly Wrigley neighborhood of Long Beach."
)





