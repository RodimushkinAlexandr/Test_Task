import { defineStore } from "pinia";
import api from "../api/AxiosClient";
import Doc from "@/types/Doc";

interface DocsState {
  docs: Doc[];
  doc: Doc | null;
  errorSearch: boolean;
  findSearchId: number;
}

export const FindDocsStore = defineStore({
  id: "Docs",
  state: (): DocsState => ({
    docs: [],
    doc: null,
    errorSearch: false,
    findSearchId: 0,
  }),
  getters: {},
  actions: {
    async getAllDocs(): Promise<void> {
      try {
        const docs = await api.get("/user/docs");
        if (docs.status === 200) {
          this.docs = docs.data;
        }
      } catch (e) {
        this.errorSearch = true;
      }
    },
    async getOneDoc(): Promise<void> {
      try {
        this.doc = null;
        this.errorSearch = false;

        const doc = await api.get(`/user/docs?search=${this.findSearchId}`);
        //doc.status === 200 - хотел сделать так, но в случае ответа 0, статус всё равно 200((
        if (doc.data.length > 0) {
          setTimeout(() => {
            this.doc = doc.data[0];
          }, 1000);
        } else {
          this.doc = null;
          this.errorSearch = true;
        }
      } catch (e) {
        this.errorSearch = true;
      }
    },
    deleteDoc(id: number): void {
      try {
        this.docs = this.docs.filter((item) => item.id !== id);
        this.doc = null;
        this.findSearchId = 0;
      } catch (e) {
        console.log(e);
      }
    },
    GeterationFile() {
      const text = JSON.stringify(this.doc);
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Document.txt";
      a.style.display = "none";
      a.click();
      URL.revokeObjectURL(url);
      // document.body.removeChild(a);
    },
  },
});
