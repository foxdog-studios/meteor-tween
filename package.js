Package.describe({
  summary: "Super simple, fast and easy to use tweening engine.",
  version: "0.10.0_1",
  git: "https://github.com/foxdog-studios/meteor-tween"
});

Package.onUse(function (api) {
  api.addFiles("lib/Tween.js", "client");
  api.export("TWEEN", "client");
});

