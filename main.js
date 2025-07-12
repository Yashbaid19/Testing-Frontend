async function fetchData() {
  const output = document.getElementById("output");

  try {
    const res = await fetch("http://localhost:5000/api/users"); // change if port different
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "❌ Error connecting to backend";
    console.error(err);
  }
}
