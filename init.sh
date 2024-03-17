#!/usr/bin/env bash

set -eu 
shell=$(echo "$SHELL")

function main() {
  # protoとvoltaのinstall
  install_proto
  install_volta
  # reloadしてパスを通す
  reload_shell
  # .prototoolsに記述されているものをinstallする
  proto u
  # スクリプトの終了後にコマンドが使えるようにシェルを再起動
  $SHELL -l
}

function install_proto() {
  if is_already_installed proto; then
    return
  fi
  echo "Installing proto..."
  /bin/bash -c "$(curl -fsSL https://moonrepo.dev/install/proto.sh)"
}

function install_volta() {
  if is_already_installed volta; then
    return
  fi
  echo "Installing volta..."
  /bin/bash -c "$(curl -fsSL https://get.volta.sh)"
  # MEMO: voltaのパス設定がうまくいかないので無理やりsetupを実行
  ~/.volta/bin/volta setup
}

function reload_shell() {  
  case "$shell" in
    */bash) source ~/.bashrc ;;
    */fish) source ~/.config/fish/config.fish ;;
    */zsh) source ~/.zshrc ;;
    *) echo "サポートされていないシェルです。" ;;
  esac
}

function is_already_installed() {
  local command_name=$1
  if command -v $command_name &>/dev/null; then
    echo "$command_name is already installed"
    return 0  
  else
    return 1
  fi
}

main