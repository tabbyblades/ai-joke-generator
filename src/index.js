function showAnswer(response){
    alert(response.data.answer);
}

function getJoke () {
let apiKey = "8155of93a73b3d00et993d1e4ab007f6";
let context = "you are an AI assistant who loves pun and jokes about animals";
let prompt = "please tell me a joke about animals. please keep the joke short in length. thank you";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
}

let jokeButton = document.querySelector("button");
jokeButton.addEventListener("click",getJoke);