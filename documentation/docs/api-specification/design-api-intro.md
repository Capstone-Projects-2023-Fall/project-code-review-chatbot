---
title: CRC API Introduction
description: API Introduction
hide_table_of_contents: true
sidebar_position: 3  
---

### API Documentation

#### **1. Email Verification Routes**

- **Route:** `/email/verify`
  - **Method:** GET
  - **Purpose:** Returns the email verification view.
  - **Pre-condition:** User must be authenticated.
  - **Post-condition:** Email verification view is returned.
  - **Responses:**
    - **200:** Email verification view returned.
    - **401:** Unauthorized.

- **Route:** `/email/verify/{id}/{hash}`
  - **Method:** GET
  - **Purpose:** Verifies the user's email.
  - **Parameters:**
    - **id:** string (path parameter)
    - **hash:** string (path parameter)
  - **Pre-condition:** User must be authenticated and URL must be signed.
  - **Post-condition:** Redirects to dashboard upon successful verification.
  - **Responses:**
    - **302:** Redirect to dashboard.
    - **401:** Unauthorized.

- **Route:** `/email/verification-notification`
  - **Method:** POST
  - **Purpose:** Sends a new email verification notification.
  - **Pre-condition:** User must be authenticated and request rate limited.
  - **Post-condition:** Verification link is sent to user.
  - **Responses:**
    - **200:** Verification link sent.
    - **401:** Unauthorized.

#### **2. Authentication and User Management Routes**

- **Route:** `/log`
  - **Method:** POST
  - **Purpose:** Endpoint to log data.
  - **Post-condition:** Data is logged.
  - **Responses:**
    - **200:** Data logged successfully.

- **Route:** `/login`
  - **Method:** POST
  - **Purpose:** Endpoint for user login.
  - **Post-condition:** User is logged in.
  - **Responses:**
    - **200:** Login successful.
    - **401:** Unauthorized.

- **Route:** `/register`
  - **Method:** POST
  - **Purpose:** Endpoint for user registration.
  - **Post-condition:** User is registered.
  - **Responses:**
    - **200:** Registration successful.
    - **401:** Unauthorized.

- **Route:** `/details`
  - **Method:** POST
  - **Purpose:** Returns user details.
  - **Pre-condition:** User must be authenticated with API key.
  - **Post-condition:** User details are returned.
  - **Responses:**
    - **200:** User details returned.
    - **401:** Unauthorized.

- **Route:** `/user`
  - **Method:** GET
  - **Purpose:** Returns the authenticated user's details.
  - **Pre-condition:** User must be authenticated with Sanctum.
  - **Post-condition:** User details are returned.
  - **Responses:**
    - **200:** User details returned.
    - **401:** Unauthorized.

- **Route:** `/userinfo`
  - **Method:** GET
  - **Purpose:** Returns information of the authenticated user.
  - **Pre-condition:** User must be authenticated with Sanctum.
  - **Post-condition:** User info is returned.
  - **Responses:**
    - **200:** User info returned.
    - **401:** Unauthorized.
