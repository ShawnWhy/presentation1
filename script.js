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
    $('.button').html('')
    event.stopPropagation();
    // event.preventDefault();
    $('.section').removeClass("chosenSection");
    
    $('.secOne').addClass("chosenSection")
})
$('.secTwo').on('click',event=>{
    $('.button').html('')
    event.stopPropagation();
    // event.preventDefault();
    $('.section').removeClass("chosenSection");
    
    $('.secTwo').addClass("chosenSection")
})
$('.secThree').on('click',event=>{
    $('.button').html('')
    event.stopPropagation();
    // event.preventDefault();
    $('.section').removeClass("chosenSection");
    
    $('.secThree').addClass("chosenSection")
})
$('.secFour').on('click',event=>{
    $('.button').html('')
    event.stopPropagation();
    // event.preventDefault();
    $('.section').removeClass("chosenSection");
    
    $('.secFour').addClass("chosenSection")
})

$('.button').mouseover(event=>{
     event.stopPropagation()
     event.preventDefault()
     $(event.target).css("background-color",'red');
})

$('.button').mouseleave(event=>{
    event.stopPropagation()
    event.preventDefault()
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
    $(event.target).css("background-color",color);
})

$('.button').on("click",event=>{
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
   

})

var flagDrop= function(value,pole){
    switch( value){
        case '1':
            var flag=$('<div>')
            flag.addClass('flag')
            $('.pole').append(flag)

            break;
        case '2':
            var flag=$('<div>')
            flag.addClass('flag')
            $('.pole').append(flag)

            break;
        case '3':
            var flag=$('<div>')
            flag.addClass('flag')
            $('.pole').append(flag)

            break;
        case '4':
            var flag=$('<div>')
            flag.addClass('flag')
            $('.pole').append(flag)

            break;
    }

}


