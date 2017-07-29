module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "root": true,
  "jsx-a11y/href-no-hash": "off",
  "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
}
