let
  pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/5c37ad87222cfc1ec36d6cd1364514a9efc2f7f2.tar.gz") {
    overlays = [
      (import (fetchTarball "https://github.com/railwayapp/nix-npm-overlay/archive/main.tar.gz"))
    ];
  };
in
pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs-20_x
    npm-9_x
    python3
    gnumake
    gcc
    pkg-config
  ];
}
