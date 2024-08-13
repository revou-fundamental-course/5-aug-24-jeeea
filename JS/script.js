function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert to meters
    const bmi = weight / (height * height);
    
    let category, description;
    if (bmi < 18.5) {
        category = "Kurang (underweight)";
        description = "Anda berada dalam kategori underweight atau berat badan kurang. Berat badan kurang bisa menjadi tanda bahwa Anda tidak makan cukup atau mungkin menunjukkan kondisi medis yang mendasarinya. Jika Anda berada dalam kategori ini, hubungi dokter Anda untuk evaluasi lebih lanjut.";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal";
        description = "Anda berada dalam kategori normal. Komunitas medis merekomendasikan untuk menjaga berat badan Anda dalam rentang ini.";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Lebih (overweight)";
        description = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
    } else if (bmi >= 30 && bmi < 35) {
        category = "Obesitas Kelas 1";
        description = "Anda berada dalam kategori obesitas Kelas 1. Saat ini, organisasi kesehatan mengakui obesitas sebagai penyakit kronis namun dapat dikelola yang ditangani dengan pendekatan pengobatan penurunan berat badan multidisiplin. Orang dengan Indeks Massa Tubuh sama dengan atau di atas 30 sangat disarankan untuk berkonsultasi dengan dokter yang terlatih dalam manajemen obesitas.";
    } else if (bmi >= 35 && bmi < 40) {
        category = "Obesitas Kelas 2";
        description = "Anda berada dalam kategori obesitas Kelas 2. organisasi kesehatan mengakui obesitas sebagai penyakit kronis namun dapat dikelola yang ditangani dengan pendekatan pengobatan penurunan berat badan multidisiplin. Orang dengan Indeks Massa Tubuh sama dengan atau di atas 30 sangat disarankan untuk berkonsultasi dengan dokter yang terlatih dalam manajemen obesitas.";
    } else if (bmi > 40) {
        category = "Obesitas Kelas 3";
        description = "Anda berada dalam kategori obesitas Kelas 3. organisasi kesehatan mengakui obesitas sebagai penyakit kronis namun dapat dikelola yang ditangani dengan pendekatan pengobatan penurunan berat badan multidisiplin. Orang dengan Indeks Massa Tubuh sama dengan atau di atas 30 sangat disarankan untuk berkonsultasi dengan dokter yang terlatih dalam manajemen obesitas.";
    } else {
        category = "tidak valid";
        description = "Mohon masukkan berat badan, usia(minimal 18 tahun), dan tinggi badan yang valid.";
    }
    
    document.getElementById('bmi-result').textContent = bmi.toFixed(1);
    document.getElementById('category').textContent = category;
    document.getElementById('bmi-description').textContent = description;
}

function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('bmi-result').textContent = '';
    document.getElementById('category').textContent = '';
    document.getElementById('bmi-description').textContent = '';
}

function downloadResult() {
    alert('Fungsi download hasil BMI akan diimplementasikan di sini.');
}

function consultNutrition() {
    alert('Fungsi konsultasi ahli gizi via aplikasi akan diimplementasikan di sini.');
}

function registerOnline() {
    alert('Fungsi registrasi online ahli gizi akan diimplementasikan di sini.');
}