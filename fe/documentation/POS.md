# POS Managment

![alt](https://i.ibb.co/W6DB0hc/POS.png)

## (1) Employees
> - Shown employee name
> - Ticket number formar 00001
> - Total ticket number daily
## (2) Customer Info
> - Search membership, customer name, last 4 telephone number
> - New customer by popup modals
> - Display total point and convert point to money
## (3) Action
> - Disable membership discount one item in listing cart
> - (Clear) reset current cart to orginal
> - Refresh current POS
## (4) Search
> - Search barcode, item #ID, name (Products + Services) then add to cart listing.
## (5) Add item to cart
> - Container item product and services group by per employees
## (6) Discount Bar + Totals
> Discount: 
>   - Discout item(service, product)
>   - Discount ticket
>   - Discount manager
>   - Discount membership
>   - Discount Coupon
>   - Discount Employee

> Taxes:
>  - Multi will be apply
>  - Taxes option for per states in USA (Taxes in taxes or taxes + taxes)

> Totals: 
>   - Subtotal: (includes all items)
>   - Total: (Includes all items + taxes + discounts)
> - Balance: (Payment Total) - (Total)
## (7) Method Payment
> Have 5 method payment
> - Cash
> - Creditcard(Payment online and offline)
>    - Online intergrate with Mercury gateway
>    - Offline save to local DB (Money + transaction #ID)
> - Giftcard
>    - Check local and payment under giftcard + store history payment per transaction 
> - Check
>    - Save history payment per transaction
> - Point
>    - Enable  when customer selected.

## (8) Right Footer POS
> - Done: Validate and save transaction to DB
> - Save ticket: Store ticket in screen waiting POS
> - Back: Back to before screen.
## (9) Left Footer Button
> - Home: Back to home page
> - Cash Draw: Open cash draw (Open printer cash drawer will be open too)
> - Text Message: Open popup send text message for curent customer
> - Check-In screen
> - Booking Appt screen
> - Turn screen
> - Sell Giftcard (Open popup sell giftcard number)
## (10) Items Services + Products
> - Container items services and products
> - User can set color and image for per items
## (11) Menu Categories
> Display menu categories left sidebar
## (12) Middle sidebar
> - Void: Delete item in cart
> - Adjust: change price item in cart
> - Discount: redurce price item or ticket
> - Add Tip per employee in cart
> - Add more Employees
> - Print out without save transaction
> - Discount Manager need input manage code before discount.