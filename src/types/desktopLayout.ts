import { InjectionKey, Ref } from "vue";

export default interface desktopLayout {
  boolean: boolean;
}
export const desktopLayoutKey: InjectionKey<Ref<desktopLayout>> = Symbol("");
