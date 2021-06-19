import React from "react";
import Whiteboard from "../../components/General/Whiteboard";
import ExamsToGenerate from "../../components/Exams/ExamsToGenerate";
const ExamsToGeneratePage = () => {
  return (
    <Whiteboard title="EXÁMENES A REALIZAR">
      <ExamsToGenerate />
    </Whiteboard>
  );
};

export default ExamsToGeneratePage;
