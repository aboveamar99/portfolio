export default function Home() {
  return (
    <div className="container">
      <img
        src="https://i.imgur.com/4M34hi2.png"
        alt="profile"
        className="avatar"
      />

      <h1>Amar</h1>
      <p className="title">Bot Developer • API Builder</p>

      <p className="bio">
        I build Telegram bots, APIs and automation tools.
        I work with JavaScript, Cloudflare Workers and Vercel.
      </p>

      <div className="skills">
        <span>Telegram Bots</span>
        <span>JavaScript</span>
        <span>APIs</span>
        <span>Cloudflare</span>
        <span>Vercel</span>
      </div>

      <div className="links">
        <a href="#" target="_blank">Telegram</a>
        <a href="#" target="_blank">GitHub</a>
        <a href="#" target="_blank">Instagram</a>
      </div>

      <footer>
        © {new Date().getFullYear()} Amar
      </footer>
    </div>
  );
          }
