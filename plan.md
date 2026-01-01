To ensure that **Israel** and **Abel** can develop the Addis GigFind platform without encountering GitHub merge conflicts, the workload is divided by **Functional Modules**. By assigning distinct user portals and their associated logic to each developer, you minimize the chances of two people editing the same files or routes simultaneously.

### Development Strategy to Avoid Conflicts

1. **Directory Isolation:** Abel will work primarily within `/src/components/freelancer` and Israel within `/src/components/client`.
2. **Route Decoupling:** Define top-level routes (e.g., `/freelancer/*` and `/client/*`) in the main router file once, then each developer manages their own sub-routes.
3. **Branching:** Use specific feature branches: `feature/freelancer-module` and `feature/client-module`.

---

### Workload Division Table

| Developer | Assigned Module | Pages (UI IDs) | Key Responsibilities |
| --- | --- | --- | --- |
| **Israel** | **Client & Public Entry** | UI-PUB-01, UI-AUTH-01, UI-AUTH-02, UI-CLI-01, UI-CLI-02, UI-CLI-03, UI-CLI-04, UI-CLI-05 | Focus on the "Demand" side: Landing page, Authentication flow, the **Post Gig Wizard**, and Applicant Review management. |
| **Abel** | **Freelancer & Verification** | UI-PUB-02, UI-FRE-01, UI-FRE-02, UI-FRE-03, UI-FRE-04, UI-FRE-05, UI-ADM-02 | Focus on the "Supply" side: The **Find Work (Search)** interface, Gig Application logic, ID Verification uploads, and the Admin ID Review queue. |

---

### Detailed Task Breakdown

#### Israel: Client & Infrastructure

* **Landing & Auth:** Create the shared entry point (UI-PUB-01) and the login/signup logic that redirects users based on their role.
* **The Client Journey:** Build the multi-step form for posting jobs (UI-CLI-02) including the Map integration for pinning locations.
* **Contract Management:** Develop the interface where clients view bids and the final "Mark Job Completed" action that triggers the rating system.

#### Abel: Freelancer & Trust Systems

* **The Marketplace:** Build the 2-column search interface (UI-FRE-02) with category and location filters for freelancers to browse gigs.
* **Identity & Verification:** Implement the security-sensitive ID upload screen (UI-FRE-04) and the corresponding admin view (UI-ADM-02) to verify users.
* **Profile System:** Design the public-facing profile (UI-PUB-02) that dynamically pulls skills, badges, and work history.

### Shared Assets Coordination

To prevent conflicts in shared files (like `App.css` or `global.json`), it is recommended to:

* Use **Tailwind CSS** classes directly in components to avoid editing a central stylesheet.
* Establish a **naming convention** for API endpoints (e.g., Israel handles `/api/client/...` and Abel handles `/api/freelancer/...`).

---

### Recent Significant Changes

* Added a reusable confirmation modal component and integrated confirmation steps before toast-triggering actions that are destructive/irreversible (e.g., approve/reject verification, moderation delete/ban, withdraw application, mark gig completed, profile save actions).
* Added Freelancer dashboard features: Messages tab/page, Upload ID tab routed to the ID verification page, and a Finished Works section on My Applications with a rating modal.