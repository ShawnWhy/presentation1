var ringArray = $('.ring');
var ringLength = ringArray.length;
for(i=0; i<ringLength;i++){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
        $(ringArray[i]).css("background-color",color);


}

$('.secOne').on('click',event=>{
    var classY = $(event.target).attr('class')
    if(classY!='pole'&&classY!="flag"&&classY!='list'&&classY!="listItem"){
    $('.button').html('')
    event.stopPropagation();
    // event.preventDefault();
    $('.section').removeClass("chosenSection");
    
    $('.secOne').addClass("chosenSection")
}})
$('.secTwo').on('click',event=>{
    var classY = $(event.target).attr('class')
    if(classY!='pole'&&classY!="flag"&&classY!='list'&&classY!="listItem"){
    $('.button').html('')
    event.stopPropagation();
    // event.preventDefault();
    $('.section').removeClass("chosenSection");
    
    $('.secTwo').addClass("chosenSection")
}})
$('.secThree').on('click',event=>{
    var classY = $(event.target).attr('class')
    if(classY!='pole'&&classY!="flag"&&classY!='list'&&classY!="listItem"){
    $('.button').html('')
    event.stopPropagation();
    // event.preventDefault();
    $('.section').removeClass("chosenSection");
    
    $('.secThree').addClass("chosenSection")
}})
$('.secFour').on('click',event=>{
    var classY = $(event.target).attr('class')
    if(classY!='pole'&&classY!="flag"&&classY!='list'&&classY!="listItem"){
    $('.button').html('')
    event.stopPropagation();
    // event.preventDefault();
    $('.section').removeClass("chosenSection");
    
    $('.secFour').addClass("chosenSection")
}})

$('.button').mouseover(event=>{
    var classY = $(event.target).attr('class')
    if(classY!='pole'&&classY!="flag"&&classY!='list'&&classY!="listItem"){
     event.stopPropagation()
     event.preventDefault()
     $(event.target).css("background-color",'red');
    }
})

$('.button').mouseleave(event=>{
    var classY = $(event.target).attr('class')
    if(classY!="flag"&&classY!='list'&&classY!="listItem"){
    event.stopPropagation()
    event.preventDefault()
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
    $(event.target).css("background-color",color);}
})

$('.button').on("click",event=>{
    var classY = $(event.target).attr('class')
    if(classY!="flag"&&classY!='list'&&classY!="listItem"&&classY!="pole"){
    $('.button').html('')
    event.preventDefault();
    event.stopPropagation();
    var pole = $('<div>');
   
    $(pole).addClass('pole');
    var thisElement=$(event.target);
    var thisValue= thisElement.attr('value')
    // console.log(thisValue);
    setTimeout(() => {
        flagDrop(thisValue,pole)
        
    }, 400);
    
    $(event.target).append(pole);
   

}})

var flagDrop= function(value,pole){
    switch( value){
        case '1':
            var flag=$('<div>')
            flag.addClass('flag')
            flag.html('<ul class="list"><li class="listItem">AS400</li><li class="listItem">helpDesk</li></ul>')
            $('.pole').append(flag)

            break;
        case '2':
            var flag=$('<div>')
            flag.addClass('flag')
            flag.html('<ul class="list"><li class="listItem">Network Monitoring</li><li class="listItem">Server Maintnance</li></ul>')
            $('.pole').append(flag)

            break;
        case '3':
            var flag=$('<div>')
            flag.addClass('flag')
            flag.html('<ul class="list"><li class="listItem">Phishing</li></ul>')
            $('.pole').append(flag)

            break;
        case '4':
            var flag=$('<div>')
            flag.addClass('flag')
            flag.html('<ul class="list"><li class="listItem">TeamWork Monitoring</li><li class="listItem">Website Update and Maintnance</li></ul>')
            $('.pole').append(flag)

            break;
    }

}

$('.cap').on('click',event=>{
    $('.button').html('')
    $('.capFront').html('')
    $('.section').removeClass("chosenSection");

})
$('.cap2').on('click',event=>{
    $('.button').html('')
    $('.capFront').html('')
    $('.section').removeClass("chosenSection");

})
$('.secOne').mouseover(event=>{
    $('.capFront').html('<p>HBB</p>')
    
    
})
$('.secTwo').mouseover(event=>{
    $('.capFront').html('<p>Sycom</p>')
 
})
$('.secThree').mouseover(event=>{
    $('.capFront').html('<p>Altria</p>')
  
})
$('.secFour').mouseover(event=>{
    $('.capFront').html('<p>Website<br> Requests</p>')
   
})
$('.cap').mouseover(event=>{
    $('.capFront').html('')
   
})
$('.cap2').mouseover(event=>{
    $('.capFront').html('')
   
})
$('.roll').mouseleave(event=>{
    $('.capFront').html('')
   
})

$('.button').on('mouseover','.listItem',event=>{
    event.stopPropagation();
    event.preventDefault();
    console.log(event.target);
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];}
    $(event.target).css("background-color",color)
})

$('.button').on('mouseleave','.listItem',event=>{
    event.stopPropagation();
    event.preventDefault();
    $(event.target).css("background-color",'')

})






