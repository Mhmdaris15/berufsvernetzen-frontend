"use client";

import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./surveys";
import { Chip, Select, SelectItem } from "@nextui-org/react";
import { ContrastDark } from "survey-core/themes/contrast-dark";

function SurveyComponent() {
  const [survey] = React.useState(new Model(json));
  const [pageNo, setPageNo] = React.useState(survey.currentPageNo);
  const [isRunning, setIsRunning] = React.useState(true);
  survey.onCurrentPageChanged.add((_, options) => {
    setPageNo(options.newCurrentPage.visibleIndex);
  });
  survey.onStarted.add(() => {
    setIsRunning(true);
  });
  survey.onComplete.add(() => {
    setIsRunning(false);
  });
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  const prevPage = () => {
    survey.prevPage();
  };
  const nextPage = () => {
    survey.nextPage();
  };
  const endSurvey = () => {
    survey.completeLastPage();
  };
  const jumpToPage = (pageNo: any) => {
    if (survey.currentPage.validate()) {
      setPageNo(pageNo);
    }
  };

  const getPageSelectorOptions = () => {
    const content = [];
    for (let i = 0; i < survey.visiblePages.length; i++) {
      content.push(
        <option key={i} value={i}>
          Page {i + 1}
        </option>
      );
    }
    return content;
  };
  const PageSelector = (
    <select
      className="navigation-page-selector sd-input sd-dropdown dropdown-chevron"
      value={pageNo}
      onChange={(evt) => {
        jumpToPage(JSON.parse(evt.target.value));
      }}
    >
      {getPageSelectorOptions()}
    </select>
  );
  const renderButton = (text: any, func: any, canRender: any) => {
    if (!canRender) return undefined;
    return (
      <button className="navigation-button" onClick={func}>
        {text}
      </button>
    );
  };
  const renderExternalNavigation = () => {
    if (!isRunning) return undefined;
    const progressText =
      "Page " + (pageNo + 1) + " of " + survey.visiblePages.length;
    const progressSpan = (
      <span className="navigation-text">{progressText}</span>
    );
    return (
      <div className="navigation-block">
        {PageSelector}
        <div className="navigation-progress-container">
          <div className="navigation-buttons-container">
            {renderButton("Previous Page", prevPage, pageNo !== 0)}
            {renderButton(
              "Next Page",
              nextPage,
              pageNo !== survey.visiblePages.length - 1
            )}
            {renderButton(
              "Complete",
              endSurvey,
              pageNo === survey.visiblePages.length - 1
            )}
          </div>
          <div className="navigation-text-container">{progressSpan}</div>
        </div>
      </div>
    );
  };

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPageNo(parseInt(value));
  };

  survey.applyTheme(ContrastDark);

  return (
    <div className="flex flex-col items-center">
      {/* {renderExternalNavigation()} */}
      <div className="w-full flex items-center justify-around gap-3 my-3">
        <Select
          variant="flat"
          size="lg"
          label="Select The Page"
          className="max-w-sm"
          onChange={handleSelectionChange}
          selectedKeys={[pageNo]}
        >
          {/* survey.visiblePages.length */}
          {Array.from({ length: survey.visiblePages.length }, (_, i) => (
            <SelectItem key={i} value={i}>
              Page {i + 1}
            </SelectItem>
          ))}
        </Select>
        <Chip
        variant="shadow"
        color="success"
        >
            Page {pageNo + 1} of {survey.visiblePages.length}
        </Chip>
      </div>

      <Survey currentPageNo={pageNo} model={survey} />
    </div>
  );
}

export default SurveyComponent;
