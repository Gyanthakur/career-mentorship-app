# 🚀 Career Mentorship Platform

<div align="center">
  <img src="https://github.com/user-attachments/assets/a83b3fb4-dcb4-42d7-b8d5-142f0ea3586c" 
       alt="logo" 
       width="400" 
       height="400" />
</div>



A **next-gen mentorship and expert platform** that helps learners connect with professionals worldwide. Experts can build trust, share knowledge, and grow revenue, while learners can explore categories, access roadmaps, and grow in their careers.

---

## 📂 Project Structure

### Client (Frontend)

```
client/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── assets/          
│   ├── components/      
│   ├── context/         
│   ├── data/           
│   ├── hooks/           
│   ├── pages/           
│   ├── roadmap/         
│   ├── routes/          
│   ├── services/        
│   ├── skills/          
│   ├── App.jsx          
│   ├── index.css        
│   ├── main.jsx         
├── .env                 
├── .gitignore
├── eslint.config.js     
├── index.html           
├── package.json         
├── postcss.config.js   
├── tailwind.config.js  
├── vercel.json          
```

### Server (Backend)

```
server/
├── config/
│   ├── cloudinary.js    
│   ├── mongodb.js      
├── controllers/
│   ├── authController.js   
│   ├── chatController.js    
│   ├── mentorController.js  
│   ├── studentController.js 
├── middleware/
│   ├── authStudents.js 
│   ├── errorHandler.js  
│   ├── multer.js        
├── models/              
├── routes/
│   ├── authRoutes.js    
│   ├── chatRoutes.js    
│   ├── mentorRoutes.js  
│   ├── studentRoutes.js 
├── utils/               
├── .env                 
├── server.js            
├── package.json         
├── vercel.json         
```

---

## ✨ Features

* 🧑‍🏫 **Expert Categories** – Explore experts across domains like Cloud, ML, Blockchain, Design, etc.
* 📚 **Roadmaps & Resources** – Access curated PDFs and learning paths.
* 💬 **Chat with Mentors** – Real-time mentor-mentee interaction.
* 🔐 **Authentication** – Secure login/signup for students and mentors.
* 📈 **Career Growth** – Guidance, consulting, and skill-building.
* 🌗 **Dark Mode Support** – Smooth UI with TailwindCSS theming.

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React.js
* 🎨 Tailwind CSS
* ⚡ Vite
* 🌐 React Router

### Backend

* 🟢 Node.js
* 🚀 Express.js
* 🍃 MongoDB
* ☁️ Cloudinary (for media uploads)

### Deployment

* ▲ Vercel

---

## ⚙️ Setup Instructions

### Prerequisites

* Node.js (v16+)
* MongoDB instance (local or Atlas)
* Cloudinary account (for media uploads)

### Clone the Repository

```bash
git clone https://github.com/Gyanthakur/career-mentorship-app.git
cd career-mentorship-app
```

### Install Dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd server
npm install
```

### Environment Variables

Create `.env` in both `client` and `server` folders.

#### Client `.env`

```
VITE_API_URL=http://localhost:5000/api
```

#### Server `.env`

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Run the App

#### Start Backend

```bash
cd server
npm run server
```

#### Start Frontend

```bash
cd client
npm run dev
```

Now open [http://localhost:5173](http://localhost:5173) 🎉

---

## 📸 Screenshots

(You can add UI screenshots here)

---

## 🔐 License
This project is licensed under the [GPSCL License](LICENSE).

---

## 🎯 Contributors

👤 **Gyan Pratap Singh** – *Developer & Maintainer*  
📧 Contact: [gps.96169@gmail.com](mailto:gps.96169@gmail.com)  
🔗 GitHub: [@gyanthakur](https://github.com/Gyanthakur)  


## 🌐 Connect with Us

Contact Us:  📲<a href="https://wa.me/918957818597?text=Hey%20%F0%9F%91%8B%2C%20how%20can%20I%20help%20you%3F">
    <img src="https://img.shields.io/badge/WhatsApp-Click%20Me-25D366?style=for-the-badge&logo=whatsapp" alt="WhatsApp" />
  </a>

- **Name**: Gyan Pratap Singh
- **Email**: [gps.96169@gmail.com](mailto:gps.96169@gmail.com)
- **GitHub**: [Gyanthakur](https://github.com/Gyanthakur)
- **Portfolio**: [Gyan's Portfolio](https://gyan-pratap-singh.vercel.app/)

---



## Thank you for checking out the **career-mentorship-app** project! Happy coding! 😊

---
## ⭐ Support
Give a ⭐ if you like this project!

---
Made with ❤️ by Gyan Pratap Singh

### ⭐ Show Some Love!

If you like this project, don't forget to leave a **⭐ Star** on GitHub! 🚀
