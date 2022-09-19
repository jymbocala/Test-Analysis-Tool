function handleSubmit(event) {
  event.preventDefault();
  
  const resultsEl = document.getElementById("results-el");
  const articleURL = document.getElementById("article-url").value;
  
  console.log("Analyze button clicked");

  resultsEl.innerHTML = `
        <h2> Results </h2>
        <div class="loader"></div> 
        `; 

function noResult() {
  resultsEl.innerHTML = `
        <h2> Results </h2>`
}
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({url: articleURL}),
    redirect: "follow",
  };

  const response = fetch(
    '/analyze',
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.status.msg === "Operation denied") {
        noResult();
        alert("Please enter a valid URL.");
        return
      } else if (data.status.msg === "missing required parameter(s): please specify one of txt, url, doc") {
        noResult();
        alert("Input field cannot be empty. Please enter a URL.");
        return
      }

      let polarity = data.score_tag;
      const confidence = data.confidence;
      const agreement = data.agreement;
      const subjectivity = data.subjectivity;
      let irony = data.irony;

      if (polarity === "P+") {
        polarity = "strongly positive";
      } else if (polarity === "P") {
        polarity = "positive";
      } else if (polarity === "NEU") {
        polarity = "neutral";
      } else if (polarity === "N") {
        polarity = "negative";
      } else if (polarity === "N+") {
        polarity = "strongly negative";
      } else {
        polarity = "without polarity";
      }

      if (irony === "NONIRONIC") {
        irony = "without irony";
      } else if (irony === "IRONIC") {
        irony = "ironic";
      }


      // do DOM manipulation here!
      function renderResults() {
        resultsEl.innerHTML = `
        <h2> Results </h2> <br> <p>This text is <span class="results-text">${polarity}</span> with a confidence of a <span class="results-text">${confidence}</span> percent. The polarities detected in it are in <span class="results-text">${agreement}</span>. The text is <span class="results-text">${subjectivity}</span> and <span class="results-text">${irony}</span>.</p>
        `;
      }

      renderResults();
    })
    .catch((error) => console.log("error", error));

}
<<<<<<< HEAD
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({url: articleURL}),
    redirect: "follow",
  };

  const response = fetch(
    '/analyze',
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.status.msg === "Operation denied") {
        noResult();
        alert("Please enter a valid URL.");
        return
      } else if (data.status.msg === "missing required parameter(s): please specify one of txt, url, doc") {
        noResult();
        alert("Input field cannot be empty. Please enter a URL.");
        return
      }

      let polarity = data.score_tag;
      const confidence = data.confidence;
      const agreement = data.agreement;
      const subjectivity = data.subjectivity;
      let irony = data.irony;

      if (polarity === "P+") {
        polarity = "strongly positive";
      } else if (polarity === "P") {
        polarity = "positive";
      } else if (polarity === "NEU") {
        polarity = "neutral";
      } else if (polarity === "N") {
        polarity = "negative";
      } else if (polarity === "N+") {
        polarity = "strongly negative";
      } else {
        polarity = "without polarity";
      }

      if (irony === "NONIRONIC") {
        irony = "without irony";
      } else if (irony === "IRONIC") {
        irony = "ironic";
      }


      // do DOM manipulation here!
      function renderResults() {
        resultsEl.innerHTML = `
        <h2> Results </h2> <br> <p>This text is <span class="results-text">${polarity}</span> with a confidence of a <span class="results-text">${confidence}</span> percent. The polarities detected in it are in <span class="results-text">${agreement}</span>. The text is <span class="results-text">${subjectivity}</span> and <span class="results-text">${irony}</span>.</p>
        `;
      }

      renderResults();
    })
    .catch((error) => console.log("error", error));

}

export { handleSubmit };
=======

export { handleSubmit }
>>>>>>> master

export { handleSubmit };