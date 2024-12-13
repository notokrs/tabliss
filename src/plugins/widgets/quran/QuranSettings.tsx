import React, { FC } from "react";
import { defaultData, Props } from "./types";
import { Icon } from "../../../views/shared";

const QuranSettings: React.FC<Props> = ({ data = defaultData, setData }) => {
  console.log(data);

  return (
    <label>
      Timeout
      <select
        value={data.timeout}
        onChange={(event) =>
          setData({ ...data, timeout: Number(event.target.value) })
        }
      >
        <option value="300">Every 5 minutes</option>
        <option value="900">Every 15 minutes</option>
        <option value="3600">Every hour</option>
        <option value="86400">Every day</option>
        <option value="604800">Every week</option>
      </select>
    </label>
  );
};

export default QuranSettings;
