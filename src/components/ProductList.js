// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { observer } from "mobx-react";
import cookieStore from "../stores/CookieStore";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = cookieStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteProduct={cookieStore.deleteProduct}
        selectProduct={cookieStore.selectProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};

export default observer(ProductList);
