var shop = [
    {
      title: 'Crunch It Dog Toy ',
      image: './assets/506574.jpg',
      price: '3.99',
      description: 'Lorem ipsum'
    },
    {
      title: 'Rope Bone',
      image: './assets/dog.toy.jpg',
      price: '8.25',
      description: 'Lorem Ipsum'
    },
    {
      title: 'flexi® Dog Leash',
      image: './assets/5268221.jpg',
      price: '25.99',
      description: 'Lorem Ipsum'
    },
    {
      title: 'Hound Fun Feeder ',
      image: './assets/85932_MAIN._AC_SL400_V1636512458_.jpg',
      price: '7.99',
      description: 'Lorem Ipsum'
    },
    {
      title: 'Bark Control Collar',
      image: './assets/collar1notflipped_1024x1024@2x.jpg',
      price: '29.97',
      description: 'Lorem Ipsum'
    },
    {
      title: 'Scoop-it Bowl',
      image: './assets/340237.jpg',
      price: '358.50',
      description: 'Lorem Ipsum'
    },
    {
      title: 'Red Dindo ID Tag',
      image: './assets/a9r27a9.jpg',
      price: '5.99',
      description: 'Lorem Ipsum'
    },
    {
      title: 'All Stage Dog Food',
      image: './assets/dry-food-dog-400.png',
      price: '40.56',
      description: 'Lorem Ipsum'
    },
    {
      title: 'Agility Formula',
      image: './assets/agility-400.png',
      price: '37.43',
      description: 'Lorem Ipsum'
    },
    {
      title: 'Large Breed Puppy Food',
      image: './assets/dry-food-Lpup-400.png',
      price: '43.74',
      description: 'Lorem Ipsum'
    },
    {
      title: 'Pedigree',
      image: './assets/Lifes_Abundance.png',
      price: '99.99',
      description: 'Lorem Ipsum'
    },
    {
      title: 'All Life Stages Dog Food',
      image: './assets/exclusive-all-life-stages-lamb-brown-rice.png',
      price: '40.88',
      description: 'Lorem Ipsum'
    },
    {
      title: 'Remote Dog Collar',
      image: './assets/61bsjx-ADVL._AC_SL1000__1_540x.jpg',
      price: '75.99',
      description: 'Lorem Ipsum'
    },
    {
      title: 'Paw Brace for Dogs',
      image: './assets/Knee_Brace_Main_08f4b826-6d27-42dd-8045-f7c5e34b206d_grande.jpg',
      price: '62.99',
      description: 'Lorem Ipsum'
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
  