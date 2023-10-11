import User from "@/types/User";
import { defineStore } from "pinia";

interface UserState {
  user: User;
}

export const UsersStore = defineStore({
  id: "User",
  state: (): UserState => ({
    user: {
      id: 123,
      name: "username",
    },
  }),
});
