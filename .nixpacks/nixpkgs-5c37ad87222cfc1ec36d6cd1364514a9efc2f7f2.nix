let
  pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/5c37ad87222cfc1ec36d6cd1364514a9efc2f7f2.tar.gz") {
    overlays = [
      (import (fetchTarball "https://github.com/railwayapp/nix-npm-overlay/archive/main.tar.gz"))
    ];
  };
in
with pkgs;
buildEnv {
  name = "5c37ad87222cfc1ec36d6cd1364514a9efc2f7f2-env";
  paths = [
    (runCommand "node-env" {
      buildInputs = [];
    } ''
      mkdir -p $out
    '')
    gcc gnumake nodejs_20 nodePackages.npm python3 pkg-config
  ];
}