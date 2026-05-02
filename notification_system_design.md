# Notification System Design

## Overview
This application displays campus notifications with priority handling.

## API Integration
- Fetches notifications using REST API
- Supports pagination and filtering

## Priority Logic
Priority is calculated based on:
- Placement > Event > Result
- Recency (latest first)

Score formula:
Score = (Weight × Large Constant) + Timestamp

## Frontend Architecture
- React (component-based)
- TailwindCSS (styling)
- Axios (API calls)

## Components
- Navbar
- FilterBar
- PriorityInbox
- NotificationCard

## Enhancements
- Read/unread state
- Responsive UI
- Error handling