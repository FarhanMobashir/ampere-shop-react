import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { AuthScreen } from "./screens/AuthScreen";
import { CartScreen } from "./screens/CartScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductsScreen } from "./screens/ProductsScreen";
import { WishlistScreen } from "./screens/WishListScreen";
import Mockman from "mockman-js";
import { AuthProvider } from "./contexts/AuthContex";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/mock" element={<Mockman />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/products" element={<ProductsScreen />} />
          {/* private routes  */}
          <Route path="/user">
            <Route
              path="/user/cart"
              element={
                <PrivateRoute>
                  <CartScreen />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/wishlist"
              element={
                <PrivateRoute>
                  <WishlistScreen />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
