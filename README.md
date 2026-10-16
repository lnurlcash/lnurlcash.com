# lnurlcash.com

Marketing site for **LNURLcash** — the draft LNURL specifications
[LUD-25](https://github.com/lnurl/luds/blob/lnurlcash/25.md) (programmable
bearer notes) and [LUD-26](https://github.com/lnurl/luds/blob/lnurlcash/26.md)
(seed derivation, watch-only `cx1`, Lightning Address auto-mint), discussed in
[lnurl/luds#301](https://github.com/lnurl/luds/pull/301).

A note is a taproot output key `Q` a mint has credited with value; its
LNURL-withdraw `k1` is a spend of `Q` (`ck1` key path, `cw1` script path, or a
bearer note's hex preimage), so any LUD-03 wallet can still cash it out.

The page explains the spec and highlights the implementations:

- **Mint** — issues notes ([Python](https://github.com/lnurlcash/lnurl-mint),
  [Rust](https://github.com/lnurlcash/lnurl-mint-rust),
  [CLN plugin](https://github.com/lnurlcash/cln-mint))
- **Wallet** — carries them ([web](https://github.com/lnurlcash/lnurl-wallet),
  [desktop](https://github.com/lnurlcash/lnurl-wallet-native))
- **Vault** — ESP32-S3 hardware device that secures them offline ([lnurl-vault](https://github.com/lnurlcash/lnurl-vault))
- **Run** — hosted, self-managing mints, private beta ([run.lnurlcash.com](https://run.lnurlcash.com))

Libraries: [lnurlcash-core](https://github.com/lnurlcash/lnurlcash-core),
[lnurlcash-kit](https://github.com/lnurlcash/lnurlcash-kit),
[lnurlcash-kernel](https://github.com/lnurlcash/kernel); more on
[awesome-lnurlcash](https://github.com/lnurlcash/awesome-lnurlcash).

## Stack

Plain static HTML/CSS/JS, no build step — `index.html`, `styles.css`,
`script.js`, `favicon.svg`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes
the site to GitHub Pages (custom domain via `CNAME`).
