let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = [
  "january",
  "febuary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// let monthAndYear = document.getElementById("monthAndYear");

const dayHeading = (days, table) => {
  // inject into table
  let dayHead = document.createElement("thead");
  let dayRow = document.createElement("tr");
  dayHead.appendChild(dayRow);
  table.appendChild(dayHead);

  for (let i = 0; i < days.length; i++) {
    dayData = document.createElement("th");
    dayData.innerHTML = days[i];
    dayRow.appendChild(dayData);
    console.log(days[i]);
  }
};

//creating the table data itself
const calendar = (months, days) => {
  /**
   * @firstDayOfMonth = 1st day of the month
   * returns the day of the week (0-6) for the first day of the month
   *
   * @daysInMonth = number of days in the month
   * returns the number of days in the month
   *
   * **/

  let month = "";
  let year = "2023";

  // Getting the numbers of day in a month
  for (month of months) {
    // Getting first day of that month
    let firstDay = new Date(`${month} +","+ ${year}`).getDay();
    // Lets get the amount of days in that month

    // let daysInMonth = 32 - new Date(year, month.indexOf(), 32).getDate();
    let daysInMonth = new Date(year, months.indexOf(month) + 1, 0).getDate();

    // Create a table
    let table = document.createElement("table");
    //append table to body
    document.getElementById("calendar-body").append(table);
    let caption = document.createElement("caption");
    caption.innerHTML = month;
    caption.className = "table-caption";

    //append caption to table
    table.appendChild(caption);

    // create row for days of the week, could send the index of the new table created
    dayHeading(days, table);

    // append it to that table
    let date = 1;
    for (let i = 0; i < 6; i++) {
      // creates a table row
      var row = document.createElement("tr");
      //creating individual cells, filing them up with data.
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay - 1) {
          let cell = document.createElement("td");
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          let cell = document.createElement("td");
          let cellText = document.createTextNode(date);
          if (date === 30 && month === "january") {
            cell.classList.add("bg-mom-birthday");
          } else if (date === 31 && month === "may") {
            cell.classList.add("bg-dad-birthday");
          } // color today's date
          else if (date === 18 && month === "july") {
            cell.classList.add("bg-birthday");
          } // color today's date
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }
      }

      table.appendChild(row); // appending each row into calendar body.
    }
    console.log(month);
  }
};

calendar(months, days);
