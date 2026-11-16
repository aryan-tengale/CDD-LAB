# Experiment 12 — CampusBite UX Research Artifacts

The lab manual permits simulated research for this exercise. These are example personas for a campus food-ordering app and should be validated with actual peer feedback before being treated as research findings.

## Persona 1 — Ananya Sharma, working professional
- **Age / occupation:** 27, software engineer
- **Context:** Orders lunch during a busy workday, several times a week
- **Goals:** Find a suitable meal quickly; see delivery estimates before checkout; pay with minimal steps
- **Frustrations:** Long delivery times, crowded menus, late visibility of delivery estimates, repetitive checkout
- **Behavior:** Prefers mobile ordering and repeats familiar orders
- **Quote:** “I just want food that arrives on time without ten taps.”

## Persona 2 — Rohan Kulkarni, college student
- **Age / occupation:** 20, undergraduate student
- **Context:** Orders affordable meals between classes or with friends in the evening
- **Goals:** Stay within a small budget; split or coordinate group orders; discover nearby campus-friendly options
- **Frustrations:** Hidden delivery fees, unclear offers, minimum-order surprises, slow checkout
- **Behavior:** Compares prices, uses coupons, and often reorders favorites
- **Quote:** “Show me the final price first, not after I've filled the cart.”

## User journey — Ananya orders lunch

| Stage | Action | Thought | Emotion | Pain point | Design opportunity |
|---|---|---|---|---|---|
| Awareness | Opens CampusBite | “What can arrive before my break ends?” | Neutral | Too many categories | Show recent orders and quick picks first |
| Consideration | Browses restaurants | “Which one is fast and reliable?” | Curious | ETA is hard to compare | Show delivery estimate on each listing |
| Decision | Adds a meal to cart | “What will I pay in total?” | Slightly anxious | Fees and offers are unclear | Show item, delivery, discount, and total transparently |
| Action | Checks out | “Can I finish this quickly?” | Focused | Re-entering details | Offer saved address and payment method |
| Post-use | Tracks delivery | “Where is my order?” | Impatient | Tracking is not prominent | Show order status and delivery progress |

## Design requirements derived from the journey
1. Keep search, recent orders, and categories visible on Home.
2. Display delivery estimates before opening a restaurant.
3. Show a transparent price breakdown in Cart.
4. Keep checkout short and provide order status after payment.
