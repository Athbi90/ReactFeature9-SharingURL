import axios from "axios";
import { makeAutoObservable } from "mobx";
import products from "../products.js";
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
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
    } catch (error) {
      console.log(error);
    }
  };
  deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/products/:${id}`);
      this.products = this.products.filter((product) => product.id !== +id);
    } catch (error) {
      console.log(error);
    }
  };
  createProduct = async (newProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/products",
        newProduct
      );
      this.products.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateProduct = async (updatedProduct) => {
    try {
      await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        updatedProduct
      );
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
