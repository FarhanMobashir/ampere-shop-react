import { useParams } from "react-router-dom";
import { useApi } from "../contexts/ApiContext";

export const SingleProduct = (props) => {
  const { productId } = useParams();
  console.log(productId);
  const { usegetSingleProduct } = useApi();
  const { loading, data } = usegetSingleProduct(productId);
  if (!loading) {
    console.log(data);
  }
  return (
    <div>
      <h1>Single Product</h1>
      {loading ? <p>Loading...</p> : <p>{data.product.name}</p>}
    </div>
  );
};
