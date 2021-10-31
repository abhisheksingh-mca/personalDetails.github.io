
// return true form is valid
function validate(){

    let f=false;
    //name field
    let fname =$('.fname-field').val();
    if(fname == '' || fname == undefined){
        $('.fname-field-msg').html('Enter first Name !').addClass('text-danger');
    }else{
        $('.fname-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    let lname =$('.lname-field').val();
    if(lname == '' || lname == undefined){
        $('.lname-field-msg').html('Enter last Name !').addClass('text-danger');
    }else{
        $('.lname-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }
    let fatname =$('.fat-field').val();
    if(fatname == '' || fatname == undefined){
        $('.fat-field-msg').html('Enter father Name !').addClass('text-danger');
    }else{
        $('.fat-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }
    let motname =$('.mot-field').val();
    if(motname == '' || motname == undefined){
        $('.mot-field-msg').html('Enter mother Name !').addClass('text-danger');
    }else{
        $('.mot-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    //gender 
    if( (document.getElementById('male').checked) ||(document.getElementById('female').checked)){
        $('.gen-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }else{
        $('.gen-field-msg').html('Select Matrial Status !').addClass('text-danger');
    }

    //Employee Id
    let empname =$('.emp-field').val();
    if(empname == '' || empname == undefined){
        $('.emp-field-msg').html('Enter Employee ID !').addClass('text-danger');
    }else{
        $('.emp-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    //Email
    let email=$('.email-field').val();
    let exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email=='' || email == undefined){
        $('.email-field-msg').html('Email required!!').addClass('text-danger');
        f=false;
    }else if(exp.test(email)==false){
        $('.email-field-msg').html('Invalid Email, Please enter Valid Email !').addClass('text-danger');
        f=false;
    }else{
        $('.email-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    // Date Of Birth
    let DoB =$('.dateBirth').val();
    if(DoB == '' || DoB == undefined){
        $('.DoB-field-msg').html('Select Date Of Birth !').addClass('text-danger');
    }else{
        $('.DoB-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    //Matrial Status
    if( (document.getElementById('Married').checked) ||(document.getElementById('Unmarried').checked)){
        $('.mat-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }else{
        $('.mat-field-msg').html('Select Matrial Status !').addClass('text-danger');
    }

    //Mobile
    let mobile = $('.mobile').val();
    if(mobile == '' || mobile == undefined){
        $('.mob-field-msg').html('Enter Mobile Number !').addClass('text-danger');
    }
    else if(mobile.length != 10){
        $('.mob-field-msg').html('Enter Valid Mobile Number !').addClass('text-danger');
    }
    else{
        $('.mob-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    //cast/color
    let cast = jQuery("select[name=cast]").val();
    if(cast == 0){
        $('.cast-field-msg').html('Select Cast/Color !').addClass('text-danger');
    }else{
        $('.cast-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    //reglion
    let reg = jQuery("select[name=reglion]").val();
    if(reg == 0){
        $('.reg-field-msg').html('Select Reglion !').addClass('text-danger');
    }else{
        $('.reg-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }
    
    //blood group
    let blood = jQuery("select[name=blood]").val();
    if(blood == 0){
        $('.blood-field-msg').html('Select Blood group !').addClass('text-danger');
    }else{
        $('.blood-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    //country
    let country = jQuery("select[name=country]").val();
    if(country == 0){
        $('.country-field-msg').html('Select Country !').addClass('text-danger');
    }else{
        $('.country-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    //state
    let state = jQuery("select[name=state]").val();
    if(state == 0){
        $('.state-field-msg').html('Select State !').addClass('text-danger');
    }else{
        $('.state-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    //city
    let city = jQuery("select[name=city]").val();
    if(city == 0){
        $('.city-field-msg').html('Select City !').addClass('text-danger');
        // console.log("if-0");
    }else{
        $('.city-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
        // console.log('if-3');
    }
    //Pin Code
    let pin = $('.pincode').val();
    if(pin == '' || pin == undefined){
        $('.pin-field-msg').html('Enter 6 digit Pincode !').addClass('text-danger');
    }
    else if(pin.length != 6){
        $('.pin-field-msg').html('Enter valid Pincode Number !').addClass('text-danger');
    }
    else{
        $('.pin-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    //Address
    let add = $('.address').val();
    if(add == '' || add == undefined){
        $('.add-field-msg').html('Enter atleast an address !').addClass('text-danger');
    }
    else{
        $('.add-field-msg').html('&#10003;').removeClass('text-danger').addClass('text-success');
        f=true;
    }

    return f;
}