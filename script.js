$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.heal-button').click(clickedMedicineButton);
  
  $("#name-overlay").show();
  // Updates the pet name with user input
  $("#name-submit").click(function() {
    const inputName = $("#name-input").val();
    if (inputName) 
    { pet_info.name = inputName;
      $(".name").text(pet_info.name);
  //  $("title").text(pet_info.name);
      $("#name-overlay").fadeOut(400);
    }
    else{}
  });
  })

var pet_info = {name:"My Pet Name", weight:5.0, happiness:1.0, isDead:false};
const petImg = $(".pet-image");
// Ensure images loaded into the pet image element never exceed 200px
petImg.css({ 'max-width': '200px', 'max-height': '200px', 'height': '200px'});
  
  
    function clickedTreatButton() {
    if(pet_info.isDead != true)
    {
      petImg.addClass("eat").attr("src", "images/Leopardfood.webp").css({ 'max-width': '200px', 'max-height': '200px', 'height': '200px' });
  // after 3/4 seconds
    setTimeout(() => 
    {petImg.removeClass("eat").attr("src", "images/Leopard_transparent.webp").css({ 'max-width': '200px', 'max-height': '200px', 'height': '200px' });
          pet_info.happiness += 0.5;
          pet_info.weight += 1;
          checkAndUpdatePetInfoInHtml();
    }, 750);}
   else if(pet_info.isDead = true){
    checkAndUpdatePetInfoInHtml();
  }}
    
    function clickedPlayButton() {
    if(pet_info.isDead != true)
    {
      petImg.addClass("play").attr("src", "images/SoftSpotsCover.webp").css({ 'max-width': '200px', 'max-height': '200px', 'height': '200px' });
  // after 5/4 seconds
    setTimeout(() => 
    {petImg.removeClass("play").attr("src", "images/Leopard_transparent.webp").css({ 'max-width': '200px', 'max-height': '200px', 'height': '200px' });
          pet_info.happiness += 1.25;
          pet_info.weight -= 0.5;
          checkAndUpdatePetInfoInHtml();
    }, 1250);}
    else if(pet_info.isDead = true){
      checkAndUpdatePetInfoInHtml();
  }}
    
    function clickedExerciseButton() {
    if(pet_info.isDead != true)
    {
      petImg.addClass("exercise").attr("src", "images/Leopard_240.webp").css({ 'max-width': '200px', 'max-height': '200px' , 'height': '200px' });
  // after 1 second
    setTimeout(() => 
    {petImg.removeClass("exercise").attr("src", "images/Leopard_transparent.webp").css({ 'max-width': '200px', 'max-height': '200px', 'height': '200px' });
          pet_info.happiness -= 2;
          pet_info.weight -= 1.5;
          checkAndUpdatePetInfoInHtml();
    }, 1000);}
    else if (pet_info.isDead = true){
      checkAndUpdatePetInfoInHtml();
  }}

    function clickedMedicineButton() {
    if(pet_info.isDead == true)
    {
      petImg.addClass("heal").attr("src", "images/R218-July-Challenge.png").css({ 'max-width': '200px', 'max-height': '200px', 'height': '200px' });
  // after 2 seconds
    setTimeout(() => 
    {petImg.removeClass("heal").attr("src", "images/Leopard_transparent.webp").css({ 'max-width': '200px', 'max-height': '200px', 'height': '200px' });
          pet_info.isDead = false;
          pet_info.happiness = 0.25;
          pet_info.weight = 1;
          checkAndUpdatePetInfoInHtml();
    }, 2000);}
    else if (pet_info.isDead == false){;
  }}
  //// new Medicine function to bring pet back to life

// // recreates an actual error I made when making this for the first time
    function checkAndUpdatePetInfoInHtml() {
    if //(pet_info.weight > 0 && pet_info.weight <= 15) {
        (pet_info.weight > 0 || pet_info.weight <= 15) {
        updatePetInfoInHtml();}
      // if weight hits zero or reaches 15
    else if (pet_info.weight <= 0)
  { petImg.attr("src","images/Leopardmoods.jpg").css({ 'max-width': '200px', 'max-height': '200px', 'height': '200px' });
    pet_info.isDead = true;
    pet_info.happiness = 0;
    pet_info.weight = 0;  
      updatePetInfoInHtml();}
    else if (pet_info.weight > 15)
  { petImg.attr("src","images/Leopardmoods.jpg").css({ 'max-width': '200px', 'max-height': '200px', 'height': '200px' });
    pet_info.isDead = true;
    pet_info.happiness = 0;  
      updatePetInfoInHtml();}  
    }
    
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  