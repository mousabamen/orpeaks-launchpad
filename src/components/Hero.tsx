const Hero = () => {
  return (
    <section id="Hero" className="home-header-wrap alignfull text-align-left">
      <div className="home-header">
        <div className="container-flex">
          <div className="desc-wrap">
            <div className="desc">
              <h1>Be the next big thing</h1>
              <p>ORPEAKS gives you everything you need to start and grow your online business in the MENA region.</p>
              <div className="buttons-wrap">
                <a href="#start" className="btn blue large">Start for Free</a>
                <a href="#features" className="btn white large">Explore Features</a>
              </div>
            </div>

            <div className="visual">
              <picture>
                <source width="1848" height="2020" srcSet="https://spreecommerce.org/wp-content/themes/spree/images/home-visual.webp" media="(min-width: 1025px)" />
                <source width="1000" height="1093" srcSet="https://spreecommerce.org/wp-content/themes/spree/images/home-visual-mobile.webp" media="(min-width: 768px) and (max-width: 1024px)" />
                <img width="1" height="1" src="https://spreecommerce.org/wp-content/themes/spree/images/blank.webp" alt="" />
              </picture>
            </div>

            <div className="header-logos-wrap" aria-label="Trusted by logos">
              <div className="logos-swiper-wrap">
                <div className="logos-marquee" role="presentation">
                  <div className="track">
                    <img width="108" height="40" src="/cdn.../kfc.svg" alt="KFC" />
                    <img width="108" height="40" src="/cdn.../meundies.svg" alt="MeUndies" />
                    <img width="108" height="40" src="/cdn.../mitchells.svg" alt="Mitchells" />
                    <img width="108" height="40" src="/cdn.../on-cloud.svg" alt="On Cloud" />
                    <img width="108" height="40" src="/cdn.../paneco.svg" alt="Paneco" />
                    <img width="108" height="40" src="/cdn.../Square_LogoLockup_Black-1.svg" alt="Square" />
                    <img width="108" height="40" src="/cdn.../stylemyle.svg" alt="Stylemyle" />
                    <img width="108" height="40" src="/cdn.../bonobos.svg" alt="Bonobos" />
                    <img width="108" height="40" src="/cdn.../bookshop.svg" alt="Bookshop" />
                    <img width="108" height="40" src="/cdn.../godaddy.svg" alt="GoDaddy" />
                    <img width="108" height="40" src="/cdn.../goop.svg" alt="Goop" />
                    <img width="108" height="40" src="/cdn.../huckberry.svg" alt="Huckberry" />

                    <img width="108" height="40" src="/cdn.../kfc.svg" alt="KFC" aria-hidden="true" />
                    <img width="108" height="40" src="/cdn.../meundies.svg" alt="MeUndies" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside id="LaunchStrip" className="five-info" aria-label="Release highlight">
            <p className="claim">Bigger, Better, More</p>
            <p className="five">
              <img width="120" height="120" src="https://spreecommerce.org/wp-content/themes/spree/images/five.webp" alt="" />
            </p>
            <p className="title">The Biggest<br/>Release Ever</p>
            <a href="#" className="btn-icon lightblue2" aria-label="Read about the release">
              <img width="24" height="24" src="https://spreecommerce.org/wp-content/themes/spree/images/arrow-right-top.svg" alt="" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
