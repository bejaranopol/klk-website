function function_delete() {
    const element = document.getElementById("banner1");
    element.remove();

   // const element2 = document.getElementById("banner2");
  //  element2.remove();
  } 

let daynow = new Date().getDay();
/* 1.- Try to give a different value to 'daynow' to validate the function and display the banner:
       "🏗️ Don't miss the KLK Multiservicios meeting this Wednesday at 7:00 p.m.! Learn more about our projects and how we can help you." (values 1 or 2) */
/* 2.  Method      get.Day()     returns the values from sunday to saturday:  0 to 6 */
//  ↓↓↓  Try to change the value ↓↓↓↓
 //     let daynow = 5;

let message1 = document.getElementById('banner1');
let message2 = document.getElementById('banner2');
console.log(daynow);
if (daynow !== 4 )
  {message1.style.display='flex'; 
 // message2.style.display='none';
  }

else{ 
  message1.style.display='none'; 
 // message2.style.display='flex';
  // display.innerText="Welcome to Taita's Restaurant \n Wait until Mondays or Tuesdays to see the banner";
  // display.style.textAlign="center";  
    }
