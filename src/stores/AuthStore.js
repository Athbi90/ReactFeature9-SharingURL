import axios from "axios";
import instance from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import jwtDecode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const user = decode(token);
      if (user.exp >= Date.now()) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authroization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signout = () => {
    delete instance.defaults.headers.common.Authroization;
    localStorage.removeItem("myToken");
    this.user = null;
  };
  signup = async (userData) => {
    try {
      const response = await instance.post("/signup", userData);
      const token = response.data.token;
      this.setUser(token);
      console.log(token);
    } catch (error) {
      console.log("unable to sign up", error);
    }
  };

  signin = async (userData) => {
    try {
      const response = await instance.post("signin", userData);
      const token = response.data.token;
      this.setUser(token);
      console.log(token);
    } catch (error) {
      console.log("unable to sign in", error);
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
