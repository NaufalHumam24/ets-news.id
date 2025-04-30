document.getElementById('searchBtn').addEventListener('click', function () {
  handleSearch();
});

document.getElementById('searchInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

function handleSearch() {
  const keyword = document.getElementById('searchInput').value.toLowerCase().trim();

  const routeMap = {
    'nasional': 'nasional.html',
    'internasional': 'internasional.html',
    'ekonomi': 'ekonomi.html',
    'olahraga': 'olahraga.html',
    'teknologi': 'teknologi.html',
    'hiburan': 'hiburan.html',
    'home': 'index.html'
  };

  if (routeMap[keyword]) {
    window.location.href = routeMap[keyword];
  } else {
    alert('Kategori tidak ditemukan.\nSilakan masukkan: nasional, internasional, ekonomi, olahraga, teknologi, hiburan, atau home.');
  }
}
