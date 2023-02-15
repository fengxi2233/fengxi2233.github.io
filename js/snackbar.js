if(window.location.href == 'http://localhost:4000/'||window.location.href == 'https://fengxi2233.love/'||window.location.href == 'https://fengxi2233.github.io/')
Snackbar.show({
       text: '欢迎来到枫汐的小站。',
       width: '475px',
       onActionClick: function(element) {
           //Set opacity of element to 0 to close Snackbar
           $(element).css('opacity', 0);
           alert('Clicked Called!');
       }
    });

    Snackbar.show({ actionText: '收到！', });

    Snackbar.show({ actionTextColor: '#5fff9698', });      