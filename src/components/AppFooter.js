export const AppFooter = ({}) => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <h4 className="footer-heading">AmpereJeans</h4>
        <small className="footer-subheading">
          Made with MockBee and AmpereUi
        </small>
        <a
          className="footer-link"
          href="https://github.com/FarhanMobashir/ampere-shop-react"
        >
          Source Code
        </a>
      </div>
      <div className="footer-columns">
        <h4 className="footer-heading">Share your feedback</h4>
        <small className="footer-subheading">
          Here is our listed quick links
        </small>
        <a className="footer-link" href="https://github.com/FarhanMobashir">
          Github
        </a>
        <a
          className="footer-link"
          href="https://mobile.twitter.com/MobashirFarhan"
        >
          Twitter
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/mobashirfarhan/"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
