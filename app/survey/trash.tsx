"use client";

import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../../types/surveys";
import { ContrastDark } from "survey-core/themes/contrast-dark";
import { Chip, Select, SelectItem } from "@nextui-org/react";

type Props = {}

const SurveysPage = (props: Props) => {
  const survey = new Model(json);
  const [pageNo, setPageNo] = React.useState<number>(0);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPageNo(parseInt(value));
  };

  React.useEffect(() => {
    survey.applyTheme(ContrastDark);
    setPageNo(survey.currentPageNo);
  }, [survey]); // Apply theme only when survey object changes

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-around gap-3 my-3">
        <Select
          variant="flat"
          size="lg"
          label="Select The Page"
          className="max-w-sm"
          onChange={handleSelectionChange}
          selectedKeys={[pageNo]}
        >
          {Array.from({ length: survey.visiblePages.length }, (_, i) => (
            <SelectItem key={i} value={i} textValue={`Page ${i + 1}`} />
          ))}
        </Select>
        <Chip variant="shadow" color="success">
          Page {pageNo + 1} of {survey.visiblePages.length}
        </Chip>
      </div>

      {/* <Survey currentPageNo={pageNo} model={survey} /> */}
    </div>
  );
};

export default SurveysPage;
