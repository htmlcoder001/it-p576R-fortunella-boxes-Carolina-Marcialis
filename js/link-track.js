document.addEventListener('DOMContentLoaded', function() {
  //let links = document.querySelectorAll('.tracked-link'),
  let links = document.querySelectorAll('a[href="#"]'), // get all links that scroll to form
      hiddenInput = document.getElementById('clickedLink');

  //console.log(`Links found: ${links.length}`);

  for (let i=0; i < links.length; i++) {
    let link_id = 'link' + i;
    links[i].setAttribute('data-link-id', link_id)
  }

  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Update the hidden input's value with the link's data-link-id attribute
      hiddenInput.value = this.getAttribute('data-link-id');
    });

  });

});