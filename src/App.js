import { Route, Routes, useNavigate } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { AuthScreen } from "./screens/AuthScreen";
import { CartScreen } from "./screens/CartScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductsScreen } from "./screens/ProductsScreen";
import { WishlistScreen } from "./screens/WishListScreen";
import Mockman from "mockman-js";
import { AuthProvider } from "./contexts/AuthContex";
import { PrivateRoute } from "./components/PrivateRoute";
import { ApiProvider } from "./contexts/ApiContext";
import { DataProvider } from "./contexts/DataContext";
import { EmptyState } from "./components/EmptyState";
import errorImage from "./assets/sleep.png";
function App() {
  const navigate = useNavigate();
  return (
    <DataProvider>
      <AuthProvider>
        <ApiProvider>
          <Routes>
            {/* public routes  */}
            <Route path="/" element={<AppLayout />}>
              <Route
                path="*"
                exact
                element={
                  <EmptyState
                    title="404 Error : Page Not found"
                    description="This is not where you should be"
                    onButtonClick={() => navigate("/products")}
                    buttonText="Start Shopping"
                    imageUrl={errorImage}
                  />
                }
              />
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
        </ApiProvider>
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
