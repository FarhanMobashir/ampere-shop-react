export const AppFooter = ({}) => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <h4 className="footer-heading">AmpereJeans</h4>
        <small className="footer-subheading">
          Best place to get all kind of jeans
        </small>
        <a
          className="footer-link"
          href="https://github.com/FarhanMobashir/minions-talk"
        >
          Support
        </a>
        <a
          className="footer-link"
          href="https://www.youtube.com/watch?v=yLZazznWoAs&list=PLzvhQUIpvvuj5KPnyPyWsvgyzNkX_ACPA&index=6"
        >
          Contact Us
        </a>
      </div>
      <div className="footer-columns">
        <h4 className="footer-heading">Quick Links</h4>
        <small className="footer-subheading">
          Here is our listed quick links
        </small>
        <a className="footer-link" href="https://github.com/FarhanMobashir">
          Men
        </a>
        <a
          className="footer-link"
          href="https://mobile.twitter.com/MobashirFarhan"
        >
          Women
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/mobashirfarhan/"
        >
          Kids
        </a>
      </div>
      <div className="footer-columns">
        <h4 className="footer-heading">Blog</h4>
        <small className="footer-subheading">
          Have a look on our blogs
          <a href="https://funtranslations.com/api/minions">link Here</a>
        </small>
      </div>
    </footer>
  );
};
