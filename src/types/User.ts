import { InjectionKey, Ref } from "vue";

export default interface User {
  id: number;
  name: string;
}
export type SetUser = (newUser: User) => void;

export const userKey: InjectionKey<Ref<User>> = Symbol("");

export const setUserKey: InjectionKey<SetUser> = Symbol("");
