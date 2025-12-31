Below is the Product Requirements Document (PRD) section for the Addis GigFind platform, detailing the pages, navigation, and styling.

# Addis GigFind: Interface & Navigation PRD

## 1. Design & Styling Overview

The platform’s user interface is designed to be **mobile-first** and adaptive, ensuring a uniform experience across desktop and smartphone browsers.

* 
**Styling Framework:** **Tailwind CSS** is used for utility-first styling to create a modern and aesthetically pleasing design.


* 
**Responsiveness:** The UI is optimized for rapid deployment and responsiveness to user feedback.


* 
**Navigation Logic:** Designed for natural flow to keep training needs low, allowing users to list or locate work with minimal effort.



---

## 2. Page & Module List

### 2.1. Common Public & Authentication Interfaces

These pages are accessible to guests and all registered users.

| UI ID | Interface Name | Primary User | Key Features |
| --- | --- | --- | --- |
| **UI-PUB-01** | **Landing / Home Page** | Guest | Features a "Hero" section, "Quick Search" bar, "How it Works" guide, and "Featured Categories".

 |
| **UI-AUTH-01** | **Sign In / Login** | All Actors | Secure form for Phone Number and Password with "Forgot Password" validation.

 |
| **UI-AUTH-02** | **Sign Up / Registration** | Guest | Role-selection screen ("Hire" vs "Work") followed by name and contact data collection.

 |
| **UI-PUB-02** | **Public Profile View** | All Actors | Displays bio, skills, verification status, and past review history to build trust.

 |

### 2.2. Freelancer Portal Interfaces

Optimized for finding work and building a professional reputation.

| UI ID | Interface Name | Primary User | Key Features |
| --- | --- | --- | --- |
| **UI-FRE-01** | **Freelancer Dashboard** | Freelancer | Summary of active applications, jobs in-progress, earnings, and verification status.

 |
| **UI-FRE-02** | **Find Work (Search)** | Freelancer | <br>**2-column layout** with a filter sidebar (category, location, budget) and gig cards grid.

 |
| **UI-FRE-03** | **Gig Details & Apply** | Freelancer | Detailed job view with an "Apply Now" button (disabled if ID is not verified).

 |
| **UI-FRE-04** | **ID Verification Upload** | Freelancer | Security screen for uploading photos of Kebele or Residence IDs.

 |
| **UI-FRE-05** | **My Jobs (Manager)** | Freelancer | <br>**Tabbed view** showing "Applied," "Active," and "Completed" jobs; access to messaging.

 |

### 2.3. Client Portal Interfaces

Optimized for posting requirements and managing hires.

| UI ID | Interface Name | Primary User | Key Features |
| --- | --- | --- | --- |
| **UI-CLI-01** | **Client Dashboard** | Client | Overview of active posts, total spending, and applicant notifications.

 |
| **UI-CLI-02** | **Post Gig Wizard** | Client | <br>**Multi-step form** to input job details and pin exact locations on a map.

 |
| **UI-CLI-03** | **Applicant Review** | Client | List view of applicants showing ratings, verification badges, and bids.

 |
| **UI-CLI-04** | **Active Job Manager** | Client | Manages ongoing contracts; contains the critical "Mark Job Completed" button.

 |
| **UI-CLI-05** | **Rate Freelancer Modal** | Client | A pop-up or screen for submitting 1–5 star ratings and text feedback.

 |

### 2.4. Administrative & Regulatory Interfaces

Backend systems for governance and oversight.

| UI ID | Interface Name | Primary User | Key Features |
| --- | --- | --- | --- |
| **UI-ADM-01** | **System Dashboard** | Admin | Analytics for total users, active gigs, and pending disputes/verifications.

 |
| **UI-ADM-02** | **ID Verification Queue** | Admin | <br>**Split-screen interface** to compare user profiles against uploaded ID images.

 |
| **UI-ADM-03** | **Moderation Panel** | Admin | List of flagged content allowing admins to ban users or delete spam/abuse.

 |
| **UI-REG-01** | **Compliance Report** | Regulator | <br>**Read-only dashboard** showing aggregated market data for monitoring.

 |

---

## 3. Core Navigation & Business Rules

* 
**Role Separation:** Users register as either a Client or Freelancer; access is restricted by this primary role.


* 
**Application Prerequisites:** Freelancers cannot apply for gigs until their profile (bio, skills, photo) is complete.


* 
**Communication Flow:** In-app messaging is only enabled after a hire is confirmed or an application is submitted to prevent harassment.


* 
**Job Completion:** Only the client can mark a job as completed, which then triggers the mandatory rating system.

---

## 4. Implementation Checklist

- [x] **UI-PUB-01**: Landing / Home Page
- [x] **UI-AUTH-01**: Sign In / Login
- [x] **UI-AUTH-02**: Sign Up / Registration
- [ ] **UI-PUB-02**: Public Profile View
- [x] **UI-FRE-01**: Freelancer Dashboard
- [x] **UI-FRE-02**: Find Work (Search)
- [x] **UI-FRE-03**: Gig Details & Apply
- [ ] **UI-FRE-04**: ID Verification Upload
- [x] **UI-FRE-05**: My Jobs (Manager)
- [x] **UI-CLI-01**: Client Dashboard
- [x] **UI-CLI-02**: Post Gig Wizard
- [ ] **UI-CLI-03**: Applicant Review
- [x] **UI-CLI-04**: Active Job Manager
- [ ] **UI-CLI-05**: Rate Freelancer Modal
- [ ] **UI-ADM-01**: System Dashboard
- [ ] **UI-ADM-02**: ID Verification Queue
- [ ] **UI-ADM-03**: Moderation Panel
- [ ] **UI-REG-01**: Compliance Report
- [x] **Services Page** (Additional)
- [x] **About Us Page** (Additional)