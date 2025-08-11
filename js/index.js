

function calcular() {
  const p1   = Number(document.getElementById("p1").value);
  const p2   = Number(document.getElementById("p2").value);
  const exam = Number(document.getElementById("exam").value);









  if ([p1, p2, exam].some(v => isNaN(v))) {
    Swal.fire("Error", "Completa los tres campos con números.", "error");
    return;
  }

  if (p1 < 0 || p2 < 0 || exam < 0) {
    Swal.fire("Error", "Las notas no pueden ser negativas.", "error");
    return;
  }
  if (p1 > 30 || p2 > 30) {
    Swal.fire("Error", "Parcial 1 y 2 no pueden ser > 30.", "error");
    return;
  }
  if (exam > 40) {
    Swal.fire("Error", "El examen no puede ser > 40.", "error");
    return;
  }








  const final = p1 + p2 + exam;

  let estado;
  if (final < 60)      estado = "Reprobado";
  else if (final < 80) estado = "Bueno";
  else if (final < 90) estado = "Muy Bueno";
  else                 estado = "Sobresaliente";

  document.getElementById("resultado").innerText = final;
  document.getElementById("estado").innerText = estado;

  Swal.fire("Cálculo exitoso", `Nota final: ${final} (${estado})`, "success");
}






function limpiar() {
  ["p1","p2","exam"].forEach(id => document.getElementById(id).value = "");
  ["resultado","estado"].forEach(id => document.getElementById(id).innerText = "");
}
