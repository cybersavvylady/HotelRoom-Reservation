function getName() {
  const guestName = document.getElementById('inputName').value;
  if(guestName.length == 0){
    var errorName = document.getElementById('errorName');
    errorName.innerHTML=`
    <p>Please enter your name</p>
    `;
    return false;
  }else{
    var errorName = document.getElementById('errorName');
    errorName.innerHTML=``;
    return true;
  };
}

function getPhone() {
  const guestPhone = document.getElementById('inputPhone').value;
  if(guestPhone.length == 0){
    var errorPhone = document.getElementById('errorPhone');
    errorPhone.innerHTML=`
    <p>Please enter your phone number</p>
    `;
    return false;
  }else if(isNaN(Number(guestPhone)) || guestPhone.length !== 10){
    var errorPhone = document.getElementById('errorPhone');
    errorPhone.innerHTML=`
    <p>Please enter the valid phone number</p>
    `;
    return false;
  }else{
    var errorPhone = document.getElementById('errorPhone');
    errorPhone.innerHTML=``;
    return true;
  };
}

function dateCheck(){
  const startDate = document.getElementById('from').value;
  const endDate = document.getElementById('to').value;
  const startTimeCheck = new Date(startDate) - new Date();
  const endTimeCheck = new Date(endDate) - new Date(startDate);
  if(startTimeCheck < 0 || endTimeCheck <= 0 ){
    var errorDate = document.getElementById('errorDate');
    errorDate.innerHTML=`
    <p>Please choose the valid dates</p>
    `;
    return false;
  }else if(startDate.length == 0 || endDate.length == 0){
    var errorDate = document.getElementById('errorDate');
    errorDate.innerHTML=`
    <p>Please choose the dates</p>
    `;
    return false;
  }else{
    var errorDate = document.getElementById('errorDate');
    errorDate.innerHTML=``;
    return true;
  };
}


$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1,
          minDate: 1,
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        minDate: 1,
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
      const startDate = document.getElementById('from').value;
      const endDate = document.getElementById('to').value;
      const currentYear = new Date().getFullYear().toString();
      const startTimestamp = Math.ceil((new Date(startDate) - new Date(currentYear)) / 86400000);
      const endTimestamp = Math.ceil((new Date(endDate) - new Date(currentYear)) / 86400000);
      let hasDays = endTimestamp - startTimestamp;
      let days = (isNaN(hasDays) || hasDays < 0) ? 0 : hasDays ;
      const roomPrice = document.getElementById('setRoomPrice').value;
      const totalPrice = roomPrice * days;
      var priceCount = document.getElementById('priceCount');
      priceCount.innerHTML=`
      <div id="totalPrice" class="h5">$${roomPrice} AUD x ${days} night(s) = $${totalPrice} AUD</div>
      `;

      return date;
    }
    }

   );