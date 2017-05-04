<!DOCTYPE html>
<html lang="en">


  <head>
   <body>
  <div class='w3-row'style="padding:5px 5px 5px 5px; border-top:2px solid #604234; border-bottom: 2px solid #604234; border-left: 2px solid #604234; border-right: 2px solid #604234; height: 340px; width: 700px;">
         <html>
         <style>
         body, html {
             height: 100%;
             margin: ;
         }

         .bgimg {
             background-image: url('images/420countdown.jpg');
             height: 100%;
             background-position: center;
             background-size: cover;
             position: relative;
             color: white;
             font-family: "Courier New", Courier, monospace;
             font-size: 30px;
         }

         .topleft {
             position: absolute;
             top: 0;
             left: 16px;
         }

         .bottomleft {
             position: absolute;
             bottom: 0;
             left: 16px;
         }

         .middle {
             position: absolute;
             top: 50%;
             left: 50%;
             transform: translate(-50%, -50%);
             text-align: center;
         }

         hr {
             margin: auto;
             width: 40%;
         }
         </style>
         <body>

         <div class="bgimg">
           <div class="topleft">
             <p></p>
           </div>
           <div class="middle">
             <h2 style="color:#3e3f3f"><b><strong> 4/20/2018 </strong></b></h2>
             <hr>
             <p id="demo" style="font-size:33px" ><strong></strong></p>
           </div>
           <div class="bottomleft">
             <p></p>
           </div>
         </div>

         <script>
         // Set the date we're counting down to
         var countDownDate = new Date("April 20, 2018").getTime();

         // Update the count down every 1 second
         var countdownfunction = setInterval(function() {

             // Get todays date and time
             var now = new Date().getTime();

             // Find the distance between now an the count down date
             var distance = countDownDate - now;

             // Time calculations for days, hours, minutes and seconds
             var days = Math.floor(distance / (1000 * 60 * 60 * 24));
             var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
             var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
             var seconds = Math.floor((distance % (1000 * 60)) / 1000);

             // Output the result in an element with id="demo"
             document.getElementById("demo").innerHTML = days + " days " + hours + " hours "
             + minutes + " minutes " + seconds + " s";

             // If the count down is over, write some text
             if (distance < 0) {
                 clearInterval(countdownfunction);
                 document.getElementById("demo").innerHTML = "Happy 4/20";
             }
         }, 1000);
         </script>

         </body>
         </html>



     </div>
   </body>

  </head>
</html>
