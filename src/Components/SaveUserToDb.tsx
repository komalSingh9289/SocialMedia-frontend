import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import axios, { AxiosError } from "axios";

interface UserData {
  clerkId: string;
  firstname: string | null;
  lastname: string | null;
  email: string | undefined;
  username: string | null;
  profilePic: string;
}

const SaveUserToDb = () => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const saveUser = async () => {
      if (!isLoaded || !user) return;

      const userData: UserData = {
        clerkId: user.id,
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.emailAddresses[0]?.emailAddress,
        username: user.username,
        profilePic: user.imageUrl,
      };

      try {
        const token = await getToken();
        const response = await axios.post(
          "http://localhost:5000/api/users",
          userData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("User saved:", response.data);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error(
          "Error saving user:",
          axiosError.response?.data || axiosError.message
        );
      }
    };

    saveUser();
  }, [isLoaded, user, getToken]);

  return null;
};

export default SaveUserToDb;