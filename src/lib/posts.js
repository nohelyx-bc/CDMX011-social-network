/* eslint-disable object-curly-newline */
import firebase from './secret.js';
import { db, showPosts, getPosts } from './firestore.js';


export const Posts = () => {
  const postDiv = document.createElement('div');

  getPosts().onSnapshot((doc) => {
    const allPost = [];
    doc.forEach((element) => allPost.push({ postId: element.id, infopost: element.data() }));
    console.log(allPost);
    allPost.forEach(post=>{
      let nediv = document.createElement('div');
      nediv.textContent="algo"

      postDiv.appendChild(nediv)
    }
    )

  });
  return postDiv;
};

