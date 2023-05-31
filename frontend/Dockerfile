# React用のベースイメージを選択
FROM node:18.16.0

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y build-essential

# ワーキングディレクトリの設定
WORKDIR /app

# Reactの依存パッケージをインストール
COPY medicine-alert/package.json ./
COPY medicine-alert/package-lock.json ./
RUN npm install

# ソースコードをコピー
COPY medicine-alert/ ./

# ポート3000を公開
EXPOSE 3000

# コンテナ起動時のコマンド
CMD ["npm", "start"]