function css(ele: Element, attr: string, value: string|number) {
  //...
}

let box2 = document.querySelector('div');
if (box2) {
    css( box2, 'width', '100px' );
    // css( box2, 'opactiy', 1 );
    // css( box2, 'opactiy', [1,2] ); //错误
}
