const selectDia = document.getElementById('dia');
for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectDia.appendChild(option);
}

const selectAno = document.getElementById('ano');
const anoAtual = new Date().getFullYear();
for (let i = anoAtual; i >= 1900; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectAno.appendChild(option);
}