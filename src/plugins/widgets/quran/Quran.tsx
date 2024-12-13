import React from "react";
import { useCachedEffect } from "../../../hooks";
import { getRandomAyah } from "./api";
import "./Quran.sass";
import { Props, defaultData } from "./types";
import { SECONDS } from "../../../utils";

const Quran: React.FC<Props> = ({
  cache,
  data = defaultData,
  setCache,
  loader,
}) => {
  useCachedEffect(
    () => {
      loader.push;
      getRandomAyah().then(setCache).finally(loader.pop);
    },
    cache ? cache.timestamp + data.timeout * SECONDS : 0,
    [data.timeout],
  );

  if (!cache) {
    return null;
  }

  return (
    <div className="Quran">
      <h4 className="QuranContent">
        {cache.text}
        {cache.surahName && (
          <sub>
            <br />
            <a href={cache.link} target="_blank">
              &mdash; QS. {cache.surahName}: {cache.number}
            </a>
          </sub>
        )}
      </h4>
    </div>
  );
};

export default Quran;
