import { useParams } from "react-router-dom";
import { useApi } from "../contexts/ApiContext";
import { useData } from "../contexts/DataContext";

export const SingleProduct = (props) => {
  const { productId } = useParams();
  const { usegetSingleProduct } = useApi();
  const { loading, data } = usegetSingleProduct(productId);
  const { state } = useData();

  console.log("state from reducer", state);

  return (
    <div>
      <h1>Single Product</h1>
      {loading ? <p>Loading...</p> : <p>{data.product.name}</p>}
    </div>
  );
};
