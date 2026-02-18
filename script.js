// Likes storage (in memory, reset on refresh)
const likes = {};

// Follow storage
const follows = new Set();

// Comments storage
const comments = {};

function likeVideo(id) {
  likes[id] = likes[id] ? likes[id] + 1 : 1;
  document.getElementById(`likes-${id}`).innerText = likes[id];
  alert(`You liked video ${id}!`);
}

function followUser(user) {
  if (follows.has(user)) {
    alert(`You already follow ${user}`);
  } else {
    follows.add(user);
    alert(`You followed ${user}`);
  }
}

function addComment(videoId) {
  const text = prompt("Enter your comment:");
  if (!text) return;
  if (!comments[videoId]) comments[videoId] = [];
  comments[videoId].push(text);
  alert(`Comment added: "${text}"`);
}
