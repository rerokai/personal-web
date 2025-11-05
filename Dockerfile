FROM nginx:alpine
COPY build /usr/share/nginx/html
EXPOSE 80
CMD sh -c "echo \"[$(date '+%Y-%m-%d %H:%M:%S')] $(hostname): Hostitsya i dolzno rabotat na 80 porty\" && nginx -g 'daemon off;'"
