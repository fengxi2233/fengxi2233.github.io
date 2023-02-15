btf.snackbarShow('欢迎来到丨枫汐丨的小站！') 


if(window.location.href == 'http://localhost:4000/'||window.location.href == 'https://www.fengxi2233.love/'||window.location.href == 'https://fengxi2233.love/'||window.location.href == 'https://fengxi2233.github.io/'){
    Snackbar.show({ actionText: '收到',text: '欢迎来到丨枫汐丨的小站！',backgroundColor: '#55abe7ff',actionTextColor: '#55ff5f55',pos: 'top-center',duration: '5000' });
  }
onActionClick: function(element) {
    //Set opacity of element to 0 to close Snackbar
    $(element).css('opacity', 0);
    alert('Clicked Called!');
    }
