let participantCount = 1;

document.getElementById("add").addEventListener("click", () => {
  participantCount++;
  const fieldset = document.getElementById("participantsFieldset");
  const addButton = document.getElementById("add");

  const newHTML = participantTemplate(participantCount);
  addButton.insertAdjacentHTML("beforebegin", newHTML);
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const total = totalFees();
  const adultName = document.getElementById("adult_name").value;
  const summary = document.getElementById("summary");

  const info = {
    name: adultName,
    totalParticipants: participantCount,
    totalFees: total
  };

  this.style.display = "none";
  summary.classList.remove("hide");
  summary.innerHTML = successTemplate(info);
});

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select>
          <option selected value="" disabled></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];

  return feeElements.reduce((sum, el) => {
    const val = parseFloat(el.value);
    return sum + (isNaN(val) ? 0 : val);
  }, 0);
}

function successTemplate(info) {
  return `<h2>Thank you ${info.name} for registering.</h2>
    <p>You have registered ${info.totalParticipants} participant(s) and owe $${info.totalFees.toFixed(2)} in fees.</p>`;
}
