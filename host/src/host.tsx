import React from "react";

const Host: React.FC = () => {
  const onClick = () => {
    import("../../recommendations-api").then(({ HelloWorld }) => {
      HelloWorld && console.log("success!");
    });
  };

  return <button onClick={onClick}>Import Recommendations</button>;
};

export { Host };
