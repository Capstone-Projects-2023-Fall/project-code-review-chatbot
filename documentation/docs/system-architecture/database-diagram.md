---
sidebar_position: 5
---

# Database Diagram

<iframe width="560" height="315" src='https://dbdiagram.io/embed/6511acfaffbf5169f07566e8'> </iframe>

The following figure shows the entity relationship and table design of the database for the server. Users will be stored in the Suggestions table using a unique identifier from GitHub. This will require the user to be signed into GitHub to use the extension. Whenever a user receives a suggestion, The suggestion will be stored in the Suggestions table along with the path of the file being reviewed, the GitHub Repository ID, their GitHub User ID, and the line number. The repository ID will be a nullable field since it will not require a repository linked for reviews. All other fields will be required. There is only one table currently, but as more features are added, the database will be expanded when needed.
