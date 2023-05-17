from nginx 

workdir /app

RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs

copy package*.json ./
run npm install

copy . . 
run npm run build
run rm -r /usr/share/nginx/html/*
run cp -r /app/build/* /usr/share/nginx/html/

