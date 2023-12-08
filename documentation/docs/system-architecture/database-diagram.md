# Database Diagram

<iframe width="560" height="315" src='https://dbdiagram.io/embed/6511acfaffbf5169f07566e8'> </iframe>

The following figure shows the entity relationship and table design of the database for the server. Users will be stored in the users table using a unique identifier generated. Whenever a user receives a response from ChatGPT, the response will be stored in the log_data table along with the with the git diff/hash of the file being reviewed if possible.

Many of the other tables are created for authentication, including oauth_access_tokens, oauth_auth_codes, oauth_clients, oauth_personal_access_clients, oauth_refresh_tokens, password_reset_tokens, password_resets, personal_access_tokens, and sessions.

There are two more tables focused around Laravel, which are the migrations table (for whenever tables are migrated into the Database), and failed_jobs (report any failed jobs).
