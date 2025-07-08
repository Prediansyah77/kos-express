const express = require('express');
const cors = require('cors');
const app = express();

// =======================
// ✅ Import route files
// =======================
const kamarRoutes = require('./routes/kamarRoutes');
const penghuniRoutes = require('./routes/penghuniRoutes');
const pembayaranRoutes = require('./routes/pembayaranRoutes');
const userRoutes = require('./routes/userRoutes');

// =======================
// ✅ Middleware global
// =======================
app.use(cors());              // Izinkan akses dari frontend
app.use(express.json());      // Baca JSON body

// =======================
// ✅ API Routes
// =======================
app.use('/api/kamar', kamarRoutes);
app.use('/api/penghuni', penghuniRoutes);
app.use('/api/pembayaran', pembayaranRoutes);
app.use('/api/user', userRoutes);

// =======================
// ✅ Tes route
// =======================
app.get('/', (req, res) => {
    res.send('🎉 API Kos-Express aktif!');
});

// =======================
// ✅ Jalankan server
// =======================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
