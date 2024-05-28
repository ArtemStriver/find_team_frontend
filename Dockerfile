FROM node:alpine as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
CMD ["npm", "start"]

#FROM nginx:stable-alpine
#
#COPY --from=build /app/build /usr/share/nginx/html
#COPY --from=build /app/.nginx/nginx.conf /etc/nginx/sites-enabled/default
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
