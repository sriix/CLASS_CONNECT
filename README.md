# 🎓 ClassConnect
### Offline Smart Attendance System for Rural Schools

A camera-based student attendance system designed for rural schools that automates attendance marking using face recognition and works even without internet connectivity.

---

## 📖 Overview
**ClassConnect** is a smart attendance prototype that reduces manual register-based attendance in rural schools.  
It captures student faces via webcam, compares them with a stored dataset, and marks attendance automatically.  
Supports **offline storage** and syncs records when internet becomes available.

---

## 🚩 Problem Statement
Manual registers in rural schools:
- Consume teaching time
- Increase teacher workload
- Are prone to human error
- Lack quick reporting/insights
- Depend entirely on paperwork

ClassConnect offers a simple digital workflow to solve these issues.

---

## ✨ Features
- 📷 **AI-Based Face Recognition**: Automatically detects and matches faces with the dataset to mark attendance accurately.  
- 🌐 **Offline Functionality**: Fully operational without internet, with local data storage and automatic sync when connectivity is available.  
- 🧑‍🏫 **Manual Override Option**: Allows teachers to edit attendance or correct recognition errors easily.  
- 📊 **Data Visualization**: Provides attendance insights through charts and student-wise summaries.  
- ⏱️ **Time Efficient System**: Eliminates manual roll calls, saving time and improving classroom productivity.  

---

## 🏗️ System Workflow
Camera Capture → Face Detection → Feature Extraction → Dataset Matching → Attendance Update → Local Storage → Internet Synchronization

---

## 🧠 Technologies Used
| Component         | Technology                       |
| ----------------- | -------------------------------- |
| Interface         | HTML                             |
| Styling           | CSS                              |
| Logic             | JavaScript                       |
| Recognition Model | Dataset comparison (prototype)   |
| Storage           | IndexedDB (local browser DB)     |
| Export            | CSV                              |

---

## 📁 Project Modules
- Student enrollment via webcam  
- Dataset matching module  
- Automatic attendance marking  
- Offline storage with sync  
- Manual correction option  
- Attendance visualization graphs  

---

## 🚀 Future Improvements
- OpenCV-based face recognition integration  
- Improved recognition accuracy  
- Cloud database synchronization  
- Mobile access support  
- Admin dashboard & automated reports  

---

## 🎓 Learning Outcomes
- Designed a smart attendance workflow prototype  
- Implemented dataset-based student identification logic  
- Created an offline-first attendance system concept  
- Built visualization support for attendance tracking  
- Developed a digital alternative to manual registers  

---

## 📦 How to Use
1. Open `index.html` in a browser.  
2. Use the menu to **enroll students**, **take attendance**, or **export CSV**.  
3. Data is stored locally in the browser using **IndexedDB**.  
4. Requires webcam access (best in Chrome).  

---

**ClassConnect — Simple Attendance. Smart Future.**
