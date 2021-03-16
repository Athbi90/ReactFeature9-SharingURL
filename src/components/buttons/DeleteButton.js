// Styling
import { DeleteButtonStyled } from "../../styles";
import cookieStore from "../../stores/CookieStore";

const DeleteButton = (props) => {
  return (
    <DeleteButtonStyled
      onClick={() => cookieStore.deleteProduct(props.productId)}
    >
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
