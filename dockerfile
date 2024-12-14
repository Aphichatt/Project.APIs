# ใช้ Node.js เป็น base image
FROM node:16

# ตั้งค่าที่เก็บ source code ใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json ไปยัง container
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอก source code ทั้งหมดไปยัง container
COPY . .

# กำหนด port ที่ต้องการ expose
EXPOSE 3000

# คำสั่งเริ่มต้นสำหรับรันแอปพลิเคชัน
CMD ["npm", "start"]
