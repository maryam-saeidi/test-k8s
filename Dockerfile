FROM node:latest

COPY app.js /app.js

ENTRYPOINT ["node", "/app.js"]
#ENTRYPOINT node /app.js