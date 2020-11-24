// ↓ハンバーガーメニューバツ切り替え


$(function(){
	var duration = 300;
	
	var $js__open = $('#js__open');
	
	var $closewrap = $('#menuclose-wrap');
	
	var $menubtn = $('#menu-btn');
//↓ナビエリア外をクリックして閉じさせる（クラスの除去、animateの初期化）
	$closewrap
	.on('click',function(){
		$menubtn.find('#panel-btn-icon').removeClass('switch');
		$js__open.removeClass('nav-open');
		
		if($menubtn.find('#panel-btn-icon').hasClass('switch')){
		$menubtn.find('p > img')
		.attr('src','../images/close.svg');
	}else{
		$menubtn.find('p > img')
		.attr('src', '../images/menu.svg');
	}
//↑↑
	if($js__open.hasClass('nav-open')){
		$js__open.stop(true).animate({
			right: '0px'
		},duration);
		
	}else{
		$js__open.stop(true).animate({
			right: '-63vw'
		},duration);
	}
	});
	
//↓メニュクリックしてナビ展開
	$menubtn
	.on('click',function(){
		$(this).find('#panel-btn-icon').toggleClass('switch');
		$js__open.stop(true).toggleClass('nav-open');
	

//↓menu,close表示切り替え
	if($menubtn.find('#panel-btn-icon').hasClass('switch')){
		$menubtn.find('p > img')
		.attr('src','../images/close.svg');
	}else{
		$menubtn.find('p > img')
		.attr('src', '../images/menu.svg');
	}
//↑↑
	if($js__open.hasClass('nav-open')){
		$js__open.stop(true).animate({
			right: '0px'
		},duration);
		
	}else{
		$js__open.stop(true).animate({
			right: '-63vw'
		},duration);
	}
	});
	
	
//↓続きボタン
	$('.main-content_wrapper').find('.readmore > a')
	.on('mouseover',function(){
		$(this).stop(true).animate({
			backgroundColor: '#1E2633',
			color: '#ffffff'
		},duration);
	})
	.on('mouseout',function(){
		$(this).stop(true).animate({
			backgroundColor: '#F8F4F4',
			color: '#1E2633'
		},duration);
	});
	
//↓↓sticky-header
	$('.header-navwrap').each(function(){
		
		var $window = $(window),
			$header = $(this),
			//ヘッダーデフォルト位置を取得
			headerOffsetTop = $header.offset().top;
		
		$window.on('scroll',function(){
			
			if($window.scrollTop() > headerOffsetTop) {
				$header.addClass('sticky');
			} else {
				$header.removeClass('sticky');
			}
		});
		
		$window.trigger('scroll');
	});
});
//↑↑






