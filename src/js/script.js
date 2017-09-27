$(document).ready(function() {

  $('body').on('click', function(event) {

      // Contact
      if ($(event.target).closest('.mail').length) {
          $('.contact-form').toggleClass('active');
          $('.mail').toggleClass('hover');

          if ($('.contact-form').hasClass('active')) {
              $('.info').css('display', 'none');
              $('.contact-form').slideDown('slow');

          } else {
              setTimeout(function() {
                $('.info').css('display', 'block');
              }, 700);
              $('.succes').css('display', 'none');
              $('.name').css('display', 'none');
              $('.email').css('display', 'none');
              $('.message').css('display', 'none');
              $('.contact-form').slideUp('slow');
          };

      } else if ($(event.target).closest('.contact-form').length) {
          $('.contact-form').addClass('active');

      // About Me
      } else if ($(event.target).closest('.aboutme').length) {
          $('.about').toggleClass('active');
          $('.aboutme').toggleClass('hover');

          if ($('.about').hasClass('active')) {
            $('.about').slideDown('slow');

          } else {
            $('.about').slideUp('slow');
          }

      } else if ($(event.target).closest('.about').length) {
          $('.about').addClass('active');

      } else {
          $('.about').removeClass('active');
          $('.about').slideUp('slow');
          $('.aboutme').removeClass('hover');
          $('.contact-form').removeClass('active');
          $('.contact-form').slideUp('slow');
          $('.mail').removeClass('hover');
          $('.info').css('display', 'block');
          $('.succes').css('display', 'none');
          $('.name').css('display', 'none');
          $('.email').css('display', 'none');
          $('.message').css('display', 'none');
      };

  });

  // Email form
  $('#send').on('click', function(event) {
      event.preventDefault();
      let nameInput = $('input[name=name]').val();
      let emailInput = $('input[name=email]').val();
      let textarea = $('textarea').val();
      let data = {
          name: nameInput,
          email: emailInput,
          message: textarea
      }

      name(nameInput);
      email(emailInput);
      message(textarea);

      if (name(nameInput) === true && email(emailInput) === true && message(textarea) === true) {

          $.ajax({
            url: "src/php/contact_form.php",
            type: "POST",
            dataType: "json",
            data: data
          });

          $('.succes').fadeIn(500).css('display', 'block');
          $('#mail').trigger('reset');

      } else {
          $('.succes').css('display', 'none');
      };

  });

  function name(event) {
      if (event.length < 3) {
          $('.name').fadeIn(300).css('display', 'block');
          return false;
      } else {
          $('.name').fadeOut(200);
          return true;
      };
  };

  function email(event) {
      let mailReg = new RegExp('^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$', 'gi');
      if (!mailReg.test(event)) {
          $('.email').fadeIn(300).css('display', 'block');
          return false;
      } else {
          $('.email').fadeOut(200);
          return true;
      };
  };

  function message(event) {
      if (event.length < 3) {
          $('.message').fadeIn(300).css('display', 'block');
          return false;
      } else {
          $('.message').fadeOut(200);
          return true;
      };
  };

  // Hide alerts on focus
  $('input[name=name]').focus(function() {
      $('.name').fadeOut(200);
  });

  $('input[name=email]').focus(function() {
      $('.email').fadeOut(200);
  });

  $('textarea').focus(function() {
      $('.message').fadeOut(200);
  });

});
