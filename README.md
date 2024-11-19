# Support Ticket API

### Overview

This API manages support tickets, allowing users to create, update, list, filter by status, and close tickets. It is designed for efficient technical support management.

---

### Endpoints

#### **Create Ticket**

Creates a new support ticket.

- **Method:** `POST`
- **URL:** `/tickets`
- **Payload (JSON):**
  - `equipment` (string, required): Name of the equipment (e.g., computer).
  - `description` (string, required): Problem description.
  - `user_name` (string, required): Name of the user creating the ticket.

---

#### **Get Tickets**

Retrieves a list of all support tickets.

- **Method:** `GET`
- **URL:** `/tickets`
- **Query Parameters:**
  - `status` (string, optional): Filter tickets by status ("open" or "closed").

---

#### **Update Ticket**

Updates details of a specific ticket.

- **Method:** `PUT`
- **URL:** `/tickets/:id`
- **Route Parameters:**
  - `id` (UUID, required): ID of the ticket.
- **Payload (JSON):**
  - `equipment` (string, required): Name of the equipment (e.g., computer).
  - `description` (string, required): Problem description.
  - `user_name` remains unchanged.

---

#### **Close Ticket**

Marks a specific ticket as closed.

- **Method:** `PATCH`
- **URL:** `/tickets/:id/status`
- **Route Parameters:**
  - `id` (UUID, required): ID of the ticket.

---

#### **Delete Ticket**

Deletes a specific ticket by its ID.

- **Method:** `DELETE`
- **URL:** `/tickets/:id`
- **Route Parameters:**
  - `id` (UUID, required): ID of the ticket.

---

### Notes

- **Validation:** Ensure the `UUID` format for IDs is strictly followed.
- **Error Handling:** API should return appropriate status codes (e.g., 400 for bad requests, 404 for non-existent tickets, 500 for internal errors).
