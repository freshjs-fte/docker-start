FROM node:14-alpine3.14

# смена рабочей директории
# аналогично RUN mkdir -p /server && cd /server
WORKDIR /server 

# копия файлов
COPY ./ ./

# запуск команд в консоли
RUN npm install

# зарезервировать порт в контейнере
EXPOSE 5000

# запуск приложения
CMD ["npm", "run", "start"]
