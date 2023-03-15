let user_age = 18;
let is_subscribed = true;
let user_points = 100
if ( user_age >=18 && is_subscribed === true)
{
    console.log( "user is 18 year old  or older and subscribed" );
    
} else if(user_age>=18 && is_subscribed=== false){
     console.log("user is 18 years old or older and not subscribed ")

} else if (user_age<=18 && is_subscribed ===true){ 
    console.log("user is younger than 18 years and subscribed")
}else{
    console.log("user is younger than 18 and not subscribed ")
     
}
 
if ( user_age > 18 || is_subscribed === true || user_points >= 100 )
{
    console.log(" Wellcome our  most highly valued customer!!")
    
}
