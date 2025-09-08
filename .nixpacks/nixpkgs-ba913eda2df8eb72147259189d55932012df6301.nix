let
  pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/ba913eda2df8eb72147259189d55932012df6301.tar.gz") {
    overlays = [];
  };
in
with pkgs;
buildEnv {
  name = "ba913eda2df8eb72147259189d55932012df6301-env";
  paths = [
    (runCommand "node-env" {
      buildInputs = [];
    } ''
      mkdir -p $out
    '')
    caddy
  ];
}