import { useEffect } from "react";

export default function ReviewsWidget() {
  useEffect(() => {
    // load script only once
    const scriptId = "EmbedSocialHashtagScript";
    if (document.getElementById(scriptId)) return;

    const js = document.createElement("script");
    js.id = scriptId;
    
    js.src = "https://embedsocial.com/cdn/ht.js";
    document.head.appendChild(js);
  }, []);

  return (
    <div>
      <div
        className="embedsocial-hashtag"
        data-ref="49ddf605d40b3253f2aa8096c1a0d5748bb966fa"
      >
        <a
          className="feed-powered-by-es feed-powered-by-es-slider-img es-widget-branding"
          href="https://embedsocial.com/blog/embed-google-reviews/"
          target="_blank"
          rel="noreferrer"
          title="Embed Google reviews"
        >
          <img
            src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
            alt="EmbedSocial"
          />
          <div className="es-widget-branding-text">Embed Google reviews</div>
        </a>
      </div>
    </div>
  );
}
