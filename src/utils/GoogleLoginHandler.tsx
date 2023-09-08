import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

class GoogleLoginHandler{
     static signIntoGoogle=async() =>{
        try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.error('Google Sign-In Error:', error);
          }
      }
      static signOutFromGoogle = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          await auth().signOut();
          console.log('Logged out successfully');
        } catch (error) {
          console.error('Sign-Out Error:', error);
        }
    }

    static getCurrentUserDetails=()=>{
        const user = auth().currentUser;
    if (user) {
      console.log('User ID:', user.uid);
      console.log('User Email:', user.email);
      console.log('User Display Name:', user.displayName);
      console.log('User Photo URL:', user.photoURL);
    }
}
 static sendVerificationCode = async (phoneNumber:string) => {
  try {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);

    // Store the confirmation object for later use
    return confirmation;
  } catch (error) {
    console.error('Send Verification Code Error:', error);
    throw error;
  }
};

// Function to verify the code entered by the user
static verifyCode = async (confirmation:any, code:any) => {
  try {
    await confirmation.confirm(code);
    const user = auth().currentUser;
    console.log('Authenticated User:', user);

    // You can handle the authenticated user as needed
  } catch (error) {
    console.error('Verification Error:', error);
    throw error;
  }
};
}
export default GoogleLoginHandler;