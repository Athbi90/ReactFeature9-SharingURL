import axios from "axios";
import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CookieStore {
  products = [];
  constructor() {
    makeAutoObservable(this);
  }
  deleteProduct = (cookieId) => {
    this.products = this.products.filter((cookie) => cookie.id !== cookieId);
  };

  fetchProducts = async () => {
    try {
      const response = await instance.get("/products");
      this.products = response.data;
    } catch (error) {
      console.log(error);
    }
  };
  deleteProduct = async (id) => {
    try {
      await instance.delete(`/products/:${id}`);
      this.products = this.products.filter((product) => product.id !== +id);
    } catch (error) {
      console.log(error);
    }
  };
  createProduct = async (newProduct) => {
    try {
      const response = await instance.post("/products", newProduct);
      this.products.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateProduct = async (updatedProduct) => {
    try {
      await instance.put(`/products/${updatedProduct.id}`, updatedProduct);
      const product = this.products.find(
        (prod) => prod.id === updatedProduct.id
      );
      for (const key in product) {
        product[key] = updatedProduct[key];
      }
    } catch (error) {
      console.log(error);
    }
  };
}
const cookieStore = new CookieStore();
cookieStore.fetchProducts();
export default cookieStore;
