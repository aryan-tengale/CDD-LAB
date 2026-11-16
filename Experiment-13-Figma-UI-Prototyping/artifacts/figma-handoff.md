# Experiment 13 — CampusBite Figma Handoff

The companion SVG `high-fidelity-screens.svg` contains three visual screen concepts sized to a 375 × 812 mobile frame. It can be imported into Figma as vector artwork. This is a design handoff asset, **not** a native Figma file or a clickable prototype.

## Design tokens

### Color
- Primary: `#FF5A1F` (CampusBite orange)
- Primary dark: `#D9430B`
- Ink: `#202124`
- Secondary text: `#6B7280`
- Surface: `#FFFFFF`
- Canvas: `#F6F7F9`
- Border: `#E5E7EB`
- Success: `#168A52`

### Typography
- Typeface: Inter
- Display / H1: 24 px, Bold
- H2: 18 px, Semibold
- Body: 14 px, Regular
- Caption: 12 px, Regular

### Spacing and shape
- Base spacing unit: 4 px
- Common screen padding: 20 px
- Card radius: 16 px
- Button radius: 12 px
- Primary button height: 52 px

## Frames to create in Figma
1. **Home** — search, category chips, restaurant cards with ETA and price, bottom navigation.
2. **Restaurant Detail** — restaurant header, delivery estimate, menu items, Add to Cart action.
3. **Checkout** — address, item summary, transparent price breakdown, payment method, Place Order.

## Reusable components to create
- `Button / Primary` with Default, Pressed, and Disabled variants.
- `Restaurant Card` with image, name, ETA, rating, and starting price.
- `Category Chip` with Default and Selected variants.
- `Bottom Navigation Item` with Active and Inactive variants.
- `Price Row` for subtotal, delivery, discount, and total.

## Prototype connections
- Home restaurant card → Restaurant Detail (On tap, Navigate to, Slide in).
- Restaurant Detail Add to Cart → Checkout (On tap, Navigate to, Smart animate).
- Set Home as the starting frame and test in Present mode.

## Completion status
The SVG and this handoff specification are prepared. The manual's native Figma actions—creating a Figma file, defining styles, component variants, auto layout, prototype links, sharing a live URL, and collecting peer feedback—still need to be performed in a signed-in Figma workspace.
