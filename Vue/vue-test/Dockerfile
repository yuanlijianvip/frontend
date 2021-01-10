FROM harbor.shannonai.com/public/frontend-node:v1.0.0 AS builder
COPY . /frontend
WORKDIR /frontend
RUN cnpm install
RUN cnpm run build

FROM harbor.shannonai.com/public/shannon-static-webserver:v1.2.0
WORKDIR /home/work
USER root
COPY --from=builder /frontend/dist /home/work/assets
RUN mkdir -p /home/work/logs && chown -R work:work /home/work/logs \
    && mkdir -p /home/work/conf && chown -R work:work /home/work/conf

