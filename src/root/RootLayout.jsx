import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';


const RootLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-white", "text-gray-900");
    } else {
      document.body.classList.add("bg-white", "text-gray-900");
      document.body.classList.remove("bg-gray-900", "text-white");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
    </div>
  );
};

export default RootLayout;
