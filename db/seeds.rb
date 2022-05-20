# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Listing.destroy_all 
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('listings')



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

User.create(email: 'aggie@login.com',  password: '123456')
User.create(email: 'vince@login.com',  password: '123456')
User.create(email: 'rosy@login.com',  password: '123456')
User.create(email: 'dom@login.com',  password: '123456')
User.create(email: 'benson@login.com',  password: '123456')
User.create(email: 'knox@login.com',  password: '123456')
User.create(email: 'violet@login.com',  password: '123456')
User.create(email: 'inez@login.com',  password: '123456')
User.create(email: 'herrison@login.com',  password: '123456')
User.create(email: 'darcey@login.com',  password: '123456')
User.create(email: 'jean@login.com',  password: '123456')





listing1 = Listing.create(
    user_id: 1,
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
listing1.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing1/listing01_01.png"), filename:'listing01_01.png')
listing1.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing1/listing01_02.png"), filename:'listing01_02.png')
listing1.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing1/listing01_03.png"), filename:'listing01_03.png')
listing1.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing1/listing01_04.png"), filename:'listing01_04.png')



listing2 = Listing.create(
    user_id: 2,
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
listing2.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing2/listing02_01.png"), filename:'listing02_01.png')
listing2.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing2/listing02_02.png"), filename:'listing02_02.png')
listing2.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing2/listing02_03.png"), filename:'listing02_03.png')
listing2.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing2/listing02_04.png"), filename:'listing02_04.png')
listing2.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing2/listing02_05.png"), filename:'listing02_05.png')



listing3 = Listing.create(
    user_id: 3,
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

listing3.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing3/listing03_01.png"), filename:'listing03_01.png')
listing3.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing3/listing03_02.png"), filename:'listing03_02.png')
# listing3.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing3/listing03_03.png"), filename:'listing03_03.png')
listing3.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing3/listing03_04.png"), filename:'listing03_04.png')
listing3.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing3/listing03_05.png"), filename:'listing03_05.png')
listing3.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing3/listing03_06.png"), filename:'listing03_06.png')


listing4 = Listing.create(
    user_id: 3,
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
)
listing4.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing4/listing04_01.png"), filename:'listing04_01.png')
listing4.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing4/listing04_02.png"), filename:'listing04_02.png')
listing4.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing4/listing04_03.png"), filename:'listing04_03.png')
listing4.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing4/listing04_04.png"), filename:'listing04_04.png')


listing5 = Listing.create(
    user_id: 4,
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
listing5.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing5/listing05_01.png"), filename:'listing05_01.png')
listing5.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing5/listing05_02.png"), filename:'listing05_02.png')
listing5.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing5/listing05_03.png"), filename:'listing05_03.png')
listing5.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing5/listing05_04.png"), filename:'listing05_04.png')
listing5.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing5/listing05_05.png"), filename:'listing05_05.png')


listing6 = Listing.create(
    user_id: 4,
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
listing6.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing6/listing06_01.png"), filename:'listing04_01.png')
listing6.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing6/listing06_02.png"), filename:'listing04_02.png')
listing6.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing6/listing06_03.png"), filename:'listing04_03.png')
listing6.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing6/listing06_04.png"), filename:'listing04_04.png')

listing7 = Listing.create(
    user_id: 5,
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
listing7.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing7/listing07_01.png"), filename:'listing07_01.png')
listing7.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing7/listing07_02.png"), filename:'listing07_02.png')
listing7.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing7/listing07_03.png"), filename:'listing07_03.png')
listing7.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing7/listing7_04.png"), filename:'listing7_04.png')

listing8 = Listing.create(
    user_id: 5,
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
listing8.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing8/listing08_01.png"), filename:'listing08_01.png')
listing8.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing8/listing08_02.png"), filename:'listing08_02.png')
listing8.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing8/listing08_03.png"), filename:'listing08_03.png')
listing8.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing8/listing08_04.png"), filename:'listing08_04.png')

listing9 = Listing.create(
    user_id: 6,
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
listing9.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing9/listing09_01.png"), filename:'listing09_01.png')
listing9.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing9/listing09_02.png"), filename:'listing09_02.png')
listing9.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing9/listing09_03.png"), filename:'listing09_03.png')
listing9.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing9/listing09_04.png"), filename:'listing09_04.png')

listing10 = Listing.create(
    user_id: 6,
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
listing10.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing10/listing10_01.png"), filename:'listing10_01.png')
listing10.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing10/listing10_02.png"), filename:'listing10_02.png')
listing10.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing10/listing10_03.png"), filename:'listing10_03.png')
listing10.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing10/listing10_04.png"), filename:'listing10_04.png')

listing11 = Listing.create(
    user_id: 7,
    address: "7868 Electra Dr",
    zip_code: 90046,
    city: "Los Angeles",
    state: "CA",
    lat: 34.10704793228383, lng: -118.36421374594264,
    beds: 4,
    baths: 4,
    sqft: 4173,
    price: 4999999,
    description: "Magnificent recently remodeled modern home situated in the exclusive Hollywood Hills community of Mount Olympus defines the ultimate entertainer's lifestyle. "
)
listing11.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing11/listing11_01.png"), filename:'listing11_01.png')
listing11.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing11/listing11_02.png"), filename:'listing11_02.png')
listing11.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing11/listing11_03.png"), filename:'listing11_03.png')
listing11.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing11/listing11_04.png"), filename:'listing11_04.png')
listing11.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing11/listing11_05.png"), filename:'listing11_05.png')

listing12 = Listing.create(
    user_id: 7,
    address: "26103 Emerald Ct",
    zip_code: 91381,
    city: "Valencia",
    state: "CA",
    lat: 34.4066369277601, lng: -118.59248064593658,
    beds: 6,
    baths: 5,
    sqft: 43866,
    price: 1850000,
    description: "Phenomenal FORMER MODEL Home sits in a quiet Cul-De-Sac serenely, nestled inside scenic Westridge area."
)
listing12.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing12/listing12_01.png"), filename:'listing12_01.png')
listing12.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing12/listing12_02.png"), filename:'listing12_02.png')
listing12.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing12/listing12_03.png"), filename:'listing12_03.png')
listing12.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing12/listing12_04.png"), filename:'listing12_04.png')
listing12.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing12/listing12_05.png"), filename:'listing12_05.png')



listing13 = Listing.create(
    user_id: 8,
    address: "9442 Cross Fox Way",
    zip_code: 95758,
    city: "Elk Grove",
    state: "CA",
    lat: 38.41483754618444, lng: -121.39419160365746,
    beds: 3,
    baths: 3,
    sqft: 1385,
    price: 1850000,
    description: "Welcome to this 2 story 3 bedroom, 2.5 bathroom home for sale in Elk Grove. "
)
listing13.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing13/listing13_01.png"), filename:'listing13_01.png')
listing13.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing13/listing13_02.png"), filename:'listing13_02.png')
listing13.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing13/listing13_03.png"), filename:'listing13_03.png')
listing13.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing13/listing13_04.png"), filename:'listing13_04.png')
listing13.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing13/listing13_05.png"), filename:'listing13_05.png')


listing14 = Listing.create(
    user_id: 8,
    address: "12659 Casa bonita PI",    
    zip_code: 92392,
    city: "Victorville",
    state: "CA",
    lat: 34.492739735470785, lng: -117.38731608839113,
    beds: 5,
    baths: 4,
    sqft: 3256,
    price: 499900,
    description: "Beautiful 5 bedroom, 3.5 bathroom, 2 story home with lots of natural light in the community of Victorville!"
)
listing14.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing14/listing14_01.png"), filename:'listing14_01.png')
listing14.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing14/listing14_02.png"), filename:'listing14_02.png')
listing14.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing14/listing14_03.png"), filename:'listing14_03.png')
listing14.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing14/listing14_04.png"), filename:'listing14_04.png')


listing15 = Listing.create(
    user_id: 9,
    address: "693 Barret Ave",
    zip_code: 95037,
    city: "Morgan Hill",
    state: "CA",
    lat: 37.12185092834121, lng: -121.63395644603679,
    beds: 4,
    baths: 3,
    sqft: 1897,
    price: 560000,
    description: "This Property falls under the Below Market Rate Program and is subject to a 45-year Resale Restriction with the City of Morgan Hill. "
)

listing15.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing15/listing15_01.png"), filename:'listing15_01.png')
listing15.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing15/listing15_02.png"), filename:'listing15_02.png')
listing15.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing15/listing15_03.png"), filename:'listing15_03.png')
listing15.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing15/listing15_04.png"), filename:'listing15_04.png')
listing15.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing15/listing15_05.png"), filename:'listing15_05.png')

listing16 = Listing.create(
    user_id: 9,
    address: "21348 Sunnyside Rd",
    zip_code: 95033,
    city: "Los Gatos",
    state: "CA",
    lat: 37.161815382561066, lng:  -121.97015292913169,
    beds: 2,
    baths: 1,
    sqft: 921,
    price: 849000,
    description: "An abundance of charm in Aldercroft Heights! Sunny 1.7 acre lot with expansive views. "
)

listing16.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing16/listing16_01.png"), filename:'listing16_01.png')
listing16.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing16/listing16_02.png"), filename:'listing16_02.png')
listing16.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing16/listing16_03.png"), filename:'listing16_03.png')
listing16.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing16/listing16_04.png"), filename:'listing16_04.png')
listing16.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing16/listing16_04.png"), filename:'listing16_05.png')

listing17 = Listing.create(
    user_id: 10,
    address: "654 Dakota Dr",
    zip_code: 95111,
    city: "San Jose",
    state: "CA",
    lat: 37.295710924965306, lng: -121.83295532912871,
    beds: 3,
    baths: 1,
    sqft: 1036,
    price: 908000,
    description: "Adorable 3 bedroom, 1 bath single family home in the quiet Lone Bluff neighborhood, near the Los Lagos Creek Golf course & situated on a big lot! "
)

listing17.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing17/listing17_01.png"), filename:'listing17_01.png')
listing17.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing17/listing17_02.png"), filename:'listing17_02.png')
listing17.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing17/listing17_03.png"), filename:'listing17_03.png')
listing17.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing17/listing17_04.png"), filename:'listing17_04.png')
listing17.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing17/listing17_04.png"), filename:'listing17_05.png')

listing18 = Listing.create(
    user_id: 10,
    address: "18660 Ralya Ct,",
    zip_code: 95014,
    city: "Cupertino",
    state: "CA",
    lat: 37.31955029344364, lng: -121.9984354037032,
    beds: 6,
    baths: 5,
    sqft: 3807,
    price: 4898000,
    description: "Move in and enjoy this gorgeous newly constructed home on a large cul-de-sac lot with award-winning Cupertino schools."
)

listing18.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing18/listing18_01.png"), filename:'listing18_01.png')
listing18.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing18/listing18_02.png"), filename:'listing18_02.png')
listing18.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing18/listing18_03.png"), filename:'listing18_03.png')
listing18.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing18/listing18_04.png"), filename:'listing18_04.png')
listing18.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing18/listing18_04.png"), filename:'listing18_05.png')

listing19 = Listing.create(
    user_id: 11,
    address: "6690 Outlook Ave",
    zip_code: 94605,
    city: "Oakland",
    state: "CA",
    lat: 37.77419402931559, lng: -122.17363152883239,
    beds: 4,
    baths: 3,
    sqft: 1861,
    price: 1008000,
    description: "Sprawling Millsmont Home offers great opportunity to own a sprawling tri-level home with sweeping Bay views, multiple balconies, loads of luxury updates, and even more potential"
)
listing19.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing19/listing19_01.png"), filename:'listing19_01.png')
listing19.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing19/listing19_02.png"), filename:'listing19_02.png')
listing19.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing19/listing19_03.png"), filename:'listing19_03.png')
listing19.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing19/listing19_04.png"), filename:'listing19_04.png')
listing19.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing19/listing19_04.png"), filename:'listing19_05.png')

listing20 = Listing.create(
    user_id: 11,
    address: "1054 Morningside Dr",
    zip_code: 94087,
    city: "Sunnyvale",
    state: "CA",
    lat: 37.36573257733338, lng: -122.05377887486667,
    beds: 3,
    baths: 2,
    sqft: 1384,
    price: 259000,
    description: "Welcome to 1054 Morningside Drive! Nestled on a tree lined street, this charming, light filled, updated and move-in ready home has been tastefully decorated and shows beautifully. "
)
listing20.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing20/listing20_01.png"), filename:'listing20_01.png')
listing20.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing20/listing20_02.png"), filename:'listing20_02.png')
listing20.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing20/listing20_03.png"), filename:'listing20_03.png')
listing20.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing20/listing20_04.png"), filename:'listing20_04.png')
listing20.photos.attach(io: open("https://spillow-seeds.s3.amazonaws.com/listing_photos/listing20/listing20_04.png"), filename:'listing20_05.png')



