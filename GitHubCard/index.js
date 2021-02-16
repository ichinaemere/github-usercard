window.addEventListener('load', function(){

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

function personalCard(){

  axios.get('https://api.github.com/users/ichinaemere')
  .then(function(response){
    console.log(response.data);
    cards.appendChild(gitHubCard(response.data))
    })
    .catch((err) =>{
      console.log(err);
    })

}
personalCard();
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
let cards = document.querySelector('.cards');
// cards.appendChild(personalCard);
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

function followerCard(array){
  array.forEach(function(item){
    axios.get(`https://api.github.com/users/${item}`)
    .then(response => {
      let githubFollower = gitHubCard(response.data);
      cards.appendChild(githubFollower);
    })
    .catch((err) =>{
      console.log(err);
    })
  })

}

followerCard(followersArray);

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function gitHubCard(user){

  let newCard = document.createElement('div');
  newCard.classList.add('card');

  let cardImage = document.createElement('img');
  cardImage.src = user.avatar_url;

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  // cardInfo.style.marginBottom = "20px"

  let cardName = document.createElement('h3');
  cardName.classList.add('name');

  let userName = document.createElement('p');

  userName.classList.add('username');
  userName.textContent = `Username: ${user.login}`;

  let userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${user.location}`;

  let userProfile = document.createElement('p');
  userProfile.textContent = "Profile: ";
  let userProfileLink = document.createElement('a');
  userProfile.appendChild(userProfileLink);
  userProfileLink.textContent = user.html_url;

  let userFollowers = document.createElement('p');
  userFollowers.textContent = `Followers: ${user.followers}`;

  let userFollowing = document.createElement('p');
  userFollowing.textContent = `Following: ${user.following}`;

  let userBio = document.createElement('p');
  userBio.textContent = `Bio: ${user.bio}`;

  newCard.appendChild(cardImage);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  // let entrypoint = document.querySelector('.cards');
  cards.appendChild(newCard);

  return newCard;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

})
