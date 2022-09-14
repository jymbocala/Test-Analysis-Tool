let articleURL = "";

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test")
    .then((res) => res.json())
    .then(function (data) {
      document.getElementById("results").innerHTML = data.message;
    });

  // get URL for API
  articleURL = document.getElementById("article-url").value;

  // MeaningCloud API
  const formdata = new FormData();
  formdata.append("key", '21dba14f5feadfb31d6cd69def6054ac');
  formdata.append("url", articleURL); // GET URL FROM INPUT
  formdata.append("lang", "en");

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch((error) => console.log("error", error));
}

export { handleSubmit };

