const { setToFlex, setToNone } = require('../js/dom.js')
describe('navigation popout', () => {
	test('turn on nav', () => {
		const mainNav = document.createElement('nav');
		mainNav.classList.add('main__nav'); 
		setToFlex(mainNav);

		expect(mainNav.style.display).toEqual('flex');
	})

	test('turns off nav', () => {
		const mainNav = document.createElement('nav');
		mainNav.classList.add('main__nav'); 	
		setToNone(mainNav);

		expect(mainNav.style.display).toEqual('none');
	})
})