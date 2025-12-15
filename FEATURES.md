# Daycap – Features & Behavior Specification

This document defines user-facing features and behavioral rules.
Implementation must follow TECH.md and WORKFLOW.md.

---

## Global Principles

These rules apply to all features unless explicitly overridden.

- The app is **local-first** and **offline-first**
- User data stays on-device by default
- All actions must feel fast and predictable on mobile
- The UI must never block or freeze during interaction
- Errors are visible, understandable, and non-destructive

---

## Feature Slice: Daily Budget Overview

### User Goal

The user wants to quickly see today’s budget status at a glance.

### Behavior

- Show today’s date
- Show remaining budget for today
- Show total spent today

### UI Rules

- Must fit comfortably on a mobile screen
- No scrolling required for primary information
- Values update immediately when data changes

### Constraints

- Calculations are performed locally
- No historical data required for this view

---

## Feature Slice: Add Expense

### User Goal

The user wants to quickly record a new expense.

### Trigger

- User taps an "Add Expense" button

### Happy Path

1. A lightweight input form is displayed
2. User enters an amount
3. User optionally enters a short note
4. User submits the form
5. Expense is immediately reflected in today’s totals
6. Input form resets or closes

### Validation Rules

- Amount must be a positive number
- Empty or invalid input prevents submission

### Failure Behavior

- Invalid fields are highlighted
- Error is shown inline
- User input is preserved

### Constraints

- Expense creation must complete in under 100ms
- No network calls are performed

---

## Feature Slice: Expense List (Today)

### User Goal

The user wants to see what they spent today.

### Behavior

- Display a list of today’s expenses
- Most recent expenses appear first
- Each expense shows:
  - Amount
  - Optional note

### UI Rules

- List must be scrollable
- Empty state must be explicit and friendly

---

## Feature Slice: Delete Expense

### User Goal

The user wants to remove an incorrectly entered expense.

### Trigger

- User taps a delete icon on an expense

### Behavior

1. User is asked to confirm deletion
2. On confirm:
   - Expense is removed
   - Totals update immediately

### Constraints

- Deletion cannot be undone
- No background cleanup required

---

## Feature Slice: Daily Budget Limit

### User Goal

The user wants to define how much they can spend per day.

### Behavior

- User can set a daily budget amount
- Budget applies only to the current day unless changed

### UI Rules

- Budget value is clearly visible
- Editing the budget is quick and unobtrusive

### Constraints

- Budget changes affect calculations immediately
- Budget value is stored locally

---

## Feature Slice: Visual Feedback

### User Goal

The user wants to intuitively understand budget health.

### Behavior

- Remaining budget changes visually as expenses are added
- Approaching budget limit is visually emphasized
- Exceeding budget is clearly indicated

### Constraints

- Visual feedback must not rely on animations alone
- Must be readable in low-light or outdoor conditions

---

## Feature Slice: Persistence

### User Goal

The user wants their data to be there when they come back.

### Behavior

- All data persists across page reloads
- Persistence is automatic and transparent

### Failure Behavior

- If persistence fails:
  - App continues functioning
  - A non-blocking warning may be shown

---

## Feature Slice: New Day Rollover

### User Goal

The user wants a clean slate each day.

### Behavior

- Expenses are grouped by day
- A new day starts at local midnight
- Today’s view shows only today’s data

### Constraints

- Day boundaries are based on local time
- No background jobs required

---

## Feature Slice: Manual Data Export (Optional)

### User Goal

The user wants to back up their data.

### Behavior

- User can export all data as a file
- Exported data is human-readable

### Constraints

- Export is manual
- No automatic sync

---

## Out of Scope (For Now)

- Authentication
- Multi-device sync
- Analytics or tracking
- Categories or tags
- Charts or historical trends
- Editing existing expenses

---

## Naming Rules

- Use the term **“expense”** consistently
- Avoid introducing synonyms (e.g. “transaction”)

---

## Implementation Notes

- Prefer simple, readable solutions
- Avoid speculative abstractions
- Follow small-change discipline
