import React from 'react';
import authService from '../../appwrite/auth';

function Logoutbtn() {
  const handleLogout = async () => {
    await authService.logout();
    window.location.reload();  // 🔁 Simple full page reload
  };

  return (
    <button
      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logoutbtn;
