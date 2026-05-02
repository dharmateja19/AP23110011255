# Campus Notifications Microservice (Frontend)

A responsive React-based application that displays campus notifications with a **priority-based inbox**, filtering, and pagination. Built as part of the Affordmed evaluation.

---

## Features

* **Priority Inbox**

  * Displays top *N* important unread notifications
  * Priority based on:

    * Placement > Event > Result
    * Recency (latest first)

* **Filtering**

  * Filter notifications by:

    * All
    * Event
    * Result
    * Placement

*  **Pagination**

  * Fetch notifications using API pagination

* **Read / Unread State**

  * Click to mark notifications as read

* **Modern UI**

  * Built with TailwindCSS
  * Responsive design (mobile + desktop)
  * Clean, minimal interface

* **Logging Middleware Integration**

  * Logs API calls and errors

---

## Tech Stack

* **Frontend:** React (Vite)
* **Styling:** TailwindCSS
* **API Calls:** Axios
* **State Management:** React Hooks
* **Logging:** Custom Middleware

---

##  Project Structure

```plaintext
repo-root/
│
├── logging_middleware/
│   └── logger.js
│
├── notification_system_design.md
│
├── notification_app_be/
│
├── notification_app_fe/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── package.json
│   └── ...
│
└── README.md
```

---

##  Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <your-repo-link>
cd notification_app_fe
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run Application

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

## API Authentication

1. Register using the provided **accessCode**:

```http
POST /evaluation-service/register
```

2. Receive:

* clientID
* clientSecret
* token

3. Use token in API calls:

```http
Authorization: Bearer <token>
```

---

## Priority Logic

Priority score is calculated using:

```
Score = (Type Weight × Large Constant) + Timestamp
```

### Weights:

* Placement = 3
* Event = 2
* Result = 1

This ensures:

* Higher priority types always rank above lower ones
* Newer notifications appear first within same type

---

## API Usage

### GET Notifications

```http
GET /evaluation-service/notifications
```

### Query Parameters:

* `page`
* `limit`
* `notification_type` (Event, Result, Placement)

---

## Error Handling

* Handles API failures gracefully
* Displays user-friendly error messages
* Logs errors using middleware

---

## Responsiveness

* Mobile-first design
* Adaptive grid layout
* Optimized spacing for all devices

---

## Future Enhancements

* Notification badge count
* Dark mode support
* Infinite scroll
* Persistent read state

---

## Author

**Dharma Teja Pamarthi**
