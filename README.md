# uber-clone
# Uber Clone - Full Stack MERN Application

A full-stack ride-booking application inspired by Uber, built using the MERN stack. The application allows users to book rides, captains (drivers) to accept ride requests, and provides real-time ride tracking with live location updates.

## Features

### User Features

* User Registration & Login
* JWT Authentication
* Book a Ride
* Select Pickup & Destination
* Fare Estimation
* Live Ride Status
* Real-Time Location Tracking
* Ride History
* Secure Logout

### Captain Features

* Captain Registration & Login
* Go Online / Offline
* Accept or Reject Ride Requests
* Live Location Sharing
* Start and End Ride
* Earnings Dashboard (Optional)

### Real-Time Features

* Socket.IO for real-time communication
* Live driver location updates
* Instant ride request notifications
* Ride status updates without page refresh

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM
* Context API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* Socket.IO

## Project Structure

```text
uber-clone/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── socket/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/uber-clone.git

cd uber-clone
```

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_MAPS_API=your_google_maps_api_key
```

Start the backend server.

```bash
npm run dev
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

The backend runs at:

```text
http://localhost:5000
```

## Authentication

The application uses:

* JWT (JSON Web Tokens)
* Password Hashing using bcrypt
* Protected Routes
* HTTP-only Cookies (if implemented)

## API Endpoints

### User

* Register User
* Login User
* Logout User
* Get User Profile

### Captain

* Register Captain
* Login Captain
* Toggle Availability
* Get Captain Profile

### Ride

* Create Ride
* Get Fare
* Confirm Ride
* Start Ride
* End Ride
* Ride History

## Screenshots

Add screenshots of your application here.

```text
screenshots/
│
├── home.png
├── login.png
├── map.png
├── booking.png
├── captain-dashboard.png
└── ride-tracking.png
```

## Future Improvements

* Stripe Payment Integration
* Rating and Review System
* Ride Scheduling
* Push Notifications
* Admin Dashboard
* Multiple Vehicle Types
* Dark Mode
* Ride Cancellation Charges

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

## Author

**Manish**

B.Tech Information Technology Student

## License

This project is for educational purposes and is not affiliated with Uber Technologies Inc.
