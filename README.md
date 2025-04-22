# 2.3.-BaseDades_N1
A database for an optician's shop called "Bottle Neck". It stores data about clients, glasses, suppliers, sales, and employees.

## Exercise 1
This exercise focuses on modeling the database for an optician's shop from the point of view of the clients. The goal is to store relevant data about each client, the glasses they purchase, the suppliers who provide those glasses, and the employees involved in the sales process.

### Collections

#### Clients
- `name`: *String* — Client's full name.
- `address`: *Object* — Includes street, number, floor, door, city, postal code, and country.
- `phone`: *String* — Client's phone number.
- `id_number`: *String* — Client's legal ID number.
- `email`: *String* — Client's email address.
- `register_date`: *ISODate* — Date and time the client registered.
- `referred_by`: *ObjectId (nullable)* — The ID of the client who referred them, if any.

#### Glasses
- `brand`: *String* — Brand name of the glasses.
- `leftglass_measurement`: *Number* — Prescription for the left lens.
- `rightglass_measurement`: *Number* — Prescription for the right lens.
- `frame_type`: *String* — Type of frame (e.g. floating, plastic, metallic).
- `colour_frame`: *String* — Color of the frame.
- `colour_leftglass`: *String* — Color of the left lens.
- `colour_rightglass`: *String* — Color of the right lens.
- `price`: *Number* — Price of the glasses.
- `supplier_id`: *ObjectId* — ID of the supplier.

#### Suppliers
- `name`: *String*
- `address`: *Object* — Includes street, number, floor, door, city, postal code, and country.
- `phone`: *String*
- `fax`: *String*
- `id_number`: *String* — Legal ID number.
- `email`: *String*
- `register_date`: *ISODate* — Supplier registration date.

#### Sales
- `date`: *ISODate* — Date and time of the sale.
- `client_id`: *ObjectId* — ID of the client who made the purchase.
- `employee_id`: *ObjectId* — ID of the employee who processed the sale.
- `glasses_id`: *ObjectId* — ID of the glasses sold.
- `prescription`: *Object* — Contains `left_eye` and `right_eye` measurements.

#### Employees
- `name`: *String*
- `phone`: *String*
- `email`: *String*


## Exercise 2
This database represents the same optician's business, "Bottle Neck", but now focused from the point of view of the glasses (products) instead of the clients.
The main goal is to visualize glasses as the central piece of data, with connected information about the provider (supplier) and clients who purchased them.

### Focus: Glasses-centric design

Each glasses document acts as an entry point to:
- The supplier that provides them.
- All sales related to that product.
- Clients who purchased them.

### Extended Functionality
- A magnifier icon near the supplier name opens a popup with detailed supplier information.
- A list of clients shows who bought those glasses.
- Clicking on a client opens their personal record.


### Collections Overview

#### Glasses:
- `brand`: *String* — Brand of the glasses.
- `leftglass_measurement`: *Float* — Graduation of the left lens.
- `rightglass_measurement`: *Float* — Graduation of the right lens.
- `frame_type`: *String* — Type of frame (e.g., metallic, plastic, floating).
- `colour_frame`: *String* — Frame color.
- `glass_color_left`: *String* — Left lens color.
- `glass_color_right`: *String* — Right lens color.
- `price`: *Number* — Glasses' price.
- `supplier_id`: *ObjectId* — Reference to the supplier.

#### Suppliers:
- `name`: *String*
- `address`: *Object* — Includes street, number, floor, door, city, postal code, country.
- `phone`: *String*
- `fax`: *String*
- `id_number`: *String*
- `email`: *String*
- `register_date`: *ISODate*

#### Sales:
- `date`: *ISODate* — Date and time of the sale.
- `client_id`: *ObjectId* — Who bought the glasses.
- `employee_id`: *ObjectId* — Who sold them.
- `glasses_id`: *ObjectId* — Which glasses were sold.
- `prescription`: *Object* — Graduation per eye.

#### Clients:
- `name`: *String*
- `address`: *Object* — Street, number, floor, door, city, postal code, country.
- `phone`: *String*
- `email`: *String*
- `register_date`: *ISODate*
- `referred_by`: *ObjectId (nullable)* — Another client who recommended the shop.

#### Employees:
- `name`: *String*
- `phone`: *String*
- `email`: *String*

