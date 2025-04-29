
/**
 * API service for communicating with the backend
 */

// Base URL for the FastAPI backend
const API_BASE_URL = 'http://localhost:8000/api';

// User type definition
interface User {
  id: string;
  username: string;
  email: string;
}

/**
 * Save a user to the MongoDB database via the FastAPI backend
 */
export const saveUser = async (user: User): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('User save response:', data);
    return true;
  } catch (error) {
    console.error('Error saving user:', error);
    return false;
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
