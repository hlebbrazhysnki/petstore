var shop = [
    {
      title: 'Crunch It Dog Toy ',
      image: './assets/506574.jpg',
      price: '3.99',
      description: 'lorem ipsum'
    },
    {
      title: 'Rope Bone',
      image: './assets/dog.toy.jpg',
      price: '8.25',
      description: 'lorem ipsum'
    },
    {
      title: 'flexi® Dog Leash',
      image: './assets/5268221.jpg',
      price: '25.99',
      description: 'lorem ipsum'
    },
    {
      title: 'Hound Fun Feeder ',
      image: './assets/85932_MAIN._AC_SL400_V1636512458_.jpg',
      price: '7.99',
      description: 'lorem ipsum'
    },
    {
      title: 'Bark Control Collar',
      image: './assets/collar1notflipped_1024x1024@2x.jpg',
      price: '29.97',
      description: 'lorem ipsum'
    },
    {
      title: 'Scoop-it Bowl',
      image: './assets/340237.jpg',
      price: '358.50',
      description: 'lorem ipsum'
    },
    {
      title: 'Red Dindo ID Tag',
      image: './assets/a9r27a9.jpg',
      price: '5.99',
      description: 'lorem ipsum'
    },
    {
      title: 'All Stage Dog Food',
      image: './assets/dry-food-dog-400.png',
      price: '40.56',
      description: 'lorem ipsum'
    },
    {
      title: 'Agility Formula',
      image: './assets/agility-400.png',
      price: '37.43',
      description: 'lorem ipsum'
    },
    {
      title: 'Pedigree',
      image: './assets/dog.food.jpg',
      price: '19.88',
      description: 'lorem ipsum'
    },
    {
      title: 'Pedigree',
      image: './assets/dog.food.jpg',
      price: '19.88',
      description: 'lorem ipsum'
    },
    {
      title: 'Pedigree',
      image: './assets/dog.food.jpg',
      price: '19.88',
      description: 'lorem ipsum'
    },
    {
      title: 'Pedigree',
      image: './assets/dog.food.jpg',
      price: '19.88',
      description: 'lorem ipsum'
    },
    {
      title: 'Pedigree',
      image: './assets/dog.food.jpg',
      price: '19.88',
      description: 'lorem ipsum'
    },
    
    
   
    
    
    
    ]
    
    var postHTML = " "
  
  

  
  
  
    
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="card mx-4 my-2 ' + '"><h5 class="card-title">' + shop[i].title + '</h5>'
        var image = '<img class ="card-img-top" src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p>'
        var description = '<div class="card-body"><p class="card-text">'+ shop[i].description + '</p><a href="#" type="button" class="btn btn-warning"> Add To Cart</a></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  