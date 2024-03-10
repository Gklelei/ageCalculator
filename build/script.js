document.addEventListener("DOMContentLoaded", () => {
  /*Footer date*/
  const dateSpan = document.getElementById("date-span");
  const currentYear = new Date().getFullYear();
  dateSpan.textContent = currentYear;

  /*Age calculator*/
  const btn = document.getElementById("btn");
  let userInput = document.getElementById("date");
  userInput.max = new Date().toISOString().split("T")[0];
  let msg = document.getElementById("msg");

  btn.addEventListener("click", () => {
    const ageCalc = () => {
      //console.log('Hello let get your age');
      let dob = new Date(userInput.value);
      //console.log(dob);
      let d1 = dob.getDate();
      let m1 = dob.getMonth() + 1;
      let y1 = dob.getFullYear();
      //console.log(m1);
      let today = new Date();

      let d2 = today.getDate();
      let m2 = today.getMonth() + 1;
      let y2 = today.getFullYear();
      //console.log(y2)

      let d3, m3, y3;
      y3 = y2 - y1;

      if (m2 >= m1) {
        m3 = m2 - m1;
      } else {
        y3--;
        m3 = 12 + m2 - m1;
      }

      if (d2 >= d1) {
        d3 = d2 - d1;
      } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
      }
      if (d3 < 0) {
        m3 = 11;
        y3--;
      }
      msg.innerHTML = `You are <span>${y3} </span> years, <span>${m3} </span> months, and <span>${d3}</span> days old`;
    };
    var getDaysInMonth = (year, month) => {
      return new Date(year, month, 0).getDate();
    };
    ageCalc();
  });
});
