# 📌 Daily Mood Tracker

## 🌟 Overview
The **Daily Mood Tracker** is a simple web application that allows users to log their daily mood using emojis and visualize their emotional trends over time. The application stores mood entries in **LocalStorage** and provides different views (daily, weekly, and monthly) for mood analysis.

## 🚀 Features
- **Select a Mood**: Choose an emoji to represent your daily mood.
- **Automatic Date Logging**: Saves the mood with the current date.
- **Timeline View**: Displays past moods with options to filter by **day, week, or month**.
- **LocalStorage Support**: Moods are stored in the browser, so they persist across sessions.
- **Dynamic Updates**: Mood history is updated immediately upon selection.

## 📂 Project Structure
```
📁 Daily-Mood-Tracker
│── 📄 index.html        # Main HTML file
│── 📄 style.css         # Styling file for UI
│── 📄 script.js         # JavaScript logic for tracking moods
│── 📄 README.md         # Documentation (this file)
```

## 📜 How It Works
### 1️⃣ **Logging a Mood**
- Users select an emoji.
- The selected emoji is saved in **LocalStorage** with the current date.
- If a mood already exists for the day, it is **updated**.
- The timeline is **refreshed** to display the updated data.

### 2️⃣ **Displaying Past Moods**
- Retrieves stored moods from **LocalStorage**.
- Filters moods based on the selected **view**:
  - **Day View**: Displays all moods.
  - **Week View**: Shows one mood per week.
  - **Month View**: Shows one mood per month.
- Dynamically updates the timeline with the stored moods.

## 🛠️ Technologies Used
- **HTML** (Structure)
- **CSS** (Styling)
- **JavaScript** (Logic & LocalStorage)

## 📌 Usage Instructions
1️⃣ Open `index.html` in a browser.  
2️⃣ Click on an emoji to log your mood.  
3️⃣ Switch views (day/week/month) to analyze mood trends.  
4️⃣ Your data is automatically saved in LocalStorage.  

## 🌍 Deployment
🔗 **Live Demo:** [Daily Mood Tracker](https://daily-mood-tracker-pi.vercel.app/)

## 📷 Screenshots
### Mood Selection & Calendar View
![Mood Selection](Screenshot%202025-03-20%20at%206.55.57%E2%80%AFPM.png)

### Day View Timeline
![Day View](Screenshot%202025-03-20%20at%206.56.06%E2%80%AFPM.png)

## 🔥 Future Enhancements
🔹 **Add a Calendar View** 📅
🔹 **Allow Users to Add Mood Notes** 📝
🔹 **Integrate Charts for Mood Analysis** 📊
🔹 **Sync Data Across Devices with Backend Support** ☁️

## 📧 Contact
For any suggestions or improvements, feel free to reach out!

---
🎯 **Keep tracking your moods and stay mindful! 😊**

