# SweatPlus prototype

Clickable prototype of the SweatPlus Loyalty & Court Booking platform (Phase 1), converted from the design canvas.

## Screens

| Route | Screen |
|---|---|
| `#/` | Home (member dashboard) |
| `#/booking` | Book a court (single and season) |
| `#/membership` | Membership and rewards |
| `#/account` | My balance and bookings |
| `#/admin` | Back office: dashboard |
| `#/admin/bookings` | Back office: bookings and walk-ins |
| `#/admin/members` | Back office: members |
| `#/admin/loyalty` | Back office: loyalty and rewards settings |
| `#/admin/pricing` | Back office: venues and pricing |
| `#/admin/staff` | Back office: staff and roles |

The button at the bottom right switches between the customer site and the back office.

## Run locally

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

- All data is mock data held in each page; nothing is saved. Bracketed values such as `[RM X]` are placeholders still to be confirmed with SweatPlus.
- Each page in `pages/` is a self-contained React component with its sample data and interactions in `renderVals()`.
