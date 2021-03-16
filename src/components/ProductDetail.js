// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import cookieStore from "../stores/CookieStore";

const ProductDetail = (props) => {
  const product = props.product;

  return (
    <DetailWrapper>
      <p onClick={props.selectProduct}>Back to Products</p>
      <h1>{cookieStore.products.name}</h1>
      <img src={cookieStore.products.image} alt={cookieStore.products.name} />
      <p>{cookieStore.products.description}</p>
      <p>{cookieStore.products.price} KD</p>
      <DeleteButton
        productId={cookieStore.products.id}
        deleteProduct={cookieStore.deleteProduct(cookieStore.products.id)}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
