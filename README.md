# lnurlcash.com

Marketing site for **LNURLcash** (LUD-25) — a draft LNURL specification that
turns an ordinary LNURL-withdraw `k1` into a bearer note: copy it, print it,
tap it over NFC, hand it to whoever's next to you, and whoever holds the
secret can redeem it, using only existing LUD-03 / LUD-06 semantics.

The page introduces the spec and highlights the three reference
implementations:

- **Mint** — backend that issues notes ([lnurl-mint](https://github.com/dni/lnurl-mint))
- **Wallet** — browser-based wallet that carries them ([lnurl-wallet](https://github.com/dni/lnurl-wallet))
- **Vault** — ESP32-S3 hardware device that secures them offline ([lnurl-vault](https://github.com/dni/lnurl-vault))

Broader language libraries are tracked on
[awesome-lnurlcash](https://github.com/lnurlcash/awesome-lnurlcash).

## Stack

Plain static HTML/CSS/JS, no build step — `index.html`, `styles.css`,
`script.js`, `favicon.svg`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes
the site to GitHub Pages (custom domain via `CNAME`).
