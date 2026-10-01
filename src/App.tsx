import Connect from './components/Connect'
import { FacebookIcon, InstagramIcon } from './components/Icons'
import { FACEBOOK_URL, INSTAGRAM_URL, status } from './data/site'

export default function App() {
  return (
    <>
      <div className="atmos" aria-hidden="true" />
      <div className="wrap">
        <header className="masthead rise d1">
          <a className="wordmark" href="/">
            Mitchel&nbsp;Turner
          </a>
          <p className="mast-meta">
            Journalism · Research
            <br />
            Ketchikan, Alaska
          </p>
        </header>

        <section className="hero">
          <p className="kicker rise d1">Field notes from the coast</p>
          <h1 className="rise d2">
            There&apos;s something special about <em>telling someone a story.</em>
          </h1>
          <p className="hero-sub rise d3">Independent journalism &amp; research — Ketchikan, Alaska</p>
        </section>

        <div className="status rise d3" role="status">
          <p className="flag">
            <span className="beacon" aria-hidden="true" />
            {status.flag}
          </p>
          <p className="lede">
            {status.lede}
            <br />
            <span className="back">{status.back}</span>
          </p>
        </div>

        <section className="block" id="about">
          <h2 className="label">About</h2>
          <div className="about-grid">
            <figure className="portrait">
              <div className="frame">
                <img
                  src="./mitchel-turner.jpg"
                  alt="Mitchel Turner in Ketchikan, Alaska"
                  width={683}
                  height={1024}
                />
              </div>
              <figcaption>Mitchel Turner · Ketchikan, AK</figcaption>
            </figure>
            <div className="prose">
              <p>
                I moved to Ketchikan going on three years now. To be honest, I don&apos;t quite like
                the cold or the rain. But the people, the mountains, and the ocean make me hesitate
                when family asks if I&apos;m coming to visit.
              </p>
              <p>
                I met my wife here — got married on the north side of town. We both like to captain
                when needed, and help others around town when we&apos;re free. Journalism is just
                something extra for me.
              </p>
            </div>
          </div>
        </section>

        <section className="block" id="mission">
          <h2 className="label">Mission</h2>
          <div className="prose">
            <p>
              A lot of people like to hear about what&apos;s going on in town. I&apos;ve always liked
              being a part of it.
            </p>
            <p className="quiet">
              My mission? I don&apos;t quite have one — at least not yet. Maybe that&apos;ll change.
            </p>
            <p>
              I do like keeping people informed. There&apos;s something about telling someone a story:
              their reaction grows something, maybe even connects a dot or two. I think that&apos;s
              about all I&apos;m up to.
            </p>
          </div>
        </section>

        <section className="follow" id="follow">
          <h2>Where the stories go.</h2>
          <p className="note">
            The coverage lives on Instagram and Facebook — follow along for what&apos;s happening
            around town.
          </p>
          <div className="socials">
            <a className="social" href={INSTAGRAM_URL} target="_blank" rel="noopener">
              <InstagramIcon />
              <span className="social-text">
                <span className="name">Instagram</span>
                <span className="handle">@realmitchelturner</span>
              </span>
            </a>
            <a className="social" href={FACEBOOK_URL} target="_blank" rel="noopener">
              <FacebookIcon />
              <span className="social-text">
                <span className="name">Facebook</span>
                <span className="handle">@realmitchelturner</span>
              </span>
            </a>
          </div>
        </section>

        <Connect />

        <footer className="site-footer">
          <p>© 2026 Mitchel Turner</p>
          <div className="footer-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
