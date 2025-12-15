# NimbusAir – Flight Booking Frontend (Angular)

A clean, modern Angular frontend for a flight booking system.  
NimbusAir lets users search flights without logging in, register, and log in with a sleek grid‑paper aviation theme.

## 📂 Project Structure (Frontend)
```

flight-booking-frontend/
├─ src/
│  ├─ app/
│  │  ├─ app.component.ts       # Root component (navbar + layout)
│  │  ├─ app.component.html     # Navbar + router outlet
│  │  ├─ app.component.css      # Navbar & layout styles
│  │  ├─ app.config.ts          # Angular application config
│  │  ├─ app.routes.ts          # Routes: home, login, register, search
│  │  │
│  │  ├─ auth/
│  │  │  ├─ login/
│  │  │  │  ├─ login.component.ts
│  │  │  │  ├─ login.component.html
│  │  │  │  └─ login.component.css
│  │  │  └─ register/
│  │  │     ├─ register.component.ts
│  │  │     ├─ register.component.html
│  │  │     └─ register.component.css
│  │  │
│  │  ├─ flights/
│  │  │  └─ search-flights/
│  │  │     ├─ search-flights.component.ts
│  │  │     ├─ search-flights.component.html
│  │  │     └─ search-flights.component.css
│  │  │
│  │  └─ services/
│  │     └─ auth.service.ts     # HTTP calls for login/signup
│  │
│  ├─ styles.css                # Global styles (grid background, theming)
│  ├─ main.ts                   # Bootstraps Angular app
│  └─ index.html                # Root HTML, loads Angular bundle
│
├─ angular.json
├─ package.json
└─ README.md---
```

---

## ✨ Screenshots

> Frontend Integrated with Bcakend

- **Home / Search Flights**

  <img width="1413" height="915" alt="Screenshot 2025-12-15 at 11 32 31 PM" src="https://github.com/user-attachments/assets/d263df12-7501-4223-a3a1-4b0dbba7d628" />


- **Login**

  <img width="1435" height="926" alt="Screenshot 2025-12-15 at 11 32 45 PM" src="https://github.com/user-attachments/assets/55471e1a-fe47-4ad5-9cd8-7ae81f41b1dd" />


- **Register**

  <img width="1421" height="931" alt="Screenshot 2025-12-15 at 11 32 56 PM" src="https://github.com/user-attachments/assets/45ec9908-cf4c-485c-a06f-ab638785cc00" />


- **Validation – Missing Date**

  <img width="1427" height="929" alt="Screenshot 2025-12-15 at 11 33 25 PM" src="https://github.com/user-attachments/assets/486014fb-966e-4ca5-922a-7451abaf384e" />


- **Successful Login**

  <img width="1439" height="932" alt="Screenshot 2025-12-15 at 11 33 48 PM" src="https://github.com/user-attachments/assets/3b85c720-a987-4aad-9c23-23d411d0f82a" />


- **Successful Registration**

  <img width="1432" height="939" alt="Screenshot 2025-12-15 at 11 35 12 PM" src="https://github.com/user-attachments/assets/ed1a5e21-a024-4168-b258-614d7f2291df" />

-**Available Flights**

  <img width="1428" height="916" alt="Screenshot 2025-12-15 at 11 35 30 PM" src="https://github.com/user-attachments/assets/abb8e319-d6eb-4daa-83f5-0bdf3e653306" />

---

## 🧭 Overview

NimbusAir is a simple but polished frontend for a flight booking app:

- Public **Home** page with **Search Flights** – no login required.
- **Login** and **Register** flows using a left‑aligned card design with aviation‑themed hero art.
- **Date selection with validation** on flight search (cannot pick past dates).
- **Registration with Name, Username, and Password** (name is collected on the UI but backend payload remains `{ username, password }` to avoid breaking the API).
- Built with the Angular standalone component style and Bootstrap 5 for quick, responsive layout.

---

## 🧱 Tech Stack

- **Framework**: Angular (standalone components)
- **Styling**: CSS + Bootstrap 5
- **Language**: TypeScript
- **HTTP / Auth**: `HttpClient` + JWT handled by backend (frontend stores token in `localStorage`)

---

## 🚀 Getting Started

### 1. Install dependencies

npm install### 2. Run the dev server

npm start
# or
ng serveNavigate to `http://localhost:4200/`.

---

## 🧩 Features

### UI & UX

- White **grid‑paper background** with blue aviation accents.
- Sticky top **navbar** with:
  - **NimbusAir** brand
  - **Home**, **Login**, **Register** navigation
- Left‑aligned cards for **Login**, **Register**, and **Search Flights**.
- Right‑side hero sections with:
  - Short marketing copy (“Plan your next journey”, “Catch your next cloud‑hop”, etc.).
  - Simple line‑art plane illustration.

### Auth

- **Login**
  - Fields: `username`, `password`.
  - Sends credentials to backend via `AuthService.login`.
  - On success:
    - Stores JWT token in `localStorage`.
    - Shows a success alert.
    - Navigates to `/search`.

- **Register**
  - Fields: `fullName` (Name), `username`, `password`.
  - Only `username` and `password` are sent to backend via `AuthService.signup`  
    (keeps backend contract unchanged).
  - On success:
    - Shows a success alert.
    - Navigates to `/login`.

### Flight Search

- Public **Home** route (`/`) renders the `FlightSearch` component.
- Fields:
  - **From** (source)
  - **To** (destination)
  - **Date** (with min = today)
- Validation in the frontend:
  - Requires source, destination, and date.
  - Prevents searching with a **past date**.
- Uses static mock flight data on the frontend to show:
  - **Available Flights** table when matches are found.
  - A friendly “No flights found yet. Try searching a funky route.” message otherwise.

---



## 🔄 System Flow – Vertical Architecture Diagram

Same logical flow as your original diagram, but redesigned as a vertical top‑to‑bottom chart.
maid
flowchart TB
    %% Layers (top to bottom)
    U[User<br/>Browser]

    FE[Angular Frontend<br/>NimbusAir UI]

    GW[API Gateway<br/>JWT Validation]

    subgraph Core_Services[Core Services]
      direction TB
      AUTH[Auth Service<br/>Login / Register]
      FLIGHT[Flight Service<br/>Search Flights]
      BOOK[Booking Service<br/>Reserve Seats]
      NOTIF[Notification Service<br/>Email / Alerts]
    end

    subgraph Databases
      direction TB
      AUTHDB[(Auth DB)]
      FLIGHTDB[(Flight DB)]
      BOOKDB[(Booking DB)]
    end

    %% Requests
    U -->|HTTP Requests| FE
    FE -->|REST API| GW

    GW -->|/auth/*| AUTH
    GW -->|/flights/*| FLIGHT
    GW -->|/bookings/*| BOOK

    %% Data persistence
    AUTH --> AUTHDB
    FLIGHT --> FLIGHTDB
    BOOK --> BOOKDB

    %% Notifications
    BOOK --> NOTIF

    %% Responses
    AUTH -->|JWT Token| GW
    GW -->|Response JSON| FE
    FE -->|UI Render / Updates| U---

## 🧱 Project Structure Flowchart (Left‑to‑Right)

This diagram shows how the main frontend pieces fit together.
maid
flowchart LR
    U[User<br/>Browser] --> APP[Angular App<br/>main.ts / AppComponent]

    APP --> ROUTES[Routing<br/>app.routes.ts]
    ROUTES --> LOGIN[Login Component]
    ROUTES --> REGISTER[Register Component]
    ROUTES --> SEARCH[FlightSearch Component]

    LOGIN --> AUTH_SVC[AuthService<br/>/auth/login]
    REGISTER --> AUTH_SVC
    SEARCH --> API[Backend APIs<br/>/flights/*]

    AUTH_SVC --> API

    API --> DB[(Backend Databases)]

    SEARCH --> UI[Flights Table<br/>Mock data / responses]
    UI --> U---

## 🧪 NPM Scripts

Typical Angular scripts (adjust as needed):
c
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint"
  }
}---

## ✅ Notes

- Frontend validation (date, name, etc.) is handled **only in the UI**;  
  the backend payloads are kept minimal to avoid breaking existing APIs.
- JWT storage is done via `localStorage` – adjust to your security requirements if needed.
- Screenshots and diagrams in this README are illustrative; update paths and text as your project evolves.
