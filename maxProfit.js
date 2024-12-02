function maxProfit(x, y) {

    // keuntungan per jenis bubur
    const profitbiasa = 30000;
    const profitspesial = 40000;

    // maks bahan per hari
    const maxBeras = 60;
    const maxAyam = 30;
    const maxTime = 40;

    // bahan per produk
    const BerasPerBuburBiasa = 1;
    const BerasPerBuburSpesial = 2;
    const AyamPerBuburBiasa = 1;
    const AyamPerBuburSpesial = 1;
    const MaxTimePerBuburBiasa = 2;
    const MaxTimePerBuburSpesial = 3;

    const totalBeras = (x * BerasPerBuburBiasa) + (y * BerasPerBuburSpesial);
    const totalAyam = (x * AyamPerBuburBiasa) + (y * AyamPerBuburSpesial);
    const totalTime = (x * MaxTimePerBuburBiasa) + (y * MaxTimePerBuburSpesial);


    // hitung keuntungan
    const totalProfit = (x * profitbiasa) + (y * profitspesial);

    if (totalBeras <= maxBeras && totalAyam <= maxAyam && totalTime <= maxTime) {
        return totalProfit;
    } else {
        return 0;
    }
}

export { maxProfit };