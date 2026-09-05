# Trauma Response

Eight-scenario, author-created reflection activity at `/trauma-response/`. It is not a diagnostic or validated assessment.

## Release contract

- Ads remain fully suspended while the 2026-09-03 invalid-traffic restriction is active.
- Public funnel: `trauma_response_view` → `start` → `progress` (four accepted answers) → `complete`, with success-only `share`, `next_click`, and delegated `related_click`.
- Events contain only `event_category`; answers, result labels, scores, locale, URL, and timing stay private.
- Result method is transparent: one point per response choice; first matching label breaks ties.
- Verify from the workspace root with `npm run verify:trauma-response`.
