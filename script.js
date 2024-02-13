//toggle button
const toggle = document.querySelector('.toggle');
const checkbox = toggle.querySelector('#check');
toggle.addEventListener('change', function(e){
 const monthly = document.querySelectorAll('.monthly');
 const annually = document.querySelectorAll('.annual');
  if(checkbox.checked){
    Array.from(monthly).forEach(function(month){
    month.style.display="initial";
    })
    
    Array.from(annually).forEach(function(annual){
    annual.style.display="none";
    })
  } else{
    Array.from(monthly).forEach(function(month){
    month.style.display="none";
    })
    Array.from(annually).forEach(function(annual){
    annual.style.display="initial";
    })
  }
})