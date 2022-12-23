const posts = [];
const postsHTML = document.getElementsByClassName('post');

for (let i = 1; i < postsHTML.length; i++) {
  const id = i;
  const image = postsHTML[i].children[0].src;
  const title = postsHTML[i].children[1].innerText;

  let item = {
    id,
    title,
    image,
  };
  posts.push(item);
}
