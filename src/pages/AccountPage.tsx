import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
 import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
 import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
 import Button from '@mui/material/Button';
 import Dialog from '@mui/material/Dialog';
 import DialogActions from '@mui/material/DialogActions';
 import DialogContent from '@mui/material/DialogContent';
 import DialogContentText from '@mui/material/DialogContentText';
 import DialogTitle from '@mui/material/DialogTitle';
 import { Box, Typography } from '@mui/material';
 import './AccountPage.css'; // Import the CSS file

 interface ProfileData {
   firstName: string;
   lastName: string;
   gradeLevel: string;
   phoneNumber: string;
   emailAddress: string;
   receiveNotifications: boolean;
   userRole: string;
 }

   // Define the interface for the props that the AccountPage component receives
 interface AccountPageProps {
   profileData: ProfileData;
 }

 const AccountPage: React.FC<AccountPageProps> = ({ profileData }) => {
   const navigate = useNavigate();
   const [showResetNotification, setShowResetNotification] = useState(false);
   const [showArchiveNotification, setShowArchiveNotification] = useState(false);
   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
   const [showDeleteSuccessNotification, setShowDeleteSuccessNotification] = useState(false);

   // Function to handle the initiation of the password reset process
   const handleResetPassword = () => {
     setShowResetNotification(true);
     setTimeout(() => {
       setShowResetNotification(false);
     }, 3000);
   };

   // Function to handle the process of archiving a user
   const handleArchiveUser = () => {
     setShowArchiveNotification(true);
     setTimeout(() => {
       setShowArchiveNotification(false);
     }, 3000);
   };

   // Function to handle the click event that triggers the delete account confirmation dialog
   const handleDeleteAccountClick = () => {
     setShowDeleteConfirmation(true);
   };

   // Function to handle the confirmation of the account deletion
   const handleDeleteConfirm = () => {
     setShowDeleteConfirmation(false);
     setShowDeleteSuccessNotification(true);
     setTimeout(() => {
        setShowDeleteSuccessNotification(false);
        navigate('/');
     }, 3000);
   };

   // Function to handle the cancellation of the account deletion
   const handleDeleteCancel = () => {
     setShowDeleteConfirmation(false);
   };

   return (
     <Box className="account-page-container">
       <div className="account-header">
         <ShieldRoundedIcon className="account-icon" />
         <Typography variant="h5" component="h3" color="inherit">
           Account Settings
         </Typography>
       </div>

       {/* Reset Password Section */}
       <h4 className="section-title">Reset Password</h4>
       <div className="account-section highlight-box">
         <InfoOutlinedIcon className="info-icon" />
         <p className="section-description">
           The user will be sent an email with a temporary password. After authentication, they will be prompted to change the password.
         </p>
         <Button onClick={handleResetPassword} variant="contained" className="account-button">
           Reset Password
         </Button>
       </div>

       {/* Archive User Section */}
       <h4 className="section-title">Archive User</h4>
       <div className="account-section highlight-box">
         <InfoOutlinedIcon className="info-icon" />
         <p className="section-description">
           The user will be hidden from the main list but can still be found through searching and reactivated if needed. Their information won't be deleted. Just tucked away for now.
         </p>
         <Button onClick={handleArchiveUser} variant="contained" className="account-button">
           Archive User
         </Button>
       </div>

       {/* Delete Account Section */}
       <h4 className="section-title delete-title">Delete Account</h4>
       <div className="account-section delete-box">
         <WarningRoundedIcon className="warning-icon" />
         <p className="section-description delete-description">
           <strong>This action is irreversible!</strong> Once the account is deleted, all associated data will be permanently removed and cannot be recovered. Please proceed with caution.
         </p>
         <Button onClick={handleDeleteAccountClick} variant="contained" className="account-button delete-button">
           Delete Account
         </Button>
       </div>

       {/* Notifications */}
       {showResetNotification && (
         <Box className="notification-box">
           An email was sent to {profileData.emailAddress}
         </Box>
       )}

       {showArchiveNotification && (
         <Box className="notification-box">
           The user was archived
         </Box>
       )}

       {showDeleteSuccessNotification && (
         <Box className="notification-box">
           User was successfully deleted
         </Box>
       )}

       {/* Delete Confirmation Dialog */}
       <Dialog
         open={showDeleteConfirmation}
         onClose={handleDeleteCancel}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
       >
         <DialogTitle id="alert-dialog-title">
           {"Confirm Delete Account"}
         </DialogTitle>
         <DialogContent>
           <DialogContentText id="alert-dialog-description">
             Are you sure you want to delete {`${profileData.firstName} ${profileData.lastName}`}?
           </DialogContentText>
         </DialogContent>
         <DialogActions>
           <Button onClick={handleDeleteCancel} color="primary">
             Cancel
           </Button>
           <Button onClick={handleDeleteConfirm} color="error" autoFocus>
             OK
           </Button>
         </DialogActions>
       </Dialog>
     </Box>
   );
 };

 export default AccountPage;