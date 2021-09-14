export function leackChecker() {
	weakRefs = new Set();
	weakSet = new WeakSet();

	return {
		selector: '[x-data]',
		status: 0,

		add: function(el) {
			weakRefs.add(new WeakRef(el));
			weakSet.add(el);
		},

		listAllive: function() {
			let allive = [];
			weakRefs.forEach((ref) => {
				let el = ref.deref();
				if (el !== undefined) {
					allive.push(`${el.localName}#${el.id}/${el.classList}`);
				}
			});
			return allive;
		},

		clear: function() {
			weakRefs.clear();
			weakSet = new WeakSet();
		},

		trackComponents: function(selector = '[x-data]') {
			this.status = 0;
			this.clear();
			console.log(`Track Components for leak detection using selector ${selector}...`);

			document.body.querySelectorAll(selector).forEach((el) => {
				if (el.id === 'leack-checker' || el.hasAttribute('data-turbo-permanent')) {
					return;
				}
				if (!el.hasAttribute('data-turbo-permanent')) {
					// Mark the element so it's easier to find it in the memory profiler.
					el.__bgc = true;
					this.add(el);
					el.remove();
				}
			});
		},

		// Running Chrome with these flags will expose a gc() method that is very useful.
		// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --js-flags="--expose-gc" --enable-memory-info
		runGC() {
			console.log('Run Garbage Collection...');
			if (!window.gc) {
				throw `window.gc() not available; you need to enable that in Chrome, e.g. /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --js-flags="--expose-gc" --enable-memory-info`;
			}
			window.gc();
			setTimeout(() => {
				console.log('Check Leaks...');
				this.status = this.listAllive().length > 0 ? 2 : 1;
				console.dir(weakSet);
			}, 2000);
		}
	};
}
