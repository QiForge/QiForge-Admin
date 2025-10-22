document.addEventListener("DOMContentLoaded", () => {
  const isSuperAdmin = localStorage.getItem("superAdmin") === "true";
  const welcome = document.getElementById("welcomeTitle");
  if (isSuperAdmin) {
    welcome.textContent = "Welcome, Super Admin (Yogesh)";
    document.getElementById("superAdminPanel").style.display = "block";
  }

  // Dummy proposals
  const proposals = [
    { id: 1, title: "Promote Ratan to Lead", creator: "Krish", votes: { approve: 3.33, reject: 2.81 } },
    { id: 2, title: "Add Code Falcon Repo", creator: "Naval", votes: { approve: 5.0, reject: 0 } },
  ];

  const table = document.getElementById("proposalTable");
  proposals.forEach((p) => {
    const total = p.votes.approve + p.votes.reject;
    const percent = ((p.votes.approve / total) * 100).toFixed(1);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${p.title}</td>
      <td>${p.creator}</td>
      <td>${percent >= 70 ? "Approved ✅" : "Pending"}</td>
      <td>
        <button onclick="vote(${p.id}, true)">Approve</button>
        <button onclick="vote(${p.id}, false)">Reject</button>
      </td>
    `;
    table.appendChild(row);
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("superAdmin");
    window.location.href = "index.html";
  });

  document.getElementById("overrideBtn").addEventListener("click", () => {
    alert("Super Admin override executed: All proposals approved instantly.");
  });
});

function vote(id, approve) {
  alert(`Vote recorded for proposal #${id}: ${approve ? "Approve" : "Reject"}`);
}
