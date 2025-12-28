# 🆘 SAHAYAK – Emergency Safety Platform  
### Google TechSprint Submission

<img width="1918" height="900" alt="image" src="https://github.com/user-attachments/assets/2a93f434-1b08-4120-a6c4-054ac1aeb535" />


---

## 📌 Problem Statement

In emergency situations, **every second matters**.  
People often struggle to:
- Find nearby **hospitals, police stations, or fire brigades**
- Share their **live location** quickly
- Get **immediate first-aid guidance**
- Alert trusted contacts during panic situations

Lack of centralized, fast, and intelligent emergency support can lead to **delayed response and loss of life**.

---

## 💡 Solution Overview

**SAHAYAK** is an **AI-powered emergency safety web application** that acts as a **digital first responder**.

It enables users to:
- Instantly detect **live location**
- Locate nearby **emergency services**
- Send **SOS alerts with Google Maps location**
- Receive **AI-guided emergency instructions**
- Access all features through a **simple, responsive interface**

> *SAHAYAK means “helper” — built to help when it matters most.*

---

## 🎯 Key Features

### 📍 Live Location Assistance
- Requests real-time geolocation permission
- High-accuracy GPS tracking
- Works on both mobile & desktop browsers

### 🏥 Emergency Services Finder
- Nearby **Hospitals**
- Nearby **Police Stations**
- Nearby **Fire Brigades**
- Powered by **OpenStreetMap (Overpass API)**

### 🗺️ Interactive Map View
- Displays user location
- Pins nearby emergency services
- Optimized map height for better UX

### 🚨 Floating SOS Button
- Always accessible (bottom-right bubble)
- Sends **SOS email alerts** via EmailJS
- Includes **live Google Maps location link**

### 🧠 AI Emergency Guidance
- Predefined emergency scenarios:
  - Heart Attack
  - Burns
  - Choking
  - Bleeding
  - Seizures
  - Road Accidents
  - Panic Attacks
- Provides **step-by-step first-aid instructions**

### 📱 Responsive Design
- Mobile-first UI
- Fully optimized for desktop & tablet
- Light & Dark mode support

---

## 🛠️ Technology Stack

### Frontend
- **React + TypeScript**
- **Vite** (Fast build & dev server)
- **Tailwind CSS**
- **ShadCN UI**

### APIs & Services
- **Google Firebase**
  - Analytics
  - Authentication-ready
- **OpenStreetMap (Overpass API)**
- **EmailJS** – SOS Email Alerts

### Deployment
- **Netlify**

---

## Configure Environment Variables

```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

```

---

## Author 
### Payal SamarKumar Sahu | Google TechSprint Participant
