"use strict";

const MAX_LENGTH = 200;

const authors = ['Tyrone', 'Ava', 'Elijah', 'Lucas', 'Ebony', 'Keisha', 'Jemila', 'Daniel'];

const articles = [
  {
    title: 'CSS Selectors',
    author: 'Tyrone',
    date: new Date(2023, 1, 20),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolore? Eveniet numquam quam qui quae laboriosam maxime deleniti aperiam quasi culpa veniam, voluptatibus molestias soluta error ratione assumenda sunt. Sapiente doloribus, nulla a tempora assumenda nostrum est enim corporis fugit quasi ipsam eveniet distinctio impedit dolorum eum dolor. Distinctio, reiciendis!'
  },

  {
    title: 'Cascading',
    author: 'chiii',
    date: new Date(2023, 2, 1),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatum iste? Nisi exercitationem, consectetur unde ab placeat nemo deserunt consequuntur.'
  },

  {
    title: 'CSS Grid',
    author: 'Keisha',
    date: new Date(2023, 2, 12),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam aliquam debitis dolores dolorem corporis ipsum itaque culpa, et eaque? Aliquam, est eveniet voluptatem nemo doloremque esse odit dolorum dicta consectetur ipsam corrupti perspiciatis voluptas cupiditate et sapiente. Eligendi modi fugiat pariatur facere, molestiae nihil accusamus animi a impedit laboriosam tempora, eum in iure tenetur fugit praesentium consectetur mollitia ut obcaecati delectus ipsa dolores commodi? Rerum, temporibus velit eum iste praesentium modi amet molestiae illum enim quos pariatur quasi vero quidem, minus placeat assumenda recusandae fugit sunt voluptatem est neque qui! Ut optio quis accusamus placeat ipsa laboriosam laborum debitis.'
  }
];

articles.forEach(article=>{
  addEntry(article);
});


/**
 * This function creates a DOM elment with information from the article object, and adds the element into the DOM.
 * @param {object} article - an article
 */
function addEntry(article) {
  // create article element
  
  const articleElement = document.createElement('article');
  articleElement.classList.add('article-container');///Just adding class so dont use dot 



  // add article element to the DOM
  const articlesWrapper = document.querySelector('.articles-wrapper');//// selecting class so you use the dot
  articlesWrapper.appendChild(articleElement);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = "✕";
  articleElement.appendChild(deleteButton);

  const articleHeader = document.createElement('div');
  articleHeader.classList.add("article-header");
  articleElement.appendChild(articleHeader)

  const imgElement = document.createElement('img');
  imgElement.classList.add("avatar");


  const index = authors.findIndex(author => article.author === author);//// finding the index of the current author.

  if(index !== -1){

    imgElement.src = "images/avatar" + index + ".png";

  }

  else {

    imgElement.src = "images/default.jpeg";

  }

  imgElement.alt = "avatarpicture";


  const authorDate = document.createElement('div');

  authorDate.textContent = article.author + " · " + article.date.toDateString();

  articleHeader.appendChild(imgElement);
  articleHeader.appendChild(authorDate);

  const articleBody = document.createElement('div');
  articleBody.classList.add('article-body');
  articleElement.appendChild(articleBody);

  const title = document.createElement('h3');
  title.textContent = article.title;
  articleBody.appendChild(title);

  const bodyp = document.createElement('p');
  articleBody.appendChild(bodyp);


if(article.content.length <= MAX_LENGTH){

  bodyp.textContent = article.content;


}

else {

  bodyp.textContent = article.content.substring(0, MAX_LENGTH);
  const spanFirst = document.createElement('span');
  spanFirst.textContent = '...'
  bodyp.appendChild(spanFirst);

  const spanSecond = document.createElement('span');
  spanSecond.textContent = article.content.substring(MAX_LENGTH);
  spanSecond.classList.add('hidden')
  bodyp.appendChild(spanSecond);

  const newButton= document.createElement('button');
  newButton.classList.add("btn");
  newButton.textContent = "Read More";

  articleBody.appendChild(newButton);





  
  
}




  
}








