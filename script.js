document.addEventListener("DOMContentLoaded", () => {
    const moodSelector = document.querySelector(".emoji-container");
    const moodLog = document.getElementById("mood-log");
    const dayView = document.getElementById("day-view");
    const weekView = document.getElementById("week-view");
    const monthView = document.getElementById("month-view");
    const calendarView = document.getElementById("calendar-view");

    // Load mood logs from LocalStorage
    let moodData = JSON.parse(localStorage.getItem("moodData")) || [];

    // Save mood to LocalStorage
    moodSelector.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const mood = e.target.getAttribute("data-mood");
            const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

            // Check if an entry already exists for today
            const existingEntryIndex = moodData.findIndex((entry) => entry.date === date);

            if (existingEntryIndex !== -1) {
                // Replace the existing mood
                moodData[existingEntryIndex].mood = mood;
            } else {
                // Add a new mood entry
                moodData.push({ date, mood });
            }

            // Save updated data to LocalStorage
            localStorage.setItem("moodData", JSON.stringify(moodData));
            updateTimeline();
        }
    });

    // Update timeline view
    function updateTimeline(filter = "day") {
        moodLog.innerHTML = "";
        let filteredData = [];

        switch (filter) {
            case "day":
                filteredData = filterByDay(moodData);
                break;
            case "week":
                filteredData = filterByWeek(moodData);
                break;
            case "month":
                filteredData = filterByMonth(moodData);
                break;
            default:
                filteredData = moodData;
        }

        filteredData.forEach((entry) => {
            const moodEntry = document.createElement("div");
            moodEntry.className = "mood-entry";
            moodEntry.innerHTML = `<span>${entry.date}</span><span>${entry.mood}</span>`;
            moodLog.appendChild(moodEntry);
        });
    }

    // Filter by day
    function filterByDay(data) {
        const today = new Date().toISOString().split("T")[0];
        return data.filter((entry) => entry.date === today);
    }

    // Filter by week
    function filterByWeek(data) {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay()); // Start of the week (Sunday)
        const endOfWeek = new Date(today);
        endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // End of the week (Saturday)

        return data.filter((entry) => {
            const entryDate = new Date(entry.date);
            return entryDate >= startOfWeek && entryDate <= endOfWeek;
        });
    }

    // Filter by month
    function filterByMonth(data) {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        return data.filter((entry) => {
            const entryDate = new Date(entry.date);
            return entryDate.getMonth() === currentMonth && entryDate.getFullYear() === currentYear;
        });
    }

    // Render calendar view
    function renderCalendarView() {
        moodLog.innerHTML = "";
        const calendar = document.createElement("div");
        calendar.className = "calendar";
        moodLog.appendChild(calendar);

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay.getDay(); i++) {
            const emptyCell = document.createElement("div");
            emptyCell.className = "day-cell";
            calendar.appendChild(emptyCell);
        }

        // Add cells for each day of the month
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const day = new Date(year, month, i).toISOString().split("T")[0];
            const moodEntry = moodData.find((entry) => entry.date === day);
            const dayCell = document.createElement("div");
            dayCell.className = "day-cell" + (moodEntry ? " has-mood" : "");
            dayCell.innerHTML = `<span>${i}</span><span>${moodEntry ? moodEntry.mood : ""}</span>`;
            calendar.appendChild(dayCell);
        }
    }

    // Event listeners for filters
    dayView.addEventListener("click", () => updateTimeline("day"));
    weekView.addEventListener("click", () => updateTimeline("week"));
    monthView.addEventListener("click", () => updateTimeline("month"));
    calendarView.addEventListener("click", renderCalendarView);

    // Initial load
    updateTimeline();
});