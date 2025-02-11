import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const usersRef = db.collection("USERS");

export const fetchUserData = async (userId: string): Promise<User | null> => {
  const userDoc = await usersRef.doc(userId).get();
  if (!userDoc.exists) return null;
  return { id: userDoc.id, ...userDoc.data() } as User;
};

export const updateUserData = async (userId: string, data: Partial<User>) => {
  await usersRef.doc(userId).update(data);
};
