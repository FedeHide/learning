### AUTH

"""
Authentication and authorization are two distinct concepts in backend systems that are often used together to control access and manage user identities:

Authentication:
Authentication is the process of verifying the identity of a user or system. It answers the question:
"Who are you?"

- Involves verifying credentials such as usernames, passwords, API keys, or tokens.
- Common authentication methods include:
    - Password-based authentication.
    - Multi-factor authentication (MFA).
    - OAuth or OpenID Connect (for third-party authentication).
    - Biometric authentication (fingerprint, facial recognition).

Example:
When you log in to a website with your email and password, the system authenticates you by checking if your credentials match those stored in its database.


Authorization:
Authorization determines what actions or resources an authenticated user has permission to access. It answers the question:
"What are you allowed to do?"

- Based on roles, permissions, or policies associated with the user or system.
- Often implemented using access control models, such as:
    - Role-Based Access Control (RBAC).
    - Attribute-Based Access Control (ABAC).
    - Policies defined by frameworks like AWS IAM or RBAC in Kubernetes.


Example:
After logging in (authentication), the system checks whether you are allowed to access the admin dashboard (authorization).

Key Differences:
Aspect  	    Authentication	        Authorization
Purpose 	    Verifying identity	    Determining access rights
Question        "Who are you?"	        "What can you do?"
Sequence        Happens first	        Happens after authentication
Data    	    Uses credentials	    Uses roles, permissions, policies


Both are essential for secure systems, but they serve different roles in user and access management.
"""
