const API_BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://foodapp-j5wn.onrender.com" // Your live API URL
    : "http://localhost:5000"; // Backend running locally

export default API_BASE_URL;

// const API_BASE_URL = "https://foodapp-j5wn.onrender.com";

// export default API_BASE_URL;
