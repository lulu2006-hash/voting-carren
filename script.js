let voteA = 0;
let voteB = 0;
let voteC = 0;

const adminPassword = "admin123";

function vote(pilihan) {
  if (pilihan === 1) voteA++;
  if (pilihan === 2) voteB++;
  if (pilihan === 3) voteC++;

  alert("Terima kasih sudah voting 🙌");
}

function adminLogin() {
  let pw = prompt("Masukkan password admin:");
  if (pw === adminPassword) {
    document.getElementById("hasil").style.display = "block";
    document.getElementById("a").innerText = voteA;
    document.getElementById("b").innerText = voteB;
    document.getElementById("c").innerText = voteC;
  } else {
    alert("Password salah ❌");
  }
}