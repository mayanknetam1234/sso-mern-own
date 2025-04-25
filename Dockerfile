FROM node:18 


COPY docker-compose.yaml .

CMD ["npm", "run","dev"]