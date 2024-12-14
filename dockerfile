# ใช้ Base Image สำหรับ Node.js
FROM node:16-slim

# ตั้งค่า Working Directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json (ถ้ามี)
COPY package*.json ./

# ติดตั้ง Dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดในโปรเจกต์ไปยัง Container
COPY . .

# เปิดพอร์ต (ถ้าแอปของคุณใช้พอร์ต เช่น 3000)
EXPOSE 3000

# ตั้งค่า Command สำหรับเริ่มแอป
CMD ["node", "app.js"]
