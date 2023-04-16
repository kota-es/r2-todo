# 開発環境
FROM rust:1.68.2

WORKDIR /usr/src/app

COPY ./backend .

RUN cargo install cargo-watch

EXPOSE 8080
