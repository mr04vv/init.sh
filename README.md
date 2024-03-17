# dotfiles

PCの初期セットアップのためのスクリプト

## Get Started

1. 初期で必要なものをインストールするシェルスクリプトを実行

```
$ sh init.sh
```

2. Macにインストールしたいアプリケーションを選択するWebアプリを立ち上げる
（アプリケーションのインストールを個別に行いたい方はスキップしても良いです）

```
$ cd apps/app-selector
$ bun i
$ bun dev
```

http://localhost:5173 にアクセス

インストールしたいアプリケーションを選択してコマンドをコピーボタンを押す

`scripts/installCommand.ts` の内容をコピーしたテキストに書き換える

（おそらくエディタが入ってない状態かと思うのでvimで編集してください（ごめんなさい））
```
$ vim {このリポジトリ}/scripts/installCommand.ts
```

3. bun shellのスクリプトを実行

```
$ cd {このリポジトリ}/scripts
$ bun install.ts
```
