# 2.3.-BaseDades_N1
A database of a optician's called "Bottle Neck". It gets the data from the clients, glasses, suppliers, sales and employees of this shop.

## Exercise 1
### Collections
#### Clients:
name: String - Client's name
address: String - It includes the street, the street number, the floor and door number, the city, postal code and country.
phone: String - Client's phone number
id number: String - Client's id (legal id number)
email: String - Client's e-mail
register date: ISODate - Client's register date as we need at what time it was
referred by: Person who gave the client the shop reference.

#### Glasses:
brand: String - Glasses' brand
leftglass_measurement: Measurement number of the left glass
rightglass_measurement: Measurement number of the left glass
frame_type: String - Type of the frame 
colour_frame: String - Colour of the frame
colour_leftglass: String - Colour of the left glass
colour_rightglass: String - Colour of the right glass
price: Glasses' price
supplier_id: Id number of the supplier who got it for the shop

#### Suppliers:
name: String - Supplier's name
address: String - It includes the street, the street number, the floor and door number, the city, postal code and country.
phone: String - Supplier's phone number
fax: String - Supplier's fax number
id number: String - Supplier's id (legal id number)
email: String - Supplier's e-mail
register date: new Date - Supplier's register date

#### Sales:
date: ISODate - Sale's date (day and at what time)
client id: ObjectId - The automatic client id
employee id: ObjectId - The automatic employee id
glasses id: ObjectId - The automatic glasses id
prescription: left and right eyes measurements.

#### Employees:
name: String - Employee's name
phone: String - Employee's phone number
email: String - Employee's e-mail


## Exercise 2
### Collections


