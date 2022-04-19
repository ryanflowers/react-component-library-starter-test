const Host = () => {
  const onClick = () => {
    import("../../recommendations-api").then(({ HelloWorld }) => {
      HelloWorld && console.log("success!");
    });
  };

  const button = document.createElement("button");
  button.innerHTML = "Load API";
  button.click = onClick;
  document.appendChild(button);
};

export { Host };
