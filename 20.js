// try-catch block to handle an error of API fetch

url = "https://jsonplaceholder.typicode.com/todos/1";

async function getData() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (e) {
    console.error("unable to fetch data: " + e);
  }
}

getData();
