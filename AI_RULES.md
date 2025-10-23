# AI Rules for Granja Primavera Application

This document outlines the core technologies used in this project and provides guidelines for library usage to maintain consistency and best practices.

## Tech Stack Overview

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
*   **Vite**: A fast build tool that provides an extremely quick development experience.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS, providing accessible and customizable UI elements.
*   **React Router**: A standard library for routing in React applications, enabling navigation between different views.
*   **React Query**: A powerful library for fetching, caching, and updating asynchronous data in React, simplifying server state management.
*   **Lucide React**: A library providing a collection of beautiful and customizable open-source icons.
*   **React Hook Form & Zod**: Used together for efficient and robust form management and validation.
*   **Sonner**: A modern toast library for displaying notifications.

## Library Usage Rules

To ensure consistency and leverage the existing setup, please adhere to the following guidelines when developing new features or modifying existing ones:

*   **UI Components**: Always prioritize `shadcn/ui` components for all user interface elements (buttons, forms, dialogs, etc.). If a specific component is not available in `shadcn/ui`, create a new, small component following the existing styling conventions.
*   **Styling**: Use **Tailwind CSS** exclusively for all styling. Avoid writing custom CSS classes in `src/App.css` or inline styles unless absolutely necessary for dynamic values.
*   **Routing**: Use **React Router** for all navigation within the application. Define new routes in `src/App.tsx`.
*   **Data Fetching & Server State**: Utilize **React Query** for managing all asynchronous data operations, including fetching, caching, and mutations.
*   **Icons**: Use icons from the **Lucide React** library.
*   **Form Handling**: Implement forms using **React Hook Form** for state management and **Zod** for schema validation.
*   **Toasts/Notifications**: For displaying user notifications, use the **Sonner** component.
*   **Date Pickers**: For date selection, use `react-day-picker`.
*   **Carousels**: For image or content carousels, use `embla-carousel-react`.
*   **New Components**: Create a new file for every new component or hook, no matter how small. Do not add new components to existing files.
*   **File Structure**: Maintain the existing file structure: `src/pages` for pages, `src/components` for UI components, `src/hooks` for custom hooks, and `src/lib` for utility functions.