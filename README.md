# Konect Mentor Website

A React TypeScript application with Tailwind CSS.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Create React App

## Setup and Development

### Installation

```bash
# Clone the repository (if you haven't already)
git clone https://github.com/dave8766/konect-mentor-website.git
cd konect-mentor-website

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
# Create a production build
npm run build
```

## Project Structure

- `src/` - Contains all source code
  - `components/` - React components
  - `pages/` - Page components
  - `types/` - TypeScript types and interfaces
  - `App.tsx` - Main application component
  - `index.tsx` - Application entry point

## Styling with Tailwind CSS

This project uses Tailwind CSS for styling. Tailwind utility classes can be used directly in your JSX:

```jsx
<div className="text-center p-4 bg-gray-100">
  <h1 className="text-2xl font-bold text-blue-600">Hello World</h1>
</div>
```

Check the [Tailwind documentation](https://tailwindcss.com/docs) for more information on available classes.