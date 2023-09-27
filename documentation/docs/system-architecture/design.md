---
sidebar_position: 1
---

**Purpose**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Requirements**

In addition to the general requirements the Design Document - Part I Architecture will contain:

A description the different components and their interfaces. For example: client, server, database.

For each component provide class diagrams showing the classes to be developed (or used) and their relationship.

Sequence diagrams showing the data flow for _all_ use cases. One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams.

Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc.

#### Database Diagram
![image](https://github.com/Capstone-Projects-2023-Fall/project-code-review-chatbot/assets/70736675/279f0073-5133-4921-9478-e2ade1a231f7)

The following figure shows the entity relationship and table design of the database for the server. Users will be stored in the Users table using a unique identifier from GitHub. This will require the user to be signed into GitHub to use the extension. Whenever a user receives a suggestion, an entry will be made in the Repositories table to identify the repository the user is working on (if there is one). The suggestion will be stored in the Suggestions table along with the path of the file being reviewed, the Repository ID, and the line number. The repository ID will be a nullable field since it will not be required to have a repository linked for reviews. All other fields will be required.


Table design.

A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance.
