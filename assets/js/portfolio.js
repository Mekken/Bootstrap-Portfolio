$(document).ready(function(){
    function openNewTab(url)
    {
        window.open(url,'_blank');
    }

    $('#train-schedule').on('click',function() {
        openNewTab('https://mekken.github.io/train-schedule/');
    }).hover(function() {
        $(this).toggleClass('shadow-sm p-3 mb-5 bg-white rounded');
    })

    $('#project-1').on('click',function() {
        openNewTab('https://mekken.github.io/Project-1/');
    }).hover(function() {
        $(this).toggleClass('shadow-sm p-3 mb-5 bg-white rounded');
    })
})