const BASE_URL = "http://localhost:3000";

export const todoAPI = {
  fetchAll: () => fetch(`${BASE_URL}/todos`).then((res) => res.json()),
  updateOne: ({ id, todo }) => {
    const options = {
      method: "PATCH", // Use PATCH method to update
      headers: {
        "Content-Type": "application/json", // Set content type header
      },
      body: JSON.stringify(todo), // Convert the todo object to JSON
    };
    return fetch(`${BASE_URL}/todos/${id}`, options).then((res) => res.json());
  },
  createOne: (todo) => {
    const options = {
      method: "POST", // Use POST method to create
      headers: {
        "Content-Type": "application/json", // Set content type header
      },
      body: JSON.stringify(todo), // Convert the todo object to JSON
    };
    return fetch(`${BASE_URL}/todos`, options).then((res) => res.json());
  },
  deleteOne: (id) => {
    const options = {
      method: "DELETE", // Use DELETE method
      headers: {
        "Content-Type": "application/json", // Set content type header
      },
    };
    return fetch(`${BASE_URL}/todos/${id}`, options).then((res) => res.json());
  },
};
