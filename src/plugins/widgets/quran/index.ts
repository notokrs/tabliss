import { Config } from "../../types";
import Quran from "./Quran";
import QuranSettings from "./QuranSettings";

const config: Config = {
  key: "widget/quran",
  name: "Quran",
  description: "Make the Quran a reminder of your day",
  dashboardComponent: Quran,
  settingsComponent: QuranSettings,
};

export default config;
