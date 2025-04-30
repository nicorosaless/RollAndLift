/**
 * API service for communicating with the backend
 */

// Base URL for the FastAPI backend
const API_BASE_URL = 'http://localhost:8000/api';

// User type definition for registration
interface UserRegistrationData {
  username: string;
  email: string;
  password: string; // Add password
}

// User type definition returned from login/stored in context
interface User {
  id: string;
  username: string;
  email: string;
}

// Removed duplicate saveUser function

/**
 * Add a user to the MongoDB database via the FastAPI backend
 * (Updated to send username, email, and password)
 */
export const addUser = async (userData: UserRegistrationData): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData), // Send userData which includes password
    });
    // Check for specific error status codes if needed
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: 'Unknown error' })); // Try to parse error
        console.error('Error adding user:', response.status, errorData);
        // Optionally, re-throw or handle specific errors based on errorData.detail
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.detail}`);
    }
    const data = await response.json();
    console.log('Add user response:', data);
    return true;
  } catch (error) {
    console.error('Error adding user:', error);
    return false;
  }
};

/**
 * Authenticate a user via the FastAPI backend
 */
export const loginUser = async (credentials: { email: string; password: string }): Promise<User | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'Login failed' }));
      console.error('Login error:', response.status, errorData);
      // Optionally throw a more specific error based on errorData.detail
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Login response:', data);
    // Assuming the backend returns { message: "...", user: { id, username, email } }
    if (data.user) {
      return data.user as User;
    } else {
      throw new Error('Login successful, but no user data received.');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    // Propagate the error message or return null
    // throw error; // Re-throw if you want the component to handle it further
    return null; // Return null to indicate login failure
  }
};

/**
 * Check if the API is running
 */
export const checkApiStatus = async (): Promise<boolean> => {
  try {
    const response = await fetch(API_BASE_URL);
    return response.ok;
  } catch (error) {
    console.error('API status check failed:', error);
    return false;
  }
};
