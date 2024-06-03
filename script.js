
$("button").click(function() {
    let drinkname = $(".drink-name").val();
    let drinkcost = $(".drink-cost").val();
    let drinksperweek=$(".drinks-per-week").val();
    
    //hide stuff
    
    $(".predictions").append(`<p>In ten years, you will have drank ${drinksperweek*520} ${drinkname}s at a cost of ${drinksperweek*520*drinkcost}.</p>`);
});