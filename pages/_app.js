import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}

import Prism from 'prism-react-renderer/prism'
(typeof global !== "undefined" ? global : window).Prism = Prism

require("prismjs/components/prism-toml");
require("prismjs/components/prism-ini");
require("prismjs/components/prism-sql")
