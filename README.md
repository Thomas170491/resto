# Resto — Angular/Ionic Restaurant Ordering PWA

A responsive restaurant ordering application built with **Angular**, **Ionic**, and **Firebase/Firestore**.

The project demonstrates a complete client-side ordering flow: browsing menu categories, selecting products, managing quantities, validating an order, and persisting submitted orders to Firestore.

**Live demo:** https://restopizza.firebaseapp.com/home

---

## Overview

Resto was built as a practical exercise in modern frontend development and cloud-backed application architecture.

The application uses Angular standalone components and Ionic UI components to provide a mobile-oriented ordering interface. Menu data is loaded into the application, filtered by category, and transformed into an order using Angular reactive forms.

Completed orders are stored in Firebase Firestore.

---

## Features

- Browse restaurant menu items by category
- Filter recipes dynamically
- Add and remove products from an order
- Track item quantities
- Display prices in CHF
- Validate orders before checkout
- Submit completed orders to Firestore
- Responsive Ionic interface
- Lazy-loaded Angular routing
- Progressive Web App support
- Firebase Hosting deployment

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Angular 18 | Application framework |
| TypeScript | Application logic |
| Ionic 8 | Responsive/mobile UI components |
| AngularFire | Angular integration with Firebase |
| Firebase Firestore | Order persistence |
| Firebase Hosting | Web application hosting |
| RxJS | Reactive data handling |
| Angular Reactive Forms | Order state and validation |
| Angular Service Worker | PWA support |

---

## Application Flow

```text
Menu data
    │
    ▼
Angular service
    │
    ▼
Category / recipe display
    │
    ▼
User selects products
    │
    ▼
Reactive FormArray
    │
    ▼
Order validation
    │
    ▼
Checkout
    │
    ▼
Firebase Firestore
```

The ordering page maintains the current order using an Angular `FormArray`.

When a customer selects a product:

- a new order item is created if it is not already present;
- its quantity is incremented if it already exists;
- removing an item decrements its quantity;
- items reaching zero quantity are removed from the order.

Once the form is valid, the checkout action sends the order to Firestore.

---

## Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── menu/
│   │   ├── order-page/
│   │   └── updates-notification/
│   │
│   ├── services/
│   │   ├── api/
│   │   └── firestore/
│   │
│   ├── pipes/
│   ├── interfaces.ts
│   ├── app.config.ts
│   └── app.routes.ts
│
├── index.html
├── main.ts
└── styles.scss

firebase.json
ngsw-config.json
package.json
```

---

## Routing

The application uses Angular standalone routing.

The main ordering interface is lazy-loaded through the `/home` route:

```text
/ → /home
```

This keeps the application structure simple while using Angular's modern component-loading model.

---

## Firestore Integration

The project contains a reusable Firestore service supporting common data operations:

- load documents
- add documents
- update documents
- delete documents

The ordering service also submits customer orders to the Firestore `orders` collection.

This separates application logic from database access and provides a reusable abstraction for Firestore operations.

---

## Progressive Web App

Angular's service worker is configured to cache the application shell and static assets.

Application resources such as JavaScript, CSS, the manifest, and index page are prefetched, while image and font assets use lazy caching.

This allows the project to demonstrate the basic architecture of an installable Progressive Web App.

---

## Running Locally

### Requirements

- Node.js
- npm

Clone the repository:

```bash
git clone https://github.com/Thomas170491/resto.git
cd resto
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Then open:

```text
http://localhost:4200/
```

---

## Build

Create a production build with:

```bash
npm run build
```

The compiled application is generated under:

```text
dist/resto/
```

---

## Deployment

The project is configured for **Firebase Hosting**.

Firebase redirects application routes to `index.html`, allowing Angular client-side routing to function correctly when a route is loaded directly.

The deployed application is available at:

https://restopizza.firebaseapp.com/home

---

## Security and Maintenance

This repository is an educational and portfolio project rather than a production-hardened commerce platform.

The application communicates directly with Firebase from the browser. In a production deployment, authorization and data-access restrictions must therefore be enforced through appropriate **Firestore Security Rules**.

Dependency versions are pinned where appropriate to improve reproducibility. Further framework upgrades should be performed as controlled migrations rather than through forced dependency updates.

---

## Future Improvements

Potential improvements include:

- stronger TypeScript typing and removal of remaining `any` values
- expanded unit and integration tests
- improved checkout confirmation and error feedback
- authentication and user-specific order history
- documented Firestore Security Rules
- migration to newer Angular/Firebase versions
- removal of remaining debug logging
- improved accessibility and responsive layouts

---

## Portfolio Context

This project demonstrates practical experience with:

- TypeScript and Angular application development
- component-based frontend architecture
- reactive forms and state management
- Firebase and Firestore integration
- asynchronous application workflows
- Progressive Web Apps
- cloud deployment
- dependency maintenance and application troubleshooting

It complements my cybersecurity-focused projects by demonstrating broader software engineering and application-development experience.