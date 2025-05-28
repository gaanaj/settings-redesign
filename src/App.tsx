import React, { useState } from 'react';
 import logo from './front_office_logo.png';
 import './App.css';

 import SubHeader from './components/SubHeader';
 import Sidebar from './components/Sidebar';
 import ProfilePage from './pages/ProfilePage';
 import AccountPage from './pages/AccountPage';
 import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 import { Box } from '@mui/material';

 // Define an interface for the structure of profile data
 interface ProfileData {
   firstName: string;
   lastName: string;
   gradeLevel: string;
   phoneNumber: string;
   emailAddress: string;
   receiveNotifications: boolean;
   userRole: string;
 }

 function App() {
   // Use useState hook to manage profile data
   const [profileData, setProfileData] = useState<ProfileData>({
     firstName: 'Ethan',
     lastName: 'Lin',
     gradeLevel: '12th Grade',
     phoneNumber: '4089669457',
     emailAddress: 'ethanili30@gmall.com',
     receiveNotifications: true,
     userRole: 'Student',
   });

   // Define a function to update profile data
   const updateProfileData = (newProfileData: Partial<ProfileData>) => {
     setProfileData((prevData) => ({ ...prevData, ...newProfileData }));
   };

   return (
     <Router>
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="Company Logo" />
           <h1 className="App-title">Swoon Learning</h1>
         </header>

         <SubHeader
           name={`${profileData.firstName} ${profileData.lastName}`}
           email={profileData.emailAddress}
           phone={profileData.phoneNumber}
         />

         {/* Use Material-UI Box for layout */}
         <Box display="flex">
           <Sidebar />
           <Box flexGrow={1} display="flex" flexDirection="column" alignItems="flex-start" padding="16px">

             <Box flexGrow={1} width="100%">
               <Routes>
                {/* Define the routes for navigation */}
                 <Route path="/profile" element={<ProfilePage profileData={profileData} updateProfileData={updateProfileData} />} />
                 <Route path="/account" element={<AccountPage profileData={profileData}/>} />
                 <Route path="/" element={<Navigate to="/profile" />} />
               </Routes>
             </Box>
           </Box>
         </Box>

       </div>
     </Router>
   );
 }

 export default App;