import { API } from "../../types";

export type Ayah = {
  number: string;
  text: string;
  surahName: string;
  link: string;
  timestamp: number;
};

type Data = {
  timeout: number;
};

type Cache = Ayah;

export const defaultData = {
  timeout: 900,
} as Data;

export type Props = API<Data, Cache>;
