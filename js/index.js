window.onload = () => {
  const cats = [{
    name: 'cat1',
    counter: 0,
    imageURL: '/assets/cat.jpg'
  }, {
    name: 'cat2',
    counter: 0,
    imageURL: '/assets/cat2.jpg'
  }, {
    name: 'cat3',
    counter: 0,
    imageURL: '/assets/cat3.jpg'
  }, {
    name: 'cat4',
    counter: 0,
    imageURL: '/assets/cat2.jpg'
  }, {
    name: 'cat5',
    counter: 0,
    imageURL: '/assets/cat.jpg'
  }];

  addCats = (cats) => {
    cats.forEach((cat) => {
      addCatToDom(cat);
    });
  };
  addCatToDom = (cat) => {
    const container = document.getElementById('container');
    const catContainer = document.createElement('div');
    container.append(catContainer);
    const catNameElement = document.createElement('div');
    catNameElement.innerText = cat.name;
    catContainer.append(catNameElement);
    const catElement = document.createElement('img');
    catElement.src = cat.imageURL;
    catContainer.append(catElement);
    const clicksCountElement = document.createElement('div');
    clicksCountElement.innerHTML = `Clicks: ${cat.counter}`;
    catContainer.append(clicksCountElement);  
    catElement.addEventListener('click', () => {
      cat.counter++;
      clicksCountElement.innerHTML = `Clicks: ${cat.counter}`;
    });
  };
  addCats(cats);
};
