# Django用のベースイメージを選択
FROM python:3.9-slim-buster

ENV PYTHONUNBUFFERED 1

# 必要なパッケージのインストール
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        python3-dev \
        python3-pip \
        python3-setuptools \
        libpq-dev \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# 必要なPythonパッケージのインストール
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ソースコードをコピー
COPY . /app


# ワーキングディレクトリの設定
WORKDIR /app
