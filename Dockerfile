FROM node:20.10.0

WORKDIR /app

COPY dist/aftas-front/* .

EXPOSE 4200

RUN npm install -g http-server

CMD ["http-server", "-p", "4200"]














# FROM node:20.10.0 as build 

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# RUN npm install -g @angular/cli@16.1.6

# COPY . .

# RUN ng build --configuration=production

# # FROM nginx:latest

# # COPY --from=build app/dist/aftas-angular /usr/share/nginx/html

# EXPOSE 4200

# CMD ["ng","serve"]



