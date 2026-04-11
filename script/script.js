let currentTab = "btnFilterAll";

const statTotal = document.getElementById("total-stat");
const statInterview = document.getElementById("interview-stat");
const statReject = document.getElementById("reject-stat");

const allCardSection = document.getElementById("all-card");
const interviewSection = document.getElementById("interview-section");
const rejectSection = document.getElementById("reject-section");
const emptyCard = document.getElementById("empty-card");

const availableJobs = document.getElementById("available-jobs");

//count total, interviewed and rejected jobs:

function btnToggling(btnID) {
  const btnFilterAll = document.getElementById("btnFilterAll");
  const btnFilterInterview = document.getElementById("btnFilterInterview");
  const btnFilterReject = document.getElementById("btnFilterReject");

  const buttons = [btnFilterAll, btnFilterInterview, btnFilterReject];
  for (const b of buttons) {
    b.classList.remove("bg-black", "text-white");
  }
  const btnClicked = document.getElementById(btnID);
  btnClicked.classList.add("bg-black", "text-white");

  currentTab = btnID;

  const sections = [allCardSection, interviewSection, rejectSection];
  for (const section of sections) {
    section.classList.add("hidden");
  }
  emptyCard.classList.add("hidden");

  if (btnID == "btnFilterAll") {
    allCardSection.classList.remove("hidden");
    if (allCardSection.children.length < 1) {
      emptyCard.classList.remove("hidden");
    }
  } else if (btnID == "btnFilterInterview") {
    interviewSection.classList.remove("hidden");
    if (interviewSection.children.length < 1) {
      emptyCard.classList.remove("hidden");
    }
  } else if (btnID == "btnFilterReject") {
    rejectSection.classList.remove("hidden");
    if (rejectSection.children.length < 1) {
      emptyCard.classList.remove("hidden");
    }
  }
  calculateCount();
}

const mainContainer = document.querySelector("main");
mainContainer.addEventListener("click", function (event) {
  const clickedElement = event.target;
  const mainCard = clickedElement.closest(".card");
  const parent = mainCard.parentNode;
  let status = mainCard.querySelector(".badge");
  if (clickedElement.classList.contains("btnInterview")) {
    interviewSection.append(mainCard);

    status.innerHTML = `
      <p
                    class="badge bg-[#EEF4FF] text-[#10B981] text-[14px] font-medium rounded-sm px-3 py-2 h-9"
                  >
                    Interview
                  </p>
    `;
  } else if (clickedElement.classList.contains("btnReject")) {
    rejectSection.append(mainCard);

    status.innerHTML = `
      <p
                    class="badge bg-[#EEF4FF] text-[#EF4444] text-[14px] font-medium rounded-sm px-3 py-2 h-9"
                  >
                    Rejected
                  </p>
    `;
  } else if (event.target.classList.contains("btnDelete")) {
    console.log(clickedElement);
    parent.removeChild(mainCard);
  }
  calculateCount();
});

// const filterSection = document.getElementById("filtered-section");
// function renderInterview() {
//   filterSection.innerHTML = ``;
//   for (let interview of interviewedList) {
//     const companyN = interview.companyName;
//     const jobTitle = interview.jobDesignation;
//     const jobLocation = interview.location;
//     const jobType = interview.type;
//     const jobSalary = interview.salary;
//     const jobBadge = interview.badge;
//     const jobDescription = interview.jobDes;

//     const div = document.createElement("div");
//     div.className = "card bg-base-100 shadow-sm";
//     div.innerHTML = `
//     <div class="card-body flex flex-row justify-between">
//             <div id="card-left" class="space-y-3">
//               <div>
//                 <h2
//                   class="companyName card-title text-[22px] font-semibold text-[#002C5C]"
//                 >
//                   ${companyN}
//                 </h2>
//                 <p class="job-designation text-[16px] text-[#64748B]">
//                   ${jobTitle}
//                 </p>
//               </div>
//               <div class="job-type">
//                 <span
//                   class="text-[14px] text-[#64748B] flex gap-3 justify-start items-center"
//                 >
//                   <span class="location">${jobLocation}</span>
//                   <span class="text-[4px]"
//                     ><i class="fa-solid fa-circle"></i
//                   ></span>
//                   <span class="duration">${jobType}</span>
//                   <span class="text-[4px]"
//                     ><i class="fa-solid fa-circle"></i
//                   ></span>
//                   <span class="salary">${jobSalary}</span>
//                 </span>
//               </div>
//               <div>
//                 <p
//                   class="badge bg-[#EEF4FF] text-[#10B981] text-[16px] font-bold rounded-sm px-3 py-2 h-9"
//                 >
//                   ${(jobBadge.innerText = "Interview")}
//                 </p>
//               </div>
//               <p class="job-description text-[14px] text-[#323B49]">
//                 ${jobDescription}
//               </p>
//               <div>
//                 <button
//                   class="btnInterview btn text-[14px] text-[#10B981] border-[#10B981]"
//                 >
//                   Interview
//                 </button>
//                 <button
//                   class="btnReject btn text-[14px] text-[#EF4444] border-[#EF4444]"
//                 >
//                   Reject
//                 </button>
//               </div>
//             </div>
//             <div id="card-right">
//               <div class="card-actions">
//                 <button class="btn rounded-[50%]">
//                   <span class="text-[#64748B]"
//                     ><i class="fa-regular fa-trash-can"></i
//                   ></span>
//                 </button>
//               </div>
//             </div>
//           </div>
//   `;

//     filterSection.append(div);
//   }
// }
// function renderReject() {
//   filterSection.innerHTML = ``;
//   for (let reject of rejectedList) {
//     const companyN = reject.companyName;
//     const jobTitle = reject.jobDesignation;
//     const jobLocation = reject.location;
//     const jobType = reject.type;
//     const jobSalary = reject.salary;
//     const jobBadge = reject.badge;
//     const jobDescription = reject.jobDes;

//     const div = document.createElement("div");
//     div.className = "card bg-base-100 shadow-sm";
//     div.innerHTML = `
//     <div class="card-body flex flex-row justify-between">
//             <div id="card-left" class="space-y-3">
//               <div>
//                 <h2
//                   class="companyName card-title text-[22px] font-semibold text-[#002C5C]"
//                 >
//                   ${companyN}
//                 </h2>
//                 <p class="job-designation text-[16px] text-[#64748B]">
//                   ${jobTitle}
//                 </p>
//               </div>
//               <div class="job-type">
//                 <span
//                   class="text-[14px] text-[#64748B] flex gap-3 justify-start items-center"
//                 >
//                   <span class="location">${jobLocation}</span>
//                   <span class="text-[4px]"
//                     ><i class="fa-solid fa-circle"></i
//                   ></span>
//                   <span class="duration">${jobType}</span>
//                   <span class="text-[4px]"
//                     ><i class="fa-solid fa-circle"></i
//                   ></span>
//                   <span class="salary">${jobSalary}</span>
//                 </span>
//               </div>
//               <div>
//                 <p
//                   class="badge bg-[#EEF4FF] text-[#EF4444] text-[16px] font-bold rounded-sm px-3 py-2 h-9"
//                 >
//                   ${(jobBadge.innerText = "Rejected")}
//                 </p>
//               </div>
//               <p class="job-description text-[14px] text-[#323B49]">
//                 ${jobDescription}
//               </p>
//               <div>
//                 <button
//                   class="btnInterview btn text-[14px] text-[#10B981] border-[#10B981]"
//                 >
//                   Interview
//                 </button>
//                 <button
//                   class="btnReject btn text-[14px] text-[#EF4444] border-[#EF4444]"
//                 >
//                   Reject
//                 </button>
//               </div>
//             </div>
//             <div id="card-right">
//               <div class="card-actions">
//                 <button class="btn rounded-[50%]">
//                   <span class="text-[#64748B]"
//                     ><i class="fa-regular fa-trash-can"></i
//                   ></span>
//                 </button>
//               </div>
//             </div>
//           </div>
//   `;

//     filterSection.append(div);
//   }
// }
function calculateCount() {
  statTotal.innerText = allCardSection.children.length;
  statInterview.innerText = interviewSection.children.length;
  statReject.innerText = rejectSection.children.length;

  // const tabs = ["btnFilterAll", "btnFilterInterview", "btnFilterReject"];
  // for (const tab of tabs) {
  if (currentTab == "btnFilterAll") {
    availableJobs.innerText = allCardSection.children.length;
  } else if (currentTab == "btnFilterInterview") {
    availableJobs.innerText = interviewSection.children.length;
  } else if (currentTab == "btnFilterReject") {
    availableJobs.innerText = rejectSection.children.length;
  }
  if (statTotal.innerText < 1) {
    emptyCard.classList.remove("hidden");
  }
}

calculateCount();

btnToggling(currentTab);
