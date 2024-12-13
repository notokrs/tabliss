import { Ayah, defaultData } from "./types";

const baseUrl = "https://equran.id/api/v2/";
const quranWeb = "https://quran.com/id/";

const getRandomSurah = () => {
  return Math.floor(Math.random() * 114);
};

const getRandomAyah = async () => {
  const surah = getRandomSurah();

  const res = await fetch(`${baseUrl}surat/${surah}`);
  const body = await res.json();

  if (body && body.code == 200) {
    const randAyah = Math.floor(Math.random() * (body.data.jumlahAyat - 1));
    const initAyah = elipsisIfNotUppercase(
      body.data.ayat[randAyah].teksIndonesia.trim(),
    );

    const ayah = [];
    let index = randAyah;
    let currAyah = initAyah;
    while (!currAyah.endsWith(".")) {
      ayah.push(currAyah);

      index++;

      if (!body.data.ayat[index]) {
        break;
      }

      currAyah = body.data.ayat[index].teksIndonesia.trim();
      if (currAyah.endsWith(".")) {
        ayah.push(currAyah);
      }
    }

    return {
      number:
        ayah.length > 0 ? `${randAyah + 1} - ${index + 1}` : `${randAyah + 1}`,
      text: ayah.length > 0 ? ayah.join(" ") : initAyah,
      surahName: body.data.namaLatin,
      link: `${quranWeb}${body.data.nomor}?startingVerse=${randAyah + 1}`,
      timestamp: Date.now(),
    } as Ayah;
  }

  return {
    number: "",
    text: "Unable to get Quran ayah",
    surahName: "",
    link: "",
    timestamp: Date.now(),
  } as Ayah;
};

const elipsisIfNotUppercase = (ayah: string) => {
  const firstChar = ayah.charAt(0);

  if (firstChar == firstChar.toUpperCase()) {
    return ayah;
  }

  return "... " + ayah;
};

export { getRandomAyah };
