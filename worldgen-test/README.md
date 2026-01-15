# WorldGen Test

This repository is a **lightweight testing ground** for experimenting with procedural world generation ideas using **React + Vite**.


## Branches

### `weighted-tables`
- Moves all **prefixes, suffixes, and sentence pools** into a separate data file
- Focused on:
  - Cleaner separation of **data vs logic**
  - Maintaining weighted random generation
  - Easier extensibility for future tests (summary generation, rare traits)
- Serves as the base for **summary and flavor experimentation**


### `weighted-gen`
- experimentation with **weighted random generation**
- Focused on:
  - Weighted prefixes and suffixes
  - Controlled randomness
  - Verifying probability behavior
- Intended strictly for testing and learning


## Getting Started

```bash
npm install
npm run dev