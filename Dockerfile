FROM cypress/included:15.11.0

WORKDIR /e2e

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "cy:run"]