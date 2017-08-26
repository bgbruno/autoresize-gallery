//
// author: BG (c) 2017, bruno.onlyme@gmail.com, https://bgstudio.online
// version: initial release @2017-03-23
// name: autosize gallery control
//


// control init


(function() {
    document.getElementsByClassName('gallery-autosize')[0].style['visibility'] = 'hidden';
});
$(window).on("load", function() {
    processControl('.gallery-autosize');
});
$(window).on('resize', function() {
    processControl('.gallery-autosize');
});



function processControl(controlClass) {
    
    var galleryControl = $(controlClass);
    
    // tu sk'úsiť dať ešte visibility: hidden
    
    // initial resizing
    resizeItems(controlClass);
    
    // show control after all is set
    $(galleryControl).css('visibility', 'visible');
    
    // after resizing - fixing scrollbar
    resizeItems(controlClass);
    
}



function resizeItems(jqControl) {
    
    // 
    // get inputs
    // 
    
    
    var galleryControl = jqControl;
    var itemWidth = $(galleryControl).attr('data-itemWidth');
    var itemHeight = $(galleryControl).attr('data-itemHeight');
    var itemMargin = $(galleryControl).attr('data-itemMargin');
    var itemsMinRowsCount = $(galleryControl).attr('data-itemsMinRowsCount');
    var itemsMinCount = $(galleryControl).attr('data-itemsMinCount');
    var allItems = $(galleryControl).find('.items > *');
    var allItemsContents = $(galleryControl).find('.items > * > *');
    var controlWidth = $(galleryControl).parent().width();
    
    
    // 
    // set outputs
    // 
    
    
    // set items initial width
    

    // set default size for designed wrapper width
    $(allItems).each(function() {
        $(this).css('width', itemWidth); //set
        $(this).css('height', itemHeight); //set
    });
    $(allItemsContents).each(function() {
        $(this).css('width', itemWidth); //set
        $(this).css('height', itemHeight); //set
    });
    
    
    // set items filled width
    
    
    // reset
    $(allItems).each(function() {
        $(this).css('display', '');
        $(this).css('margin-right', '');
        $(this).css('height', '');
    });
    $(allItemsContents).each(function() {
        $(this).css('height', '');
    });
    
    // set hide items outside minimal rows
    var availableItemsCountPerRow = Math.floor(controlWidth / itemWidth);
    var shownItemsCount = itemsMinRowsCount * availableItemsCountPerRow;
    if (shownItemsCount < itemsMinCount) {
        shownItemsCount = Math.ceil(itemsMinCount / availableItemsCountPerRow) * availableItemsCountPerRow;
    }
    var outsideItems = '.item:nth-child(n+' + shownItemsCount + ')';
    $(galleryControl).find(outsideItems).each(function() {
        $(this).css('display', 'none');
    });
    
    // set last item in row no margin because we want 100% fill
    var withoutBorderItems = '.item:nth-child(' + (availableItemsCountPerRow) + 'n+0)';
    $(galleryControl).find(withoutBorderItems).each(function() {
        $(this).css('margin-right', 0);
    });
    
    // after resize
    var resizedAvailableWrapperWidth = controlWidth - (availableItemsCountPerRow * itemMargin - itemMargin);
    var resizedItemWidth = resizedAvailableWrapperWidth / availableItemsCountPerRow;
    $(allItems).each(function() {
        $(this).css('width', resizedItemWidth);
    });
    $(allItemsContents).each(function() {
        $(this).css('width', resizedItemWidth);
    });
    
    // set all elements height by first
    var resizedItemHeight = $(allItems)[0].clientHeight;
    $(allItems).each(function() {
        $(this).css('height', resizedItemHeight);
    });
    $(allItemsContents).each(function() {
        $(this).css('height', resizedItemHeight);
    });
    
}


