# Experiment 13 — High-Fidelity UI Prototypes and Reusable Components Using Figma

## Aim
Design a high-fidelity interactive UI prototype in Figma using a consistent design system and reusable components.

## Requirements
Figma account and the low-fidelity wireframes from Experiment 12.

## Procedure

### 1. Create a Figma file and mobile frame
1. Sign in at https://figma.com and create a new design file.
2. Press `F` and select the iPhone 14 / 375 × 812 frame preset.
3. Rename the frame `Home`.

### 2. Define color and text styles
Create color styles for a primary brand color, secondary color, and neutral background. Create text styles such as `Heading/H1` and `Body/Regular`.

### 3. Create a reusable button component with variants
1. Draw a rounded rectangle and add a centered label such as **Order Now**.
2. Select both layers and choose **Create component** (Cmd/Ctrl + Alt + K).
3. Add variants such as **Default**, **Pressed**, and **Disabled**, adjusting their appearance.

### 4. Apply Auto Layout
Select a group of related elements (for example, an image, title, and price in a restaurant card) and press `Shift + A`. Adjust spacing, padding, and resizing behavior.

### 5. Build at least three high-fidelity screens
Use the Experiment 12 wireframes as a reference. Create:
- Home: logo, search bar, category chips, restaurant cards, and bottom navigation.
- Restaurant Detail.
- Checkout.

Reuse the same color and text styles, button component instances, and other repeated components.

### 6. Connect screens in Prototype mode
1. Select a restaurant card and drag its connection handle to Restaurant Detail.
2. Set **On tap → Navigate to → Restaurant Detail**.
3. Connect the Add to Cart button to Checkout.
4. Set Home as the prototype starting frame.

### 7. Test and share
Use **Present** to test Home → Restaurant Detail → Checkout. Select **Share**, set access to **Anyone with the link can view**, and share the generated prototype link with a peer or instructor for feedback.

## Common issues
- Unexpected changes across instances: edit an instance override for one-off changes; edit the master component only for shared changes.
- Auto Layout sizing problems: verify Fixed / Hug / Fill settings.
- Prototype not working: check the starting frame and each interaction's destination.

## Deliverables
- Color and text styles
- Reusable Button component with variants
- At least three high-fidelity screens using components and Auto Layout
- Clickable prototype and shared link
- Peer feedback

## Observation checklist
- [ ] Mobile frames created
- [ ] Color and text styles defined
- [ ] Button component and variants created
- [ ] Auto Layout applied
- [ ] Three screens completed
- [ ] Prototype interactions tested
- [ ] Share link and peer feedback recorded

## Result
Add exported screenshots and the actual Figma prototype link after completing the design. Do not add a placeholder URL as if it were a real prototype.
