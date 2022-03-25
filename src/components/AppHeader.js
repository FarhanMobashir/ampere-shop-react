import { CustomedNavLink } from "./CustomNavLink";
import { HeaderIcon } from "./HeaderIcon";
import { HeaderSearch } from "./HeaderSearchBig";

export const AppHeader = () => {
  const activeStyleForIcons = {
    background: "none",
    textDecoration: "none",
    color: "black",
    borderTop: "4px solid red",
    padding: "4px",
  };

  const activeStyleForLogo = {
    background: "none",
    textDecoration: "none",
    padding: "4px",
  };

  const inActiveStyle = {
    textDecoration: "none",
    color: "black",
    margin: "5px 0px",
    padding: "4px",
  };

  return (
    <header id="header">
      <div className="navigation-container">
        <div className="upper-container">
          <div className="logo-and-menu">
            {/* <i className="drawer-menu-icon uil uil-bars"></i> */}
            <h1 className="h1 logo-short">
              <CustomedNavLink to="/" activeStyle={activeStyleForLogo}>
                a.
              </CustomedNavLink>
            </h1>
            <h1 className="h4 logo">
              <CustomedNavLink to="/" activeStyle={activeStyleForLogo}>
                AmpereJeans
              </CustomedNavLink>
            </h1>
          </div>
          <div className="navigation-link-container">
            <CustomedNavLink to="/">
              <h4 className="navigation-link" to="#">
                MEN
              </h4>
            </CustomedNavLink>
            <CustomedNavLink to="/">
              <h4 className="navigation-link" to="#">
                WOMEN
              </h4>
            </CustomedNavLink>
            <CustomedNavLink to="/">
              <h4 className="navigation-link" to="#">
                KIDS
              </h4>
            </CustomedNavLink>
          </div>
          <HeaderSearch size="big" />
          <div className="nav-icon-container">
            <CustomedNavLink to="/user/cart">
              <HeaderIcon
                iconName={"uil-shopping-cart"}
                withBadge={true}
                badgeCount={2}
              />
            </CustomedNavLink>
            <CustomedNavLink to="/user/wishlist">
              <HeaderIcon
                iconName={"uil-heart"}
                withBadge={true}
                badgeCount={`9+`}
              />
            </CustomedNavLink>
            <CustomedNavLink to="/auth">
              <HeaderIcon
                iconName={"uil-user-circle"}
                withBadge={false}
                onClick={() => console.log("Clicked")}
              />
            </CustomedNavLink>
          </div>
        </div>
        <HeaderSearch size="small" />
      </div>
    </header>
  );
};