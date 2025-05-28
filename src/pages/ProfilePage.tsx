import React, { useState, useEffect } from 'react';
 import PersonIcon from '@mui/icons-material/Person';
 import { Box, Typography } from '@mui/material';
 import './ProfilePage.css';

  // Define the interface for the profile data
 interface ProfileData {
   firstName: string;
   lastName: string;
   gradeLevel: string;
   phoneNumber: string;
   emailAddress: string;
   receiveNotifications: boolean;
   userRole: string;
 }

 // Define the interface for the props that the ProfilePage component receives
 interface ProfilePageProps {
   profileData: ProfileData;
   updateProfileData: (newProfileData: Partial<ProfileData>) => void;
 }

 const ProfilePage: React.FC<ProfilePageProps> = ({ profileData, updateProfileData }) => {
  // Use useState hook to manage the editing state (whether the profile is being edited)
   const [isEditing, setIsEditing] = useState(false);
   // Use useState to create a temporary copy of the profile data for editing
   const [tempProfileData, setTempProfileData] = useState<ProfileData>({ ...profileData });

   const gradeOptions = [
     'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade',
     '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade',
     '10th Grade', '11th Grade', '12th Grade', 'College Student',
   ];

   useEffect(() => {
     setTempProfileData({ ...profileData });
   }, [profileData]);

   // Function to handle input changes in the form fields
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
     const { name, value, type } = event.target;
     let newValue: string | boolean | undefined = value;

     if (type === 'checkbox' && event.target instanceof HTMLInputElement) {
       newValue = event.target.checked;
     }

     setTempProfileData((prevData) => ({
       ...prevData,
       [name]: newValue,
     }));
   };

   // Function to handle the "Edit Profile" button click
   const handleEditClick = () => {
     setIsEditing(true);
   };

   // Function to handle the "Save Profile" button click
   const handleSaveClick = () => {
     updateProfileData(tempProfileData);
     setIsEditing(false);
     console.log('Saving profile:', tempProfileData);
   };

   return (
     <Box className="profile-page-container">
       <div className="profile-header">
         <PersonIcon className="profile-icon" />
         <Typography variant="h5" component="h3" color="inherit">
           Profile Settings
         </Typography>
       </div>

       <div className="profile-form">
         <div className="form-row">
           <div className="form-field form-field-grow">
             <label htmlFor="firstName">First Name:</label>
             <input
               type="text"
               id="firstName"
               name="firstName"
               value={tempProfileData.firstName}
               onChange={handleInputChange}
               readOnly={!isEditing}
               className={isEditing ? "input-enabled" : "input-disabled"}
             />
           </div>
           <div className="form-field form-field-grow">
             <label htmlFor="lastName">Last Name:</label>
             <input
               type="text"
               id="lastName"
               name="lastName"
               value={tempProfileData.lastName}
               onChange={handleInputChange}
               readOnly={!isEditing}
               className={isEditing ? "input-enabled" : "input-disabled"}
             />
           </div>
         </div>

         <div className="form-field">
           <label htmlFor="gradeLevel">Grade Level:</label>
           <select
             id="gradeLevel"
             name="gradeLevel"
             value={tempProfileData.gradeLevel}
             onChange={handleInputChange}
             disabled={!isEditing}
             className={isEditing ? "input-enabled" : "input-disabled"}
           >
             {gradeOptions.map((grade) => (
               <option key={grade} value={grade}>
                 {grade}
               </option>
             ))}
           </select>
         </div>

         <div className="form-field">
           <label htmlFor="phoneNumber">Phone Number:</label>
           <input
             type="text"
             id="phoneNumber"
             name="phoneNumber"
             value={tempProfileData.phoneNumber}
             onChange={handleInputChange}
             readOnly={!isEditing}
             className={isEditing ? "input-enabled" : "input-disabled"}
           />
         </div>

         <div className="form-field">
           <label htmlFor="emailAddress">Email Address:</label>
           <input
             type="email"
             id="emailAddress"
             name="emailAddress"
             value={tempProfileData.emailAddress}
             onChange={handleInputChange}
             readOnly={!isEditing}
             className={isEditing ? "input-enabled" : "input-disabled"}
           />
         </div>

         <div className="form-field checkbox-field one-line">
           <label className="checkbox-label"> {/* Changed class name */}
             Receive Appointment Notifications
           </label>
           <input
             type="checkbox"
             name="receiveNotifications"
             checked={tempProfileData.receiveNotifications}
             onChange={handleInputChange}
             disabled={!isEditing}
           />
         </div>

         <hr />

         <div className="form-field">
           <label htmlFor="userRole">User Role:</label>
           <input
             type="text"
             id="userRole"
             name="userRole"
             value={tempProfileData.userRole}
             readOnly
             className="input-disabled"
           />
         </div>

         {!isEditing ? (
           <button onClick={handleEditClick} className="profile-button">
             Edit Profile
           </button>
         ) : (
           <button onClick={handleSaveClick} className="profile-button">
             Save Profile
           </button>
         )}
       </div>
     </Box>
   );
 };

 export default ProfilePage;