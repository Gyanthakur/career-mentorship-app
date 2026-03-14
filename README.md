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

| Header | Skills Available |
|--------|------------------|
| <img width="1915" height="869" alt="header" src="https://github.com/user-attachments/assets/79860790-19a0-49b8-9bca-c23ce765d243" /> | <img width="1919" height="869" alt="skills aval" src="https://github.com/user-attachments/assets/634a4e2a-63c6-414c-b9b8-63c8f69049d6" /> |

| Services | Skill |
|----------|-------|
| <img width="1919" height="866" alt="services" src="https://github.com/user-attachments/assets/e4403f4f-aa6b-4d85-851d-5e46b6132b29" /> | <img width="1919" height="871" alt="skill" src="https://github.com/user-attachments/assets/1c2e5b5e-d26f-40a7-b8ba-7866724f9e86" /> |

| Learning Roadmap | Developer Roadmap |
|------------------|-------------------|
| <img width="1919" height="880" alt="Learning Roadmap" src="https://github.com/user-attachments/assets/abfa727c-0693-43e5-9556-bb9353e10263" /> | <img width="1919" height="873" alt="Developer Roadmap" src="https://github.com/user-attachments/assets/3cda66fa-4791-44af-be11-5e8f638df212" /> |

| Download Roadmap | Chart |
|------------------|-------|
| <img width="1919" height="874" alt="Download Roadmap" src="https://github.com/user-attachments/assets/ee07802b-d3eb-43b5-b924-20af39444a72" /> | <img width="1919" height="869" alt="Chart" src="https://github.com/user-attachments/assets/f8e6e27a-4d72-469f-981e-dfdce742be93" /> |

| About | Our Core Values |
|-------|----------------|
| <img width="1919" height="870" alt="About" src="https://github.com/user-attachments/assets/58954d34-3841-415d-8a14-97f9e0c077d6" /> | <img width="1919" height="871" alt="Our Core Values" src="https://github.com/user-attachments/assets/3da599be-9df5-42e7-b8ce-244a13dbf43e" /> |

| Footer |
|--------|
| <img width="1916" height="871" alt="Footer" src="https://github.com/user-attachments/assets/d20f501b-e67f-4a67-97f5-beff89efb3a1" /> |


---

## 🔐 License
This project is licensed under the [Apache License](LICENSE).

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

## ASCII Art

```
                          _   _           _               
   __ _ _   _  __ _ _ __ | |_| |__   __ _| | ___   _ _ __ 
  / _` | | | |/ _` | '_ \| __| '_ \ / _` | |/ / | | | '__|
 | (_| | |_| | (_| | | | | |_| | | | (_| |   <| |_| | |   
  \__, |\__, |\__,_|_| |_|\__|_| |_|\__,_|_|\_\\__,_|_|   
  |___/ |___/                                             
```



## 🤝 Connect With Me
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=38BDF8&center=true&vCenter=true&width=600&lines=Hey+there!+I'm+Gyan+Pratap+Singh;Full+Stack+Web+Developer;Open+Source+Contributor;Always+Open+to+Collaborations;Let's+Build+Something+Awesome&v=2" alt="Typing" />
</p>



<p align="center">
  <a href="https://wa.me/918957818597?text=Hey%20%F0%9F%91%8B%2C%20how%20can%20I%20help%20you%3F">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
  </a>
  <a href="mailto:gps.96169@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>


<p align="center">
  <a href="https://github.com/Gyanthakur">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://www.instagram.com/gyanpratapsingh_">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
  </a>
  <a href="https://linktr.ee/gp_singh">
    <img src="https://img.shields.io/badge/Linktree-43E55E?style=for-the-badge&logo=linktree&logoColor=black" />
  </a>
  <a href="https://www.facebook.com/profile.php?id=100026766931684">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" />
  </a>
</p>

---

