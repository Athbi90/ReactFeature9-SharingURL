import axios from "axios";
import { makeAutoObservable } from "mobx";

class AuthStore {
  user = [];
  constructor() {
    makeAutoObservable(this);
  }
  signup = (newUser) => {
    try {
      const response = axios.post("http://localhost:8000/signup", newUser);
      this.user = response.date;
    } catch (error) {
      console.log("unable to sign up", error);
    }
  };

  signin = (newUser) => {
    try {
      const response = axios.post("http://localhost:8000/signin", newUser);
      this.user = response.date;
    } catch (error) {
      console.log("unable to sign in", error);
    }
  };
}
const authStore = new AuthStore();
export default authStore;
