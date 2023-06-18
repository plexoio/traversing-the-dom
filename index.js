/** Methods to navigate/traverse the DOM
 * 
 * parent() // upper
 * children('') // downer, specify if many, same scope
 * next() // same scope
 * prev() // same scope
 * toggleClass('') // on & off class
 * 
 * first('') // of the same kind "''"
 * last('') // of the same kind "''"
 * siblings('') // of the same scope "''", can specify one of many
 * filter('//matching_key') // of the same kind "''" remove those not matching & apply criteria otherwise
    $('p').filter('.intro').addClass('highlight'); // all 'p' with '.intro' class
 */


$('#reset').click(function(){
	$(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green').removeClass('large-font');
});

$('#card-btn-1').click(function(){
	$(this).siblings('span').addClass('yellow');
});

$('#card-btn-2').click(function(){
    $(this).siblings('#card-par-1').addClass('red');
});

$('#card-btn-3').click(function(){
	$(this).siblings().addClass('large-font');
});