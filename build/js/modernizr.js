/*!
 * Modernizr v2.7.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

		var version = '2.7.1',

		Modernizr = {},

		/*>>cssclasses*/
		// option for enabling the HTML classes to be added
		enableClasses = true,
		/*>>cssclasses*/

		docElement = document.documentElement,

		/**
		 * Create our "modernizr" element that we do most feature tests on.
		 */
		mod = 'modernizr',
		modElem = document.createElement(mod),
		mStyle = modElem.style,

		/**
		 * Create the input element for various Web Forms feature tests.
		 */
		inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

		/*>>smile*/
		smile = ':)',
		/*>>smile*/

		toString = {}.toString,

		// TODO :: make the prefixes more granular
		/*>>prefixes*/
		// List of property values to set for css tests. See ticket #21
		prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
		/*>>prefixes*/

		/*>>domprefixes*/
		// Following spec is to expose vendor-specific style properties as:
		//   elem.style.WebkitBorderRadius
		// and the following would be incorrect:
		//   elem.style.webkitBorderRadius

		// Webkit ghosts their properties in lowercase but Opera & Moz do not.
		// Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
		//   erik.eae.net/archives/2008/03/10/21.48.10/

		// More here: github.com/Modernizr/Modernizr/issues/issue/21
		omPrefixes = 'Webkit Moz O ms',

		cssomPrefixes = omPrefixes.split(' '),

		domPrefixes = omPrefixes.toLowerCase().split(' '),
		/*>>domprefixes*/

		/*>>ns*/
		ns = {'svg': 'http://www.w3.org/2000/svg'},
		/*>>ns*/

		tests = {},
		inputs = {},
		attrs = {},

		classes = [],

		slice = classes.slice,

		featureName, // used in testing loop


		/*>>teststyles*/
		// Inject element with style element and some CSS rules
		injectElementWithStyles = function( rule, callback, nodes, testnames ) {

			var style, ret, node, docOverflow,
					div = document.createElement('div'),
					// After page load injecting a fake body doesn't work so check if body exists
					body = document.body,
					// IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
					fakeBody = body || document.createElement('body');

			if ( parseInt(nodes, 10) ) {
					// In order not to give false positives we create a node for each test
					// This also allows the method to scale for unspecified uses
					while ( nodes-- ) {
							node = document.createElement('div');
							node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
							div.appendChild(node);
					}
			}

			// <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
			// when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
			// with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
			// msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
			// Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
			style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
			div.id = mod;
			// IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
			// Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
			(body ? div : fakeBody).innerHTML += style;
			fakeBody.appendChild(div);
			if ( !body ) {
					//avoid crashing IE8, if background image is used
					fakeBody.style.background = '';
					//Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
					fakeBody.style.overflow = 'hidden';
					docOverflow = docElement.style.overflow;
					docElement.style.overflow = 'hidden';
					docElement.appendChild(fakeBody);
			}

			ret = callback(div, rule);
			// If this is done after page load we don't want to remove the body so check if body exists
			if ( !body ) {
					fakeBody.parentNode.removeChild(fakeBody);
					docElement.style.overflow = docOverflow;
			} else {
					div.parentNode.removeChild(div);
			}

			return !!ret;

		},
		/*>>teststyles*/

		/*>>mq*/
		// adapted from matchMedia polyfill
		// by Scott Jehl and Paul Irish
		// gist.github.com/786768
		testMediaQuery = function( mq ) {

			var matchMedia = window.matchMedia || window.msMatchMedia;
			if ( matchMedia ) {
				return matchMedia(mq).matches;
			}

			var bool;

			injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
				bool = (window.getComputedStyle ?
									getComputedStyle(node, null) :
									node.currentStyle)['position'] == 'absolute';
			});

			return bool;

		 },
		 /*>>mq*/


		/*>>hasevent*/
		//
		// isEventSupported determines if a given element supports the given event
		// kangax.github.com/iseventsupported/
		//
		// The following results are known incorrects:
		//   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
		//   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
		//   ...
		isEventSupported = (function() {

			var TAGNAMES = {
				'select': 'input', 'change': 'input',
				'submit': 'form', 'reset': 'form',
				'error': 'img', 'load': 'img', 'abort': 'img'
			};

			function isEventSupported( eventName, element ) {

				element = element || document.createElement(TAGNAMES[eventName] || 'div');
				eventName = 'on' + eventName;

				// When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
				var isSupported = eventName in element;

				if ( !isSupported ) {
					// If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
					if ( !element.setAttribute ) {
						element = document.createElement('div');
					}
					if ( element.setAttribute && element.removeAttribute ) {
						element.setAttribute(eventName, '');
						isSupported = is(element[eventName], 'function');

						// If property was created, "remove it" (by setting value to `undefined`)
						if ( !is(element[eventName], 'undefined') ) {
							element[eventName] = undefined;
						}
						element.removeAttribute(eventName);
					}
				}

				element = null;
				return isSupported;
			}
			return isEventSupported;
		})(),
		/*>>hasevent*/

		// TODO :: Add flag for hasownprop ? didn't last time

		// hasOwnProperty shim by kangax needed for Safari 2.0 support
		_hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

		if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
			hasOwnProp = function (object, property) {
				return _hasOwnProperty.call(object, property);
			};
		}
		else {
			hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
				return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
			};
		}

		// Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
		// es5.github.com/#x15.3.4.5

		if (!Function.prototype.bind) {
			Function.prototype.bind = function bind(that) {

				var target = this;

				if (typeof target != "function") {
						throw new TypeError();
				}

				var args = slice.call(arguments, 1),
						bound = function () {

						if (this instanceof bound) {

							var F = function(){};
							F.prototype = target.prototype;
							var self = new F();

							var result = target.apply(
									self,
									args.concat(slice.call(arguments))
							);
							if (Object(result) === result) {
									return result;
							}
							return self;

						} else {

							return target.apply(
									that,
									args.concat(slice.call(arguments))
							);

						}

				};

				return bound;
			};
		}

		/**
		 * setCss applies given styles to the Modernizr DOM node.
		 */
		function setCss( str ) {
				mStyle.cssText = str;
		}

		/**
		 * setCssAll extrapolates all vendor-specific css strings.
		 */
		function setCssAll( str1, str2 ) {
				return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
		}

		/**
		 * is returns a boolean for if typeof obj is exactly type.
		 */
		function is( obj, type ) {
				return typeof obj === type;
		}

		/**
		 * contains returns a boolean for if substr is found within str.
		 */
		function contains( str, substr ) {
				return !!~('' + str).indexOf(substr);
		}

		/*>>testprop*/

		// testProps is a generic CSS / DOM property test.

		// In testing support for a given CSS property, it's legit to test:
		//    `elem.style[styleName] !== undefined`
		// If the property is supported it will return an empty string,
		// if unsupported it will return undefined.

		// We'll take advantage of this quick test and skip setting a style
		// on our modernizr element, but instead just testing undefined vs
		// empty string.

		// Because the testing of the CSS property names (with "-", as
		// opposed to the camelCase DOM properties) is non-portable and
		// non-standard but works in WebKit and IE (but not Gecko or Opera),
		// we explicitly reject properties with dashes so that authors
		// developing in WebKit or IE first don't end up with
		// browser-specific content by accident.

		function testProps( props, prefixed ) {
				for ( var i in props ) {
						var prop = props[i];
						if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
								return prefixed == 'pfx' ? prop : true;
						}
				}
				return false;
		}
		/*>>testprop*/

		// TODO :: add testDOMProps
		/**
		 * testDOMProps is a generic DOM property test; if a browser supports
		 *   a certain property, it won't return undefined for it.
		 */
		function testDOMProps( props, obj, elem ) {
				for ( var i in props ) {
						var item = obj[props[i]];
						if ( item !== undefined) {

								// return the property name as a string
								if (elem === false) return props[i];

								// let's bind a function
								if (is(item, 'function')){
									// default to autobind unless override
									return item.bind(elem || obj);
								}

								// return the unbound function or obj or value
								return item;
						}
				}
				return false;
		}

		/*>>testallprops*/
		/**
		 * testPropsAll tests a list of DOM properties we want to check against.
		 *   We specify literally ALL possible (known and/or likely) properties on
		 *   the element including the non-vendor prefixed one, for forward-
		 *   compatibility.
		 */
		function testPropsAll( prop, prefixed, elem ) {

				var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
						props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

				// did they call .prefixed('boxSizing') or are we just testing a prop?
				if(is(prefixed, "string") || is(prefixed, "undefined")) {
					return testProps(props, prefixed);

				// otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
				} else {
					props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
					return testDOMProps(props, prefixed, elem);
				}
		}
		/*>>testallprops*/


		/**
		 * Tests
		 * -----
		 */

		// The *new* flexbox
		// dev.w3.org/csswg/css3-flexbox

		tests['flexbox'] = function() {
			return testPropsAll('flexWrap');
		};

		// The *old* flexbox
		// www.w3.org/TR/2009/WD-css3-flexbox-20090723/

		tests['flexboxlegacy'] = function() {
				return testPropsAll('boxDirection');
		};

		// On the S60 and BB Storm, getContext exists, but always returns undefined
		// so we actually have to call getContext() to verify
		// github.com/Modernizr/Modernizr/issues/issue/97/

		tests['canvas'] = function() {
				var elem = document.createElement('canvas');
				return !!(elem.getContext && elem.getContext('2d'));
		};

		tests['canvastext'] = function() {
				return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
		};

		// webk.it/70117 is tracking a legit WebGL feature detect proposal

		// We do a soft detect which may false positive in order to avoid
		// an expensive context creation: bugzil.la/732441

		tests['webgl'] = function() {
				return !!window.WebGLRenderingContext;
		};

		/*
		 * The Modernizr.touch test only indicates if the browser supports
		 *    touch events, which does not necessarily reflect a touchscreen
		 *    device, as evidenced by tablets running Windows 7 or, alas,
		 *    the Palm Pre / WebOS (touch) phones.
		 *
		 * Additionally, Chrome (desktop) used to lie about its support on this,
		 *    but that has since been rectified: crbug.com/36415
		 *
		 * We also test for Firefox 4 Multitouch Support.
		 *
		 * For more info, see: modernizr.github.com/Modernizr/touch.html
		 */

		tests['touch'] = function() {
				var bool;

				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
					bool = true;
				} else {
					injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
						bool = node.offsetTop === 9;
					});
				}

				return bool;
		};


		// geolocation is often considered a trivial feature detect...
		// Turns out, it's quite tricky to get right:
		//
		// Using !!navigator.geolocation does two things we don't want. It:
		//   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
		//   2. Disables page caching in WebKit: webk.it/43956
		//
		// Meanwhile, in Firefox < 8, an about:config setting could expose
		// a false positive that would throw an exception: bugzil.la/688158

		tests['geolocation'] = function() {
				return 'geolocation' in navigator;
		};


		tests['postmessage'] = function() {
			return !!window.postMessage;
		};


		// Chrome incognito mode used to throw an exception when using openDatabase
		// It doesn't anymore.
		tests['websqldatabase'] = function() {
			return !!window.openDatabase;
		};

		// Vendors had inconsistent prefixing with the experimental Indexed DB:
		// - Webkit's implementation is accessible through webkitIndexedDB
		// - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
		// For speed, we don't test the legacy (and beta-only) indexedDB
		tests['indexedDB'] = function() {
			return !!testPropsAll("indexedDB", window);
		};

		// documentMode logic from YUI to filter out IE8 Compat Mode
		//   which false positives.
		tests['hashchange'] = function() {
			return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
		};

		// Per 1.6:
		// This used to be Modernizr.historymanagement but the longer
		// name has been deprecated in favor of a shorter and property-matching one.
		// The old API is still available in 1.6, but as of 2.0 will throw a warning,
		// and in the first release thereafter disappear entirely.
		tests['history'] = function() {
			return !!(window.history && history.pushState);
		};

		tests['draganddrop'] = function() {
				var div = document.createElement('div');
				return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
		};

		// FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
		// will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
		// FF10 still uses prefixes, so check for it until then.
		// for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
		tests['websockets'] = function() {
				return 'WebSocket' in window || 'MozWebSocket' in window;
		};


		// css-tricks.com/rgba-browser-support/
		tests['rgba'] = function() {
				// Set an rgba() color and check the returned value

				setCss('background-color:rgba(150,255,150,.5)');

				return contains(mStyle.backgroundColor, 'rgba');
		};

		tests['hsla'] = function() {
				// Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
				//   except IE9 who retains it as hsla

				setCss('background-color:hsla(120,40%,100%,.5)');

				return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
		};

		tests['multiplebgs'] = function() {
				// Setting multiple images AND a color on the background shorthand property
				//  and then querying the style.background property value for the number of
				//  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

				setCss('background:url(https://),url(https://),red url(https://)');

				// If the UA supports multiple backgrounds, there should be three occurrences
				//   of the string "url(" in the return value for elemStyle.background

				return (/(url\s*\(.*?){3}/).test(mStyle.background);
		};



		// this will false positive in Opera Mini
		//   github.com/Modernizr/Modernizr/issues/396

		tests['backgroundsize'] = function() {
				return testPropsAll('backgroundSize');
		};

		tests['borderimage'] = function() {
				return testPropsAll('borderImage');
		};


		// Super comprehensive table about all the unique implementations of
		// border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

		tests['borderradius'] = function() {
				return testPropsAll('borderRadius');
		};

		// WebOS unfortunately false positives on this test.
		tests['boxshadow'] = function() {
				return testPropsAll('boxShadow');
		};

		// FF3.0 will false positive on this test
		tests['textshadow'] = function() {
				return document.createElement('div').style.textShadow === '';
		};


		tests['opacity'] = function() {
				// Browsers that actually have CSS Opacity implemented have done so
				//  according to spec, which means their return values are within the
				//  range of [0.0,1.0] - including the leading zero.

				setCssAll('opacity:.55');

				// The non-literal . in this regex is intentional:
				//   German Chrome returns this value as 0,55
				// github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
				return (/^0.55$/).test(mStyle.opacity);
		};


		// Note, Android < 4 will pass this test, but can only animate
		//   a single property at a time
		//   daneden.me/2011/12/putting-up-with-androids-bullshit/
		tests['cssanimations'] = function() {
				return testPropsAll('animationName');
		};


		tests['csscolumns'] = function() {
				return testPropsAll('columnCount');
		};


		tests['cssgradients'] = function() {
				/**
				 * For CSS Gradients syntax, please see:
				 * webkit.org/blog/175/introducing-css-gradients/
				 * developer.mozilla.org/en/CSS/-moz-linear-gradient
				 * developer.mozilla.org/en/CSS/-moz-radial-gradient
				 * dev.w3.org/csswg/css3-images/#gradients-
				 */

				var str1 = 'background-image:',
						str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
						str3 = 'linear-gradient(left top,#9f9, white);';

				setCss(
						 // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
							(str1 + '-webkit- '.split(' ').join(str2 + str1) +
						 // standard syntax             // trailing 'background-image:'
							prefixes.join(str3 + str1)).slice(0, -str1.length)
				);

				return contains(mStyle.backgroundImage, 'gradient');
		};


		tests['cssreflections'] = function() {
				return testPropsAll('boxReflect');
		};


		tests['csstransforms'] = function() {
				return !!testPropsAll('transform');
		};


		tests['csstransforms3d'] = function() {

				var ret = !!testPropsAll('perspective');

				// Webkit's 3D transforms are passed off to the browser's own graphics renderer.
				//   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
				//   some conditions. As a result, Webkit typically recognizes the syntax but
				//   will sometimes throw a false positive, thus we must do a more thorough check:
				if ( ret && 'webkitPerspective' in docElement.style ) {

					// Webkit allows this media query to succeed only if the feature is enabled.
					// `@media (transform-3d),(-webkit-transform-3d){ ... }`
					injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
						ret = node.offsetLeft === 9 && node.offsetHeight === 3;
					});
				}
				return ret;
		};


		tests['csstransitions'] = function() {
				return testPropsAll('transition');
		};


		/*>>fontface*/
		// @font-face detection routine by Diego Perini
		// javascript.nwbox.com/CSSSupport/

		// false positives:
		//   WebOS github.com/Modernizr/Modernizr/issues/342
		//   WP7   github.com/Modernizr/Modernizr/issues/538
		tests['fontface'] = function() {
				var bool;

				injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
					var style = document.getElementById('smodernizr'),
							sheet = style.sheet || style.styleSheet,
							cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

					bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
				});

				return bool;
		};
		/*>>fontface*/

		// CSS generated content detection
		tests['generatedcontent'] = function() {
				var bool;

				injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
					bool = node.offsetHeight >= 3;
				});

				return bool;
		};



		// These tests evaluate support of the video/audio elements, as well as
		// testing what types of content they support.
		//
		// We're using the Boolean constructor here, so that we can extend the value
		// e.g.  Modernizr.video     // true
		//       Modernizr.video.ogg // 'probably'
		//
		// Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
		//                     thx to NielsLeenheer and zcorpan

		// Note: in some older browsers, "no" was a return value instead of empty string.
		//   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
		//   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

		tests['video'] = function() {
				var elem = document.createElement('video'),
						bool = false;

				// IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
				try {
						if ( bool = !!elem.canPlayType ) {
								bool      = new Boolean(bool);
								bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

								// Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
								bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

								bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
						}

				} catch(e) { }

				return bool;
		};

		tests['audio'] = function() {
				var elem = document.createElement('audio'),
						bool = false;

				try {
						if ( bool = !!elem.canPlayType ) {
								bool      = new Boolean(bool);
								bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
								bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

								// Mimetypes accepted:
								//   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
								//   bit.ly/iphoneoscodecs
								bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
								bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
															elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
						}
				} catch(e) { }

				return bool;
		};


		// In FF4, if disabled, window.localStorage should === null.

		// Normally, we could not test that directly and need to do a
		//   `('localStorage' in window) && ` test first because otherwise Firefox will
		//   throw bugzil.la/365772 if cookies are disabled

		// Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
		// will throw the exception:
		//   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
		// Peculiarly, getItem and removeItem calls do not throw.

		// Because we are forced to try/catch this, we'll go aggressive.

		// Just FWIW: IE8 Compat mode supports these features completely:
		//   www.quirksmode.org/dom/html5.html
		// But IE8 doesn't support either with local files

		tests['localstorage'] = function() {
				try {
						localStorage.setItem(mod, mod);
						localStorage.removeItem(mod);
						return true;
				} catch(e) {
						return false;
				}
		};

		tests['sessionstorage'] = function() {
				try {
						sessionStorage.setItem(mod, mod);
						sessionStorage.removeItem(mod);
						return true;
				} catch(e) {
						return false;
				}
		};


		tests['webworkers'] = function() {
				return !!window.Worker;
		};


		tests['applicationcache'] = function() {
				return !!window.applicationCache;
		};


		// Thanks to Erik Dahlstrom
		tests['svg'] = function() {
				return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
		};

		// specifically for SVG inline in HTML, not within XHTML
		// test page: paulirish.com/demo/inline-svg
		tests['inlinesvg'] = function() {
			var div = document.createElement('div');
			div.innerHTML = '<svg/>';
			return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
		};

		// SVG SMIL animation
		tests['smil'] = function() {
				return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
		};

		// This test is only for clip paths in SVG proper, not clip paths on HTML content
		// demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

		// However read the comments to dig into applying SVG clippaths to HTML content here:
		//   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
		tests['svgclippaths'] = function() {
				return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
		};

		/*>>webforms*/
		// input features and input types go directly onto the ret object, bypassing the tests loop.
		// Hold this guy to execute in a moment.
		function webforms() {
				/*>>input*/
				// Run through HTML5's new input attributes to see if the UA understands any.
				// We're using f which is the <input> element created early on
				// Mike Taylr has created a comprehensive resource for testing these attributes
				//   when applied to all input types:
				//   miketaylr.com/code/input-type-attr.html
				// spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

				// Only input placeholder is tested while textarea's placeholder is not.
				// Currently Safari 4 and Opera 11 have support only for the input placeholder
				// Both tests are available in feature-detects/forms-placeholder.js
				Modernizr['input'] = (function( props ) {
						for ( var i = 0, len = props.length; i < len; i++ ) {
								attrs[ props[i] ] = !!(props[i] in inputElem);
						}
						if (attrs.list){
							// safari false positive's on datalist: webk.it/74252
							// see also github.com/Modernizr/Modernizr/issues/146
							attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
						}
						return attrs;
				})('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
				/*>>input*/

				/*>>inputtypes*/
				// Run through HTML5's new input types to see if the UA understands any.
				//   This is put behind the tests runloop because it doesn't return a
				//   true/false like all the other tests; instead, it returns an object
				//   containing each input type with its corresponding true/false value

				// Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
				Modernizr['inputtypes'] = (function(props) {

						for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

								inputElem.setAttribute('type', inputElemType = props[i]);
								bool = inputElem.type !== 'text';

								// We first check to see if the type we give it sticks..
								// If the type does, we feed it a textual value, which shouldn't be valid.
								// If the value doesn't stick, we know there's input sanitization which infers a custom UI
								if ( bool ) {

										inputElem.value         = smile;
										inputElem.style.cssText = 'position:absolute;visibility:hidden;';

										if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

											docElement.appendChild(inputElem);
											defaultView = document.defaultView;

											// Safari 2-4 allows the smiley as a value, despite making a slider
											bool =  defaultView.getComputedStyle &&
															defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
															// Mobile android web browser has false positive, so must
															// check the height to see if the widget is actually there.
															(inputElem.offsetHeight !== 0);

											docElement.removeChild(inputElem);

										} else if ( /^(search|tel)$/.test(inputElemType) ){
											// Spec doesn't define any special parsing or detectable UI
											//   behaviors so we pass these through as true

											// Interestingly, opera fails the earlier test, so it doesn't
											//  even make it here.

										} else if ( /^(url|email)$/.test(inputElemType) ) {
											// Real url and email support comes with prebaked validation.
											bool = inputElem.checkValidity && inputElem.checkValidity() === false;

										} else {
											// If the upgraded input compontent rejects the :) text, we got a winner
											bool = inputElem.value != smile;
										}
								}

								inputs[ props[i] ] = !!bool;
						}
						return inputs;
				})('search tel url email datetime date month week time datetime-local number range color'.split(' '));
				/*>>inputtypes*/
		}
		/*>>webforms*/


		// End of test definitions
		// -----------------------



		// Run through all tests and detect their support in the current UA.
		// todo: hypothetically we could be doing an array of tests and use a basic loop here.
		for ( var feature in tests ) {
				if ( hasOwnProp(tests, feature) ) {
						// run the test, throw the return value into the Modernizr,
						//   then based on that boolean, define an appropriate className
						//   and push it into an array of classes we'll join later.
						featureName  = feature.toLowerCase();
						Modernizr[featureName] = tests[feature]();

						classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
				}
		}

		/*>>webforms*/
		// input tests need to run.
		Modernizr.input || webforms();
		/*>>webforms*/


		/**
		 * addTest allows the user to define their own feature tests
		 * the result will be added onto the Modernizr object,
		 * as well as an appropriate className set on the html element
		 *
		 * @param feature - String naming the feature
		 * @param test - Function returning true if feature is supported, false if not
		 */
		 Modernizr.addTest = function ( feature, test ) {
			 if ( typeof feature == 'object' ) {
				 for ( var key in feature ) {
					 if ( hasOwnProp( feature, key ) ) {
						 Modernizr.addTest( key, feature[ key ] );
					 }
				 }
			 } else {

				 feature = feature.toLowerCase();

				 if ( Modernizr[feature] !== undefined ) {
					 // we're going to quit if you're trying to overwrite an existing test
					 // if we were to allow it, we'd do this:
					 //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
					 //   docElement.className = docElement.className.replace( re, '' );
					 // but, no rly, stuff 'em.
					 return Modernizr;
				 }

				 test = typeof test == 'function' ? test() : test;

				 if (typeof enableClasses !== "undefined" && enableClasses) {
					 docElement.className += ' ' + (test ? '' : 'no-') + feature;
				 }
				 Modernizr[feature] = test;

			 }

			 return Modernizr; // allow chaining.
		 };


		// Reset modElem.cssText to nothing to reduce memory footprint.
		setCss('');
		modElem = inputElem = null;

		/*>>shiv*/
		/**
		 * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
		 */
		;(function(window, document) {
				/*jshint evil:true */
				/** version */
				var version = '3.7.0';

				/** Preset options */
				var options = window.html5 || {};

				/** Used to skip problem elements */
				var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

				/** Not all elements can be cloned in IE **/
				var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

				/** Detect whether the browser supports default html5 styles */
				var supportsHtml5Styles;

				/** Name of the expando, to work with multiple documents or to re-shiv one document */
				var expando = '_html5shiv';

				/** The id for the the documents expando */
				var expanID = 0;

				/** Cached data for each document */
				var expandoData = {};

				/** Detect whether the browser supports unknown elements */
				var supportsUnknownElements;

				(function() {
					try {
						var a = document.createElement('a');
						a.innerHTML = '<xyz></xyz>';
						//if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
						supportsHtml5Styles = ('hidden' in a);

						supportsUnknownElements = a.childNodes.length == 1 || (function() {
							// assign a false positive if unable to shiv
							(document.createElement)('a');
							var frag = document.createDocumentFragment();
							return (
								typeof frag.cloneNode == 'undefined' ||
								typeof frag.createDocumentFragment == 'undefined' ||
								typeof frag.createElement == 'undefined'
							);
						}());
					} catch(e) {
						// assign a false positive if detection fails => unable to shiv
						supportsHtml5Styles = true;
						supportsUnknownElements = true;
					}

				}());

				/*--------------------------------------------------------------------------*/

				/**
				 * Creates a style sheet with the given CSS text and adds it to the document.
				 * @private
				 * @param {Document} ownerDocument The document.
				 * @param {String} cssText The CSS text.
				 * @returns {StyleSheet} The style element.
				 */
				function addStyleSheet(ownerDocument, cssText) {
					var p = ownerDocument.createElement('p'),
					parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

					p.innerHTML = 'x<style>' + cssText + '</style>';
					return parent.insertBefore(p.lastChild, parent.firstChild);
				}

				/**
				 * Returns the value of `html5.elements` as an array.
				 * @private
				 * @returns {Array} An array of shived element node names.
				 */
				function getElements() {
					var elements = html5.elements;
					return typeof elements == 'string' ? elements.split(' ') : elements;
				}

				/**
				 * Returns the data associated to the given document
				 * @private
				 * @param {Document} ownerDocument The document.
				 * @returns {Object} An object of data.
				 */
				function getExpandoData(ownerDocument) {
					var data = expandoData[ownerDocument[expando]];
					if (!data) {
						data = {};
						expanID++;
						ownerDocument[expando] = expanID;
						expandoData[expanID] = data;
					}
					return data;
				}

				/**
				 * returns a shived element for the given nodeName and document
				 * @memberOf html5
				 * @param {String} nodeName name of the element
				 * @param {Document} ownerDocument The context document.
				 * @returns {Object} The shived element.
				 */
				function createElement(nodeName, ownerDocument, data){
					if (!ownerDocument) {
						ownerDocument = document;
					}
					if(supportsUnknownElements){
						return ownerDocument.createElement(nodeName);
					}
					if (!data) {
						data = getExpandoData(ownerDocument);
					}
					var node;

					if (data.cache[nodeName]) {
						node = data.cache[nodeName].cloneNode();
					} else if (saveClones.test(nodeName)) {
						node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
					} else {
						node = data.createElem(nodeName);
					}

					// Avoid adding some elements to fragments in IE < 9 because
					// * Attributes like `name` or `type` cannot be set/changed once an element
					//   is inserted into a document/fragment
					// * Link elements with `src` attributes that are inaccessible, as with
					//   a 403 response, will cause the tab/window to crash
					// * Script elements appended to fragments will execute when their `src`
					//   or `text` property is set
					return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
				}

				/**
				 * returns a shived DocumentFragment for the given document
				 * @memberOf html5
				 * @param {Document} ownerDocument The context document.
				 * @returns {Object} The shived DocumentFragment.
				 */
				function createDocumentFragment(ownerDocument, data){
					if (!ownerDocument) {
						ownerDocument = document;
					}
					if(supportsUnknownElements){
						return ownerDocument.createDocumentFragment();
					}
					data = data || getExpandoData(ownerDocument);
					var clone = data.frag.cloneNode(),
					i = 0,
					elems = getElements(),
					l = elems.length;
					for(;i<l;i++){
						clone.createElement(elems[i]);
					}
					return clone;
				}

				/**
				 * Shivs the `createElement` and `createDocumentFragment` methods of the document.
				 * @private
				 * @param {Document|DocumentFragment} ownerDocument The document.
				 * @param {Object} data of the document.
				 */
				function shivMethods(ownerDocument, data) {
					if (!data.cache) {
						data.cache = {};
						data.createElem = ownerDocument.createElement;
						data.createFrag = ownerDocument.createDocumentFragment;
						data.frag = data.createFrag();
					}


					ownerDocument.createElement = function(nodeName) {
						//abort shiv
						if (!html5.shivMethods) {
							return data.createElem(nodeName);
						}
						return createElement(nodeName, ownerDocument, data);
					};

					ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
																													'var n=f.cloneNode(),c=n.createElement;' +
																													'h.shivMethods&&(' +
																													// unroll the `createElement` calls
																													getElements().join().replace(/[\w\-]+/g, function(nodeName) {
						data.createElem(nodeName);
						data.frag.createElement(nodeName);
						return 'c("' + nodeName + '")';
					}) +
						');return n}'
																												 )(html5, data.frag);
				}

				/*--------------------------------------------------------------------------*/

				/**
				 * Shivs the given document.
				 * @memberOf html5
				 * @param {Document} ownerDocument The document to shiv.
				 * @returns {Document} The shived document.
				 */
				function shivDocument(ownerDocument) {
					if (!ownerDocument) {
						ownerDocument = document;
					}
					var data = getExpandoData(ownerDocument);

					if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
						data.hasCSS = !!addStyleSheet(ownerDocument,
																					// corrects block display not defined in IE6/7/8/9
																					'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
																						// adds styling not present in IE6/7/8/9
																						'mark{background:#FF0;color:#000}' +
																						// hides non-rendered elements
																						'template{display:none}'
																				 );
					}
					if (!supportsUnknownElements) {
						shivMethods(ownerDocument, data);
					}
					return ownerDocument;
				}

				/*--------------------------------------------------------------------------*/

				/**
				 * The `html5` object is exposed so that more elements can be shived and
				 * existing shiving can be detected on iframes.
				 * @type Object
				 * @example
				 *
				 * // options can be changed before the script is included
				 * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
				 */
				var html5 = {

					/**
					 * An array or space separated string of node names of the elements to shiv.
					 * @memberOf html5
					 * @type Array|String
					 */
					'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

					/**
					 * current version of html5shiv
					 */
					'version': version,

					/**
					 * A flag to indicate that the HTML5 style sheet should be inserted.
					 * @memberOf html5
					 * @type Boolean
					 */
					'shivCSS': (options.shivCSS !== false),

					/**
					 * Is equal to true if a browser supports creating unknown/HTML5 elements
					 * @memberOf html5
					 * @type boolean
					 */
					'supportsUnknownElements': supportsUnknownElements,

					/**
					 * A flag to indicate that the document's `createElement` and `createDocumentFragment`
					 * methods should be overwritten.
					 * @memberOf html5
					 * @type Boolean
					 */
					'shivMethods': (options.shivMethods !== false),

					/**
					 * A string to describe the type of `html5` object ("default" or "default print").
					 * @memberOf html5
					 * @type String
					 */
					'type': 'default',

					// shivs the document according to the specified `html5` object options
					'shivDocument': shivDocument,

					//creates a shived element
					createElement: createElement,

					//creates a shived documentFragment
					createDocumentFragment: createDocumentFragment
				};

				/*--------------------------------------------------------------------------*/

				// expose html5
				window.html5 = html5;

				// shiv the document
				shivDocument(document);

		}(this, document));
		/*>>shiv*/

		// Assign private properties to the return object with prefix
		Modernizr._version      = version;

		// expose these for the plugin API. Look in the source for how to join() them against your input
		/*>>prefixes*/
		Modernizr._prefixes     = prefixes;
		/*>>prefixes*/
		/*>>domprefixes*/
		Modernizr._domPrefixes  = domPrefixes;
		Modernizr._cssomPrefixes  = cssomPrefixes;
		/*>>domprefixes*/

		/*>>mq*/
		// Modernizr.mq tests a given media query, live against the current state of the window
		// A few important notes:
		//   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
		//   * A max-width or orientation query will be evaluated against the current state, which may change later.
		//   * You must specify values. Eg. If you are testing support for the min-width media query use:
		//       Modernizr.mq('(min-width:0)')
		// usage:
		// Modernizr.mq('only screen and (max-width:768)')
		Modernizr.mq            = testMediaQuery;
		/*>>mq*/

		/*>>hasevent*/
		// Modernizr.hasEvent() detects support for a given event, with an optional element to test on
		// Modernizr.hasEvent('gesturestart', elem)
		Modernizr.hasEvent      = isEventSupported;
		/*>>hasevent*/

		/*>>testprop*/
		// Modernizr.testProp() investigates whether a given style property is recognized
		// Note that the property names must be provided in the camelCase variant.
		// Modernizr.testProp('pointerEvents')
		Modernizr.testProp      = function(prop){
				return testProps([prop]);
		};
		/*>>testprop*/

		/*>>testallprops*/
		// Modernizr.testAllProps() investigates whether a given style property,
		//   or any of its vendor-prefixed variants, is recognized
		// Note that the property names must be provided in the camelCase variant.
		// Modernizr.testAllProps('boxSizing')
		Modernizr.testAllProps  = testPropsAll;
		/*>>testallprops*/


		/*>>teststyles*/
		// Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
		// Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
		Modernizr.testStyles    = injectElementWithStyles;
		/*>>teststyles*/


		/*>>prefixed*/
		// Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
		// Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

		// Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
		// Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
		//
		//     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

		// If you're trying to ascertain which transition end event to bind to, you might do something like...
		//
		//     var transEndEventNames = {
		//       'WebkitTransition' : 'webkitTransitionEnd',
		//       'MozTransition'    : 'transitionend',
		//       'OTransition'      : 'oTransitionEnd',
		//       'msTransition'     : 'MSTransitionEnd',
		//       'transition'       : 'transitionend'
		//     },
		//     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

		Modernizr.prefixed      = function(prop, obj, elem){
			if(!obj) {
				return testPropsAll(prop, 'pfx');
			} else {
				// Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
				return testPropsAll(prop, obj, elem);
			}
		};
		/*>>prefixed*/


		/*>>cssclasses*/
		// Remove "no-js" class from <html> element, if it exists:
		docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

														// Add the new classes to the <html> element.
														(enableClasses ? ' js ' + classes.join(' ') : '');
		/*>>cssclasses*/

		return Modernizr;

})(this, this.document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2Rlcm5penIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBNb2Rlcm5penIgdjIuNy4xXG4gKiB3d3cubW9kZXJuaXpyLmNvbVxuICpcbiAqIENvcHlyaWdodCAoYykgRmFydWsgQXRlcywgUGF1bCBJcmlzaCwgQWxleCBTZXh0b25cbiAqIEF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIGFuZCBNSVQgbGljZW5zZXM6IHd3dy5tb2Rlcm5penIuY29tL2xpY2Vuc2UvXG4gKi9cblxuLypcbiAqIE1vZGVybml6ciB0ZXN0cyB3aGljaCBuYXRpdmUgQ1NTMyBhbmQgSFRNTDUgZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSBpblxuICogdGhlIGN1cnJlbnQgVUEgYW5kIG1ha2VzIHRoZSByZXN1bHRzIGF2YWlsYWJsZSB0byB5b3UgaW4gdHdvIHdheXM6XG4gKiBhcyBwcm9wZXJ0aWVzIG9uIGEgZ2xvYmFsIE1vZGVybml6ciBvYmplY3QsIGFuZCBhcyBjbGFzc2VzIG9uIHRoZVxuICogPGh0bWw+IGVsZW1lbnQuIFRoaXMgaW5mb3JtYXRpb24gYWxsb3dzIHlvdSB0byBwcm9ncmVzc2l2ZWx5IGVuaGFuY2VcbiAqIHlvdXIgcGFnZXMgd2l0aCBhIGdyYW51bGFyIGxldmVsIG9mIGNvbnRyb2wgb3ZlciB0aGUgZXhwZXJpZW5jZS5cbiAqXG4gKiBNb2Rlcm5penIgaGFzIGFuIG9wdGlvbmFsIChub3QgaW5jbHVkZWQpIGNvbmRpdGlvbmFsIHJlc291cmNlIGxvYWRlclxuICogY2FsbGVkIE1vZGVybml6ci5sb2FkKCksIGJhc2VkIG9uIFllcG5vcGUuanMgKHllcG5vcGVqcy5jb20pLlxuICogVG8gZ2V0IGEgYnVpbGQgdGhhdCBpbmNsdWRlcyBNb2Rlcm5penIubG9hZCgpLCBhcyB3ZWxsIGFzIGNob29zaW5nXG4gKiB3aGljaCB0ZXN0cyB0byBpbmNsdWRlLCBnbyB0byB3d3cubW9kZXJuaXpyLmNvbS9kb3dubG9hZC9cbiAqXG4gKiBBdXRob3JzICAgICAgICBGYXJ1ayBBdGVzLCBQYXVsIElyaXNoLCBBbGV4IFNleHRvblxuICogQ29udHJpYnV0b3JzICAgUnlhbiBTZWRkb24sIEJlbiBBbG1hblxuICovXG5cbndpbmRvdy5Nb2Rlcm5penIgPSAoZnVuY3Rpb24oIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCApIHtcblxuXHRcdHZhciB2ZXJzaW9uID0gJzIuNy4xJyxcblxuXHRcdE1vZGVybml6ciA9IHt9LFxuXG5cdFx0Lyo+PmNzc2NsYXNzZXMqL1xuXHRcdC8vIG9wdGlvbiBmb3IgZW5hYmxpbmcgdGhlIEhUTUwgY2xhc3NlcyB0byBiZSBhZGRlZFxuXHRcdGVuYWJsZUNsYXNzZXMgPSB0cnVlLFxuXHRcdC8qPj5jc3NjbGFzc2VzKi9cblxuXHRcdGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cblx0XHQvKipcblx0XHQgKiBDcmVhdGUgb3VyIFwibW9kZXJuaXpyXCIgZWxlbWVudCB0aGF0IHdlIGRvIG1vc3QgZmVhdHVyZSB0ZXN0cyBvbi5cblx0XHQgKi9cblx0XHRtb2QgPSAnbW9kZXJuaXpyJyxcblx0XHRtb2RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChtb2QpLFxuXHRcdG1TdHlsZSA9IG1vZEVsZW0uc3R5bGUsXG5cblx0XHQvKipcblx0XHQgKiBDcmVhdGUgdGhlIGlucHV0IGVsZW1lbnQgZm9yIHZhcmlvdXMgV2ViIEZvcm1zIGZlYXR1cmUgdGVzdHMuXG5cdFx0ICovXG5cdFx0aW5wdXRFbGVtIC8qPj5pbnB1dGVsZW0qLyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgLyo+PmlucHV0ZWxlbSovICxcblxuXHRcdC8qPj5zbWlsZSovXG5cdFx0c21pbGUgPSAnOiknLFxuXHRcdC8qPj5zbWlsZSovXG5cblx0XHR0b1N0cmluZyA9IHt9LnRvU3RyaW5nLFxuXG5cdFx0Ly8gVE9ETyA6OiBtYWtlIHRoZSBwcmVmaXhlcyBtb3JlIGdyYW51bGFyXG5cdFx0Lyo+PnByZWZpeGVzKi9cblx0XHQvLyBMaXN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBzZXQgZm9yIGNzcyB0ZXN0cy4gU2VlIHRpY2tldCAjMjFcblx0XHRwcmVmaXhlcyA9ICcgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gJy5zcGxpdCgnICcpLFxuXHRcdC8qPj5wcmVmaXhlcyovXG5cblx0XHQvKj4+ZG9tcHJlZml4ZXMqL1xuXHRcdC8vIEZvbGxvd2luZyBzcGVjIGlzIHRvIGV4cG9zZSB2ZW5kb3Itc3BlY2lmaWMgc3R5bGUgcHJvcGVydGllcyBhczpcblx0XHQvLyAgIGVsZW0uc3R5bGUuV2Via2l0Qm9yZGVyUmFkaXVzXG5cdFx0Ly8gYW5kIHRoZSBmb2xsb3dpbmcgd291bGQgYmUgaW5jb3JyZWN0OlxuXHRcdC8vICAgZWxlbS5zdHlsZS53ZWJraXRCb3JkZXJSYWRpdXNcblxuXHRcdC8vIFdlYmtpdCBnaG9zdHMgdGhlaXIgcHJvcGVydGllcyBpbiBsb3dlcmNhc2UgYnV0IE9wZXJhICYgTW96IGRvIG5vdC5cblx0XHQvLyBNaWNyb3NvZnQgdXNlcyBhIGxvd2VyY2FzZSBgbXNgIGluc3RlYWQgb2YgdGhlIGNvcnJlY3QgYE1zYCBpbiBJRTgrXG5cdFx0Ly8gICBlcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwOC8wMy8xMC8yMS40OC4xMC9cblxuXHRcdC8vIE1vcmUgaGVyZTogZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy9pc3N1ZS8yMVxuXHRcdG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJyxcblxuXHRcdGNzc29tUHJlZml4ZXMgPSBvbVByZWZpeGVzLnNwbGl0KCcgJyksXG5cblx0XHRkb21QcmVmaXhlcyA9IG9tUHJlZml4ZXMudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLFxuXHRcdC8qPj5kb21wcmVmaXhlcyovXG5cblx0XHQvKj4+bnMqL1xuXHRcdG5zID0geydzdmcnOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnfSxcblx0XHQvKj4+bnMqL1xuXG5cdFx0dGVzdHMgPSB7fSxcblx0XHRpbnB1dHMgPSB7fSxcblx0XHRhdHRycyA9IHt9LFxuXG5cdFx0Y2xhc3NlcyA9IFtdLFxuXG5cdFx0c2xpY2UgPSBjbGFzc2VzLnNsaWNlLFxuXG5cdFx0ZmVhdHVyZU5hbWUsIC8vIHVzZWQgaW4gdGVzdGluZyBsb29wXG5cblxuXHRcdC8qPj50ZXN0c3R5bGVzKi9cblx0XHQvLyBJbmplY3QgZWxlbWVudCB3aXRoIHN0eWxlIGVsZW1lbnQgYW5kIHNvbWUgQ1NTIHJ1bGVzXG5cdFx0aW5qZWN0RWxlbWVudFdpdGhTdHlsZXMgPSBmdW5jdGlvbiggcnVsZSwgY2FsbGJhY2ssIG5vZGVzLCB0ZXN0bmFtZXMgKSB7XG5cblx0XHRcdHZhciBzdHlsZSwgcmV0LCBub2RlLCBkb2NPdmVyZmxvdyxcblx0XHRcdFx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRcdFx0XHQvLyBBZnRlciBwYWdlIGxvYWQgaW5qZWN0aW5nIGEgZmFrZSBib2R5IGRvZXNuJ3Qgd29yayBzbyBjaGVjayBpZiBib2R5IGV4aXN0c1xuXHRcdFx0XHRcdGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuXHRcdFx0XHRcdC8vIElFNiBhbmQgNyB3b24ndCByZXR1cm4gb2Zmc2V0V2lkdGggb3Igb2Zmc2V0SGVpZ2h0IHVubGVzcyBpdCdzIGluIHRoZSBib2R5IGVsZW1lbnQsIHNvIHdlIGZha2UgaXQuXG5cdFx0XHRcdFx0ZmFrZUJvZHkgPSBib2R5IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcblxuXHRcdFx0aWYgKCBwYXJzZUludChub2RlcywgMTApICkge1xuXHRcdFx0XHRcdC8vIEluIG9yZGVyIG5vdCB0byBnaXZlIGZhbHNlIHBvc2l0aXZlcyB3ZSBjcmVhdGUgYSBub2RlIGZvciBlYWNoIHRlc3Rcblx0XHRcdFx0XHQvLyBUaGlzIGFsc28gYWxsb3dzIHRoZSBtZXRob2QgdG8gc2NhbGUgZm9yIHVuc3BlY2lmaWVkIHVzZXNcblx0XHRcdFx0XHR3aGlsZSAoIG5vZGVzLS0gKSB7XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHRcdFx0bm9kZS5pZCA9IHRlc3RuYW1lcyA/IHRlc3RuYW1lc1tub2Rlc10gOiBtb2QgKyAobm9kZXMgKyAxKTtcblx0XHRcdFx0XHRcdFx0ZGl2LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gPHN0eWxlPiBlbGVtZW50cyBpbiBJRTYtOSBhcmUgY29uc2lkZXJlZCAnTm9TY29wZScgZWxlbWVudHMgYW5kIHRoZXJlZm9yZSB3aWxsIGJlIHJlbW92ZWRcblx0XHRcdC8vIHdoZW4gaW5qZWN0ZWQgd2l0aCBpbm5lckhUTUwuIFRvIGdldCBhcm91bmQgdGhpcyB5b3UgbmVlZCB0byBwcmVwZW5kIHRoZSAnTm9TY29wZScgZWxlbWVudFxuXHRcdFx0Ly8gd2l0aCBhICdzY29wZWQnIGVsZW1lbnQsIGluIG91ciBjYXNlIHRoZSBzb2Z0LWh5cGhlbiBlbnRpdHkgYXMgaXQgd29uJ3QgbWVzcyB3aXRoIG91ciBtZWFzdXJlbWVudHMuXG5cdFx0XHQvLyBtc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzMzg5NyUyOFZTLjg1JTI5LmFzcHhcblx0XHRcdC8vIERvY3VtZW50cyBzZXJ2ZWQgYXMgeG1sIHdpbGwgdGhyb3cgaWYgdXNpbmcgJnNoeTsgc28gdXNlIHhtbCBmcmllbmRseSBlbmNvZGVkIHZlcnNpb24uIFNlZSBpc3N1ZSAjMjc3XG5cdFx0XHRzdHlsZSA9IFsnJiMxNzM7JywnPHN0eWxlIGlkPVwicycsIG1vZCwgJ1wiPicsIHJ1bGUsICc8L3N0eWxlPiddLmpvaW4oJycpO1xuXHRcdFx0ZGl2LmlkID0gbW9kO1xuXHRcdFx0Ly8gSUU2IHdpbGwgZmFsc2UgcG9zaXRpdmUgb24gc29tZSB0ZXN0cyBkdWUgdG8gdGhlIHN0eWxlIGVsZW1lbnQgaW5zaWRlIHRoZSB0ZXN0IGRpdiBzb21laG93IGludGVyZmVyaW5nIG9mZnNldEhlaWdodCwgc28gaW5zZXJ0IGl0IGludG8gYm9keSBvciBmYWtlYm9keS5cblx0XHRcdC8vIE9wZXJhIHdpbGwgYWN0IGFsbCBxdWlya3kgd2hlbiBpbmplY3RpbmcgZWxlbWVudHMgaW4gZG9jdW1lbnRFbGVtZW50IHdoZW4gcGFnZSBpcyBzZXJ2ZWQgYXMgeG1sLCBuZWVkcyBmYWtlYm9keSB0b28uICMyNzBcblx0XHRcdChib2R5ID8gZGl2IDogZmFrZUJvZHkpLmlubmVySFRNTCArPSBzdHlsZTtcblx0XHRcdGZha2VCb2R5LmFwcGVuZENoaWxkKGRpdik7XG5cdFx0XHRpZiAoICFib2R5ICkge1xuXHRcdFx0XHRcdC8vYXZvaWQgY3Jhc2hpbmcgSUU4LCBpZiBiYWNrZ3JvdW5kIGltYWdlIGlzIHVzZWRcblx0XHRcdFx0XHRmYWtlQm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG5cdFx0XHRcdFx0Ly9TYWZhcmkgNS4xMy81LjEuNCBPU1ggc3RvcHMgbG9hZGluZyBpZiA6Oi13ZWJraXQtc2Nyb2xsYmFyIGlzIHVzZWQgYW5kIHNjcm9sbGJhcnMgYXJlIHZpc2libGVcblx0XHRcdFx0XHRmYWtlQm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXHRcdFx0XHRcdGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcblx0XHRcdFx0XHRkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0XHRcdFx0ZG9jRWxlbWVudC5hcHBlbmRDaGlsZChmYWtlQm9keSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldCA9IGNhbGxiYWNrKGRpdiwgcnVsZSk7XG5cdFx0XHQvLyBJZiB0aGlzIGlzIGRvbmUgYWZ0ZXIgcGFnZSBsb2FkIHdlIGRvbid0IHdhbnQgdG8gcmVtb3ZlIHRoZSBib2R5IHNvIGNoZWNrIGlmIGJvZHkgZXhpc3RzXG5cdFx0XHRpZiAoICFib2R5ICkge1xuXHRcdFx0XHRcdGZha2VCb2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmFrZUJvZHkpO1xuXHRcdFx0XHRcdGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2NPdmVyZmxvdztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICEhcmV0O1xuXG5cdFx0fSxcblx0XHQvKj4+dGVzdHN0eWxlcyovXG5cblx0XHQvKj4+bXEqL1xuXHRcdC8vIGFkYXB0ZWQgZnJvbSBtYXRjaE1lZGlhIHBvbHlmaWxsXG5cdFx0Ly8gYnkgU2NvdHQgSmVobCBhbmQgUGF1bCBJcmlzaFxuXHRcdC8vIGdpc3QuZ2l0aHViLmNvbS83ODY3Njhcblx0XHR0ZXN0TWVkaWFRdWVyeSA9IGZ1bmN0aW9uKCBtcSApIHtcblxuXHRcdFx0dmFyIG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSB8fCB3aW5kb3cubXNNYXRjaE1lZGlhO1xuXHRcdFx0aWYgKCBtYXRjaE1lZGlhICkge1xuXHRcdFx0XHRyZXR1cm4gbWF0Y2hNZWRpYShtcSkubWF0Y2hlcztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGJvb2w7XG5cblx0XHRcdGluamVjdEVsZW1lbnRXaXRoU3R5bGVzKCdAbWVkaWEgJyArIG1xICsgJyB7ICMnICsgbW9kICsgJyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgfSB9JywgZnVuY3Rpb24oIG5vZGUgKSB7XG5cdFx0XHRcdGJvb2wgPSAod2luZG93LmdldENvbXB1dGVkU3R5bGUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0Z2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRub2RlLmN1cnJlbnRTdHlsZSlbJ3Bvc2l0aW9uJ10gPT0gJ2Fic29sdXRlJztcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gYm9vbDtcblxuXHRcdCB9LFxuXHRcdCAvKj4+bXEqL1xuXG5cblx0XHQvKj4+aGFzZXZlbnQqL1xuXHRcdC8vXG5cdFx0Ly8gaXNFdmVudFN1cHBvcnRlZCBkZXRlcm1pbmVzIGlmIGEgZ2l2ZW4gZWxlbWVudCBzdXBwb3J0cyB0aGUgZ2l2ZW4gZXZlbnRcblx0XHQvLyBrYW5nYXguZ2l0aHViLmNvbS9pc2V2ZW50c3VwcG9ydGVkL1xuXHRcdC8vXG5cdFx0Ly8gVGhlIGZvbGxvd2luZyByZXN1bHRzIGFyZSBrbm93biBpbmNvcnJlY3RzOlxuXHRcdC8vICAgTW9kZXJuaXpyLmhhc0V2ZW50KFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLCBlbGVtKSAvLyBmYWxzZSBuZWdhdGl2ZVxuXHRcdC8vICAgTW9kZXJuaXpyLmhhc0V2ZW50KFwidGV4dElucHV0XCIpIC8vIGluIFdlYmtpdC4gZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy8zMzNcblx0XHQvLyAgIC4uLlxuXHRcdGlzRXZlbnRTdXBwb3J0ZWQgPSAoZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBUQUdOQU1FUyA9IHtcblx0XHRcdFx0J3NlbGVjdCc6ICdpbnB1dCcsICdjaGFuZ2UnOiAnaW5wdXQnLFxuXHRcdFx0XHQnc3VibWl0JzogJ2Zvcm0nLCAncmVzZXQnOiAnZm9ybScsXG5cdFx0XHRcdCdlcnJvcic6ICdpbWcnLCAnbG9hZCc6ICdpbWcnLCAnYWJvcnQnOiAnaW1nJ1xuXHRcdFx0fTtcblxuXHRcdFx0ZnVuY3Rpb24gaXNFdmVudFN1cHBvcnRlZCggZXZlbnROYW1lLCBlbGVtZW50ICkge1xuXG5cdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoVEFHTkFNRVNbZXZlbnROYW1lXSB8fCAnZGl2Jyk7XG5cdFx0XHRcdGV2ZW50TmFtZSA9ICdvbicgKyBldmVudE5hbWU7XG5cblx0XHRcdFx0Ly8gV2hlbiB1c2luZyBgc2V0QXR0cmlidXRlYCwgSUUgc2tpcHMgXCJ1bmxvYWRcIiwgV2ViS2l0IHNraXBzIFwidW5sb2FkXCIgYW5kIFwicmVzaXplXCIsIHdoZXJlYXMgYGluYCBcImNhdGNoZXNcIiB0aG9zZVxuXHRcdFx0XHR2YXIgaXNTdXBwb3J0ZWQgPSBldmVudE5hbWUgaW4gZWxlbWVudDtcblxuXHRcdFx0XHRpZiAoICFpc1N1cHBvcnRlZCApIHtcblx0XHRcdFx0XHQvLyBJZiBpdCBoYXMgbm8gYHNldEF0dHJpYnV0ZWAgKGkuZS4gZG9lc24ndCBpbXBsZW1lbnQgTm9kZSBpbnRlcmZhY2UpLCB0cnkgZ2VuZXJpYyBlbGVtZW50XG5cdFx0XHRcdFx0aWYgKCAhZWxlbWVudC5zZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggZWxlbWVudC5zZXRBdHRyaWJ1dGUgJiYgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShldmVudE5hbWUsICcnKTtcblx0XHRcdFx0XHRcdGlzU3VwcG9ydGVkID0gaXMoZWxlbWVudFtldmVudE5hbWVdLCAnZnVuY3Rpb24nKTtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgcHJvcGVydHkgd2FzIGNyZWF0ZWQsIFwicmVtb3ZlIGl0XCIgKGJ5IHNldHRpbmcgdmFsdWUgdG8gYHVuZGVmaW5lZGApXG5cdFx0XHRcdFx0XHRpZiAoICFpcyhlbGVtZW50W2V2ZW50TmFtZV0sICd1bmRlZmluZWQnKSApIHtcblx0XHRcdFx0XHRcdFx0ZWxlbWVudFtldmVudE5hbWVdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoZXZlbnROYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIGlzU3VwcG9ydGVkO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGlzRXZlbnRTdXBwb3J0ZWQ7XG5cdFx0fSkoKSxcblx0XHQvKj4+aGFzZXZlbnQqL1xuXG5cdFx0Ly8gVE9ETyA6OiBBZGQgZmxhZyBmb3IgaGFzb3ducHJvcCA/IGRpZG4ndCBsYXN0IHRpbWVcblxuXHRcdC8vIGhhc093blByb3BlcnR5IHNoaW0gYnkga2FuZ2F4IG5lZWRlZCBmb3IgU2FmYXJpIDIuMCBzdXBwb3J0XG5cdFx0X2hhc093blByb3BlcnR5ID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSwgaGFzT3duUHJvcDtcblxuXHRcdGlmICggIWlzKF9oYXNPd25Qcm9wZXJ0eSwgJ3VuZGVmaW5lZCcpICYmICFpcyhfaGFzT3duUHJvcGVydHkuY2FsbCwgJ3VuZGVmaW5lZCcpICkge1xuXHRcdFx0aGFzT3duUHJvcCA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5KSB7XG5cdFx0XHRcdHJldHVybiBfaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aGFzT3duUHJvcCA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5KSB7IC8qIHllcywgdGhpcyBjYW4gZ2l2ZSBmYWxzZSBwb3NpdGl2ZXMvbmVnYXRpdmVzLCBidXQgbW9zdCBvZiB0aGUgdGltZSB3ZSBkb24ndCBjYXJlIGFib3V0IHRob3NlICovXG5cdFx0XHRcdHJldHVybiAoKHByb3BlcnR5IGluIG9iamVjdCkgJiYgaXMob2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZVtwcm9wZXJ0eV0sICd1bmRlZmluZWQnKSk7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIEFkYXB0ZWQgZnJvbSBFUzUtc2hpbSBodHRwczovL2dpdGh1Yi5jb20va3Jpc2tvd2FsL2VzNS1zaGltL2Jsb2IvbWFzdGVyL2VzNS1zaGltLmpzXG5cdFx0Ly8gZXM1LmdpdGh1Yi5jb20vI3gxNS4zLjQuNVxuXG5cdFx0aWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuXHRcdFx0RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcblxuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gdGhpcztcblxuXHRcdFx0XHRpZiAodHlwZW9mIHRhcmdldCAhPSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuXHRcdFx0XHRcdFx0Ym91bmQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcblxuXHRcdFx0XHRcdFx0XHR2YXIgRiA9IGZ1bmN0aW9uKCl7fTtcblx0XHRcdFx0XHRcdFx0Ri5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuXHRcdFx0XHRcdFx0XHR2YXIgc2VsZiA9IG5ldyBGKCk7XG5cblx0XHRcdFx0XHRcdFx0dmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGYsXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0YXJnZXQuYXBwbHkoXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LFxuXHRcdFx0XHRcdFx0XHRcdFx0YXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRyZXR1cm4gYm91bmQ7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIHNldENzcyBhcHBsaWVzIGdpdmVuIHN0eWxlcyB0byB0aGUgTW9kZXJuaXpyIERPTSBub2RlLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHNldENzcyggc3RyICkge1xuXHRcdFx0XHRtU3R5bGUuY3NzVGV4dCA9IHN0cjtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBzZXRDc3NBbGwgZXh0cmFwb2xhdGVzIGFsbCB2ZW5kb3Itc3BlY2lmaWMgY3NzIHN0cmluZ3MuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gc2V0Q3NzQWxsKCBzdHIxLCBzdHIyICkge1xuXHRcdFx0XHRyZXR1cm4gc2V0Q3NzKHByZWZpeGVzLmpvaW4oc3RyMSArICc7JykgKyAoIHN0cjIgfHwgJycgKSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogaXMgcmV0dXJucyBhIGJvb2xlYW4gZm9yIGlmIHR5cGVvZiBvYmogaXMgZXhhY3RseSB0eXBlLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGlzKCBvYmosIHR5cGUgKSB7XG5cdFx0XHRcdHJldHVybiB0eXBlb2Ygb2JqID09PSB0eXBlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGNvbnRhaW5zIHJldHVybnMgYSBib29sZWFuIGZvciBpZiBzdWJzdHIgaXMgZm91bmQgd2l0aGluIHN0ci5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBjb250YWlucyggc3RyLCBzdWJzdHIgKSB7XG5cdFx0XHRcdHJldHVybiAhIX4oJycgKyBzdHIpLmluZGV4T2Yoc3Vic3RyKTtcblx0XHR9XG5cblx0XHQvKj4+dGVzdHByb3AqL1xuXG5cdFx0Ly8gdGVzdFByb3BzIGlzIGEgZ2VuZXJpYyBDU1MgLyBET00gcHJvcGVydHkgdGVzdC5cblxuXHRcdC8vIEluIHRlc3Rpbmcgc3VwcG9ydCBmb3IgYSBnaXZlbiBDU1MgcHJvcGVydHksIGl0J3MgbGVnaXQgdG8gdGVzdDpcblx0XHQvLyAgICBgZWxlbS5zdHlsZVtzdHlsZU5hbWVdICE9PSB1bmRlZmluZWRgXG5cdFx0Ly8gSWYgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBpdCB3aWxsIHJldHVybiBhbiBlbXB0eSBzdHJpbmcsXG5cdFx0Ly8gaWYgdW5zdXBwb3J0ZWQgaXQgd2lsbCByZXR1cm4gdW5kZWZpbmVkLlxuXG5cdFx0Ly8gV2UnbGwgdGFrZSBhZHZhbnRhZ2Ugb2YgdGhpcyBxdWljayB0ZXN0IGFuZCBza2lwIHNldHRpbmcgYSBzdHlsZVxuXHRcdC8vIG9uIG91ciBtb2Rlcm5penIgZWxlbWVudCwgYnV0IGluc3RlYWQganVzdCB0ZXN0aW5nIHVuZGVmaW5lZCB2c1xuXHRcdC8vIGVtcHR5IHN0cmluZy5cblxuXHRcdC8vIEJlY2F1c2UgdGhlIHRlc3Rpbmcgb2YgdGhlIENTUyBwcm9wZXJ0eSBuYW1lcyAod2l0aCBcIi1cIiwgYXNcblx0XHQvLyBvcHBvc2VkIHRvIHRoZSBjYW1lbENhc2UgRE9NIHByb3BlcnRpZXMpIGlzIG5vbi1wb3J0YWJsZSBhbmRcblx0XHQvLyBub24tc3RhbmRhcmQgYnV0IHdvcmtzIGluIFdlYktpdCBhbmQgSUUgKGJ1dCBub3QgR2Vja28gb3IgT3BlcmEpLFxuXHRcdC8vIHdlIGV4cGxpY2l0bHkgcmVqZWN0IHByb3BlcnRpZXMgd2l0aCBkYXNoZXMgc28gdGhhdCBhdXRob3JzXG5cdFx0Ly8gZGV2ZWxvcGluZyBpbiBXZWJLaXQgb3IgSUUgZmlyc3QgZG9uJ3QgZW5kIHVwIHdpdGhcblx0XHQvLyBicm93c2VyLXNwZWNpZmljIGNvbnRlbnQgYnkgYWNjaWRlbnQuXG5cblx0XHRmdW5jdGlvbiB0ZXN0UHJvcHMoIHByb3BzLCBwcmVmaXhlZCApIHtcblx0XHRcdFx0Zm9yICggdmFyIGkgaW4gcHJvcHMgKSB7XG5cdFx0XHRcdFx0XHR2YXIgcHJvcCA9IHByb3BzW2ldO1xuXHRcdFx0XHRcdFx0aWYgKCAhY29udGFpbnMocHJvcCwgXCItXCIpICYmIG1TdHlsZVtwcm9wXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhlZCA9PSAncGZ4JyA/IHByb3AgOiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Lyo+PnRlc3Rwcm9wKi9cblxuXHRcdC8vIFRPRE8gOjogYWRkIHRlc3RET01Qcm9wc1xuXHRcdC8qKlxuXHRcdCAqIHRlc3RET01Qcm9wcyBpcyBhIGdlbmVyaWMgRE9NIHByb3BlcnR5IHRlc3Q7IGlmIGEgYnJvd3NlciBzdXBwb3J0c1xuXHRcdCAqICAgYSBjZXJ0YWluIHByb3BlcnR5LCBpdCB3b24ndCByZXR1cm4gdW5kZWZpbmVkIGZvciBpdC5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiB0ZXN0RE9NUHJvcHMoIHByb3BzLCBvYmosIGVsZW0gKSB7XG5cdFx0XHRcdGZvciAoIHZhciBpIGluIHByb3BzICkge1xuXHRcdFx0XHRcdFx0dmFyIGl0ZW0gPSBvYmpbcHJvcHNbaV1dO1xuXHRcdFx0XHRcdFx0aWYgKCBpdGVtICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybiB0aGUgcHJvcGVydHkgbmFtZSBhcyBhIHN0cmluZ1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtID09PSBmYWxzZSkgcmV0dXJuIHByb3BzW2ldO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gbGV0J3MgYmluZCBhIGZ1bmN0aW9uXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlzKGl0ZW0sICdmdW5jdGlvbicpKXtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGRlZmF1bHQgdG8gYXV0b2JpbmQgdW5sZXNzIG92ZXJyaWRlXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5iaW5kKGVsZW0gfHwgb2JqKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gdGhlIHVuYm91bmQgZnVuY3Rpb24gb3Igb2JqIG9yIHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8qPj50ZXN0YWxscHJvcHMqL1xuXHRcdC8qKlxuXHRcdCAqIHRlc3RQcm9wc0FsbCB0ZXN0cyBhIGxpc3Qgb2YgRE9NIHByb3BlcnRpZXMgd2Ugd2FudCB0byBjaGVjayBhZ2FpbnN0LlxuXHRcdCAqICAgV2Ugc3BlY2lmeSBsaXRlcmFsbHkgQUxMIHBvc3NpYmxlIChrbm93biBhbmQvb3IgbGlrZWx5KSBwcm9wZXJ0aWVzIG9uXG5cdFx0ICogICB0aGUgZWxlbWVudCBpbmNsdWRpbmcgdGhlIG5vbi12ZW5kb3IgcHJlZml4ZWQgb25lLCBmb3IgZm9yd2FyZC1cblx0XHQgKiAgIGNvbXBhdGliaWxpdHkuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gdGVzdFByb3BzQWxsKCBwcm9wLCBwcmVmaXhlZCwgZWxlbSApIHtcblxuXHRcdFx0XHR2YXIgdWNQcm9wICA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpLFxuXHRcdFx0XHRcdFx0cHJvcHMgICA9IChwcm9wICsgJyAnICsgY3Nzb21QcmVmaXhlcy5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG5cblx0XHRcdFx0Ly8gZGlkIHRoZXkgY2FsbCAucHJlZml4ZWQoJ2JveFNpemluZycpIG9yIGFyZSB3ZSBqdXN0IHRlc3RpbmcgYSBwcm9wP1xuXHRcdFx0XHRpZihpcyhwcmVmaXhlZCwgXCJzdHJpbmdcIikgfHwgaXMocHJlZml4ZWQsIFwidW5kZWZpbmVkXCIpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRlc3RQcm9wcyhwcm9wcywgcHJlZml4ZWQpO1xuXG5cdFx0XHRcdC8vIG90aGVyd2lzZSwgdGhleSBjYWxsZWQgLnByZWZpeGVkKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnLCB3aW5kb3dbLCBlbGVtXSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwcm9wcyA9IChwcm9wICsgJyAnICsgKGRvbVByZWZpeGVzKS5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG5cdFx0XHRcdFx0cmV0dXJuIHRlc3RET01Qcm9wcyhwcm9wcywgcHJlZml4ZWQsIGVsZW0pO1xuXHRcdFx0XHR9XG5cdFx0fVxuXHRcdC8qPj50ZXN0YWxscHJvcHMqL1xuXG5cblx0XHQvKipcblx0XHQgKiBUZXN0c1xuXHRcdCAqIC0tLS0tXG5cdFx0ICovXG5cblx0XHQvLyBUaGUgKm5ldyogZmxleGJveFxuXHRcdC8vIGRldi53My5vcmcvY3Nzd2cvY3NzMy1mbGV4Ym94XG5cblx0XHR0ZXN0c1snZmxleGJveCddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGVzdFByb3BzQWxsKCdmbGV4V3JhcCcpO1xuXHRcdH07XG5cblx0XHQvLyBUaGUgKm9sZCogZmxleGJveFxuXHRcdC8vIHd3dy53My5vcmcvVFIvMjAwOS9XRC1jc3MzLWZsZXhib3gtMjAwOTA3MjMvXG5cblx0XHR0ZXN0c1snZmxleGJveGxlZ2FjeSddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JveERpcmVjdGlvbicpO1xuXHRcdH07XG5cblx0XHQvLyBPbiB0aGUgUzYwIGFuZCBCQiBTdG9ybSwgZ2V0Q29udGV4dCBleGlzdHMsIGJ1dCBhbHdheXMgcmV0dXJucyB1bmRlZmluZWRcblx0XHQvLyBzbyB3ZSBhY3R1YWxseSBoYXZlIHRvIGNhbGwgZ2V0Q29udGV4dCgpIHRvIHZlcmlmeVxuXHRcdC8vIGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvaXNzdWUvOTcvXG5cblx0XHR0ZXN0c1snY2FudmFzJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0XHRcdFx0cmV0dXJuICEhKGVsZW0uZ2V0Q29udGV4dCAmJiBlbGVtLmdldENvbnRleHQoJzJkJykpO1xuXHRcdH07XG5cblx0XHR0ZXN0c1snY2FudmFzdGV4dCddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIShNb2Rlcm5penJbJ2NhbnZhcyddICYmIGlzKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJykuZmlsbFRleHQsICdmdW5jdGlvbicpKTtcblx0XHR9O1xuXG5cdFx0Ly8gd2Viay5pdC83MDExNyBpcyB0cmFja2luZyBhIGxlZ2l0IFdlYkdMIGZlYXR1cmUgZGV0ZWN0IHByb3Bvc2FsXG5cblx0XHQvLyBXZSBkbyBhIHNvZnQgZGV0ZWN0IHdoaWNoIG1heSBmYWxzZSBwb3NpdGl2ZSBpbiBvcmRlciB0byBhdm9pZFxuXHRcdC8vIGFuIGV4cGVuc2l2ZSBjb250ZXh0IGNyZWF0aW9uOiBidWd6aWwubGEvNzMyNDQxXG5cblx0XHR0ZXN0c1snd2ViZ2wnXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF3aW5kb3cuV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqIFRoZSBNb2Rlcm5penIudG91Y2ggdGVzdCBvbmx5IGluZGljYXRlcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0c1xuXHRcdCAqICAgIHRvdWNoIGV2ZW50cywgd2hpY2ggZG9lcyBub3QgbmVjZXNzYXJpbHkgcmVmbGVjdCBhIHRvdWNoc2NyZWVuXG5cdFx0ICogICAgZGV2aWNlLCBhcyBldmlkZW5jZWQgYnkgdGFibGV0cyBydW5uaW5nIFdpbmRvd3MgNyBvciwgYWxhcyxcblx0XHQgKiAgICB0aGUgUGFsbSBQcmUgLyBXZWJPUyAodG91Y2gpIHBob25lcy5cblx0XHQgKlxuXHRcdCAqIEFkZGl0aW9uYWxseSwgQ2hyb21lIChkZXNrdG9wKSB1c2VkIHRvIGxpZSBhYm91dCBpdHMgc3VwcG9ydCBvbiB0aGlzLFxuXHRcdCAqICAgIGJ1dCB0aGF0IGhhcyBzaW5jZSBiZWVuIHJlY3RpZmllZDogY3JidWcuY29tLzM2NDE1XG5cdFx0ICpcblx0XHQgKiBXZSBhbHNvIHRlc3QgZm9yIEZpcmVmb3ggNCBNdWx0aXRvdWNoIFN1cHBvcnQuXG5cdFx0ICpcblx0XHQgKiBGb3IgbW9yZSBpbmZvLCBzZWU6IG1vZGVybml6ci5naXRodWIuY29tL01vZGVybml6ci90b3VjaC5odG1sXG5cdFx0ICovXG5cblx0XHR0ZXN0c1sndG91Y2gnXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgYm9vbDtcblxuXHRcdFx0XHRpZigoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpIHtcblx0XHRcdFx0XHRib29sID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbmplY3RFbGVtZW50V2l0aFN0eWxlcyhbJ0BtZWRpYSAoJyxwcmVmaXhlcy5qb2luKCd0b3VjaC1lbmFibGVkKSwoJyksbW9kLCcpJywneyNtb2Rlcm5penJ7dG9wOjlweDtwb3NpdGlvbjphYnNvbHV0ZX19J10uam9pbignJyksIGZ1bmN0aW9uKCBub2RlICkge1xuXHRcdFx0XHRcdFx0Ym9vbCA9IG5vZGUub2Zmc2V0VG9wID09PSA5O1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGJvb2w7XG5cdFx0fTtcblxuXG5cdFx0Ly8gZ2VvbG9jYXRpb24gaXMgb2Z0ZW4gY29uc2lkZXJlZCBhIHRyaXZpYWwgZmVhdHVyZSBkZXRlY3QuLi5cblx0XHQvLyBUdXJucyBvdXQsIGl0J3MgcXVpdGUgdHJpY2t5IHRvIGdldCByaWdodDpcblx0XHQvL1xuXHRcdC8vIFVzaW5nICEhbmF2aWdhdG9yLmdlb2xvY2F0aW9uIGRvZXMgdHdvIHRoaW5ncyB3ZSBkb24ndCB3YW50LiBJdDpcblx0XHQvLyAgIDEuIExlYWtzIG1lbW9yeSBpbiBJRTk6IGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvNTEzXG5cdFx0Ly8gICAyLiBEaXNhYmxlcyBwYWdlIGNhY2hpbmcgaW4gV2ViS2l0OiB3ZWJrLml0LzQzOTU2XG5cdFx0Ly9cblx0XHQvLyBNZWFud2hpbGUsIGluIEZpcmVmb3ggPCA4LCBhbiBhYm91dDpjb25maWcgc2V0dGluZyBjb3VsZCBleHBvc2Vcblx0XHQvLyBhIGZhbHNlIHBvc2l0aXZlIHRoYXQgd291bGQgdGhyb3cgYW4gZXhjZXB0aW9uOiBidWd6aWwubGEvNjg4MTU4XG5cblx0XHR0ZXN0c1snZ2VvbG9jYXRpb24nXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3I7XG5cdFx0fTtcblxuXG5cdFx0dGVzdHNbJ3Bvc3RtZXNzYWdlJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAhIXdpbmRvdy5wb3N0TWVzc2FnZTtcblx0XHR9O1xuXG5cblx0XHQvLyBDaHJvbWUgaW5jb2duaXRvIG1vZGUgdXNlZCB0byB0aHJvdyBhbiBleGNlcHRpb24gd2hlbiB1c2luZyBvcGVuRGF0YWJhc2Vcblx0XHQvLyBJdCBkb2Vzbid0IGFueW1vcmUuXG5cdFx0dGVzdHNbJ3dlYnNxbGRhdGFiYXNlJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAhIXdpbmRvdy5vcGVuRGF0YWJhc2U7XG5cdFx0fTtcblxuXHRcdC8vIFZlbmRvcnMgaGFkIGluY29uc2lzdGVudCBwcmVmaXhpbmcgd2l0aCB0aGUgZXhwZXJpbWVudGFsIEluZGV4ZWQgREI6XG5cdFx0Ly8gLSBXZWJraXQncyBpbXBsZW1lbnRhdGlvbiBpcyBhY2Nlc3NpYmxlIHRocm91Z2ggd2Via2l0SW5kZXhlZERCXG5cdFx0Ly8gLSBGaXJlZm94IHNoaXBwZWQgbW96X2luZGV4ZWREQiBiZWZvcmUgRkY0YjksIGJ1dCBzaW5jZSB0aGVuIGhhcyBiZWVuIG1vekluZGV4ZWREQlxuXHRcdC8vIEZvciBzcGVlZCwgd2UgZG9uJ3QgdGVzdCB0aGUgbGVnYWN5IChhbmQgYmV0YS1vbmx5KSBpbmRleGVkREJcblx0XHR0ZXN0c1snaW5kZXhlZERCJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAhIXRlc3RQcm9wc0FsbChcImluZGV4ZWREQlwiLCB3aW5kb3cpO1xuXHRcdH07XG5cblx0XHQvLyBkb2N1bWVudE1vZGUgbG9naWMgZnJvbSBZVUkgdG8gZmlsdGVyIG91dCBJRTggQ29tcGF0IE1vZGVcblx0XHQvLyAgIHdoaWNoIGZhbHNlIHBvc2l0aXZlcy5cblx0XHR0ZXN0c1snaGFzaGNoYW5nZSddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gaXNFdmVudFN1cHBvcnRlZCgnaGFzaGNoYW5nZScsIHdpbmRvdykgJiYgKGRvY3VtZW50LmRvY3VtZW50TW9kZSA9PT0gdW5kZWZpbmVkIHx8IGRvY3VtZW50LmRvY3VtZW50TW9kZSA+IDcpO1xuXHRcdH07XG5cblx0XHQvLyBQZXIgMS42OlxuXHRcdC8vIFRoaXMgdXNlZCB0byBiZSBNb2Rlcm5penIuaGlzdG9yeW1hbmFnZW1lbnQgYnV0IHRoZSBsb25nZXJcblx0XHQvLyBuYW1lIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgYSBzaG9ydGVyIGFuZCBwcm9wZXJ0eS1tYXRjaGluZyBvbmUuXG5cdFx0Ly8gVGhlIG9sZCBBUEkgaXMgc3RpbGwgYXZhaWxhYmxlIGluIDEuNiwgYnV0IGFzIG9mIDIuMCB3aWxsIHRocm93IGEgd2FybmluZyxcblx0XHQvLyBhbmQgaW4gdGhlIGZpcnN0IHJlbGVhc2UgdGhlcmVhZnRlciBkaXNhcHBlYXIgZW50aXJlbHkuXG5cdFx0dGVzdHNbJ2hpc3RvcnknXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICEhKHdpbmRvdy5oaXN0b3J5ICYmIGhpc3RvcnkucHVzaFN0YXRlKTtcblx0XHR9O1xuXG5cdFx0dGVzdHNbJ2RyYWdhbmRkcm9wJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRyZXR1cm4gKCdkcmFnZ2FibGUnIGluIGRpdikgfHwgKCdvbmRyYWdzdGFydCcgaW4gZGl2ICYmICdvbmRyb3AnIGluIGRpdik7XG5cdFx0fTtcblxuXHRcdC8vIEZGMy42IHdhcyBFT0wnZWQgb24gNC8yNC8xMiwgYnV0IHRoZSBFU1IgdmVyc2lvbiBvZiBGRjEwXG5cdFx0Ly8gd2lsbCBiZSBzdXBwb3J0ZWQgdW50aWwgRkYxOSAoMi8xMi8xMyksIGF0IHdoaWNoIHRpbWUsIEVTUiBiZWNvbWVzIEZGMTcuXG5cdFx0Ly8gRkYxMCBzdGlsbCB1c2VzIHByZWZpeGVzLCBzbyBjaGVjayBmb3IgaXQgdW50aWwgdGhlbi5cblx0XHQvLyBmb3IgbW9yZSBFU1IgaW5mbywgc2VlOiBtb3ppbGxhLm9yZy9lbi1VUy9maXJlZm94L29yZ2FuaXphdGlvbnMvZmFxL1xuXHRcdHRlc3RzWyd3ZWJzb2NrZXRzJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICdXZWJTb2NrZXQnIGluIHdpbmRvdyB8fCAnTW96V2ViU29ja2V0JyBpbiB3aW5kb3c7XG5cdFx0fTtcblxuXG5cdFx0Ly8gY3NzLXRyaWNrcy5jb20vcmdiYS1icm93c2VyLXN1cHBvcnQvXG5cdFx0dGVzdHNbJ3JnYmEnXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBTZXQgYW4gcmdiYSgpIGNvbG9yIGFuZCBjaGVjayB0aGUgcmV0dXJuZWQgdmFsdWVcblxuXHRcdFx0XHRzZXRDc3MoJ2JhY2tncm91bmQtY29sb3I6cmdiYSgxNTAsMjU1LDE1MCwuNSknKTtcblxuXHRcdFx0XHRyZXR1cm4gY29udGFpbnMobVN0eWxlLmJhY2tncm91bmRDb2xvciwgJ3JnYmEnKTtcblx0XHR9O1xuXG5cdFx0dGVzdHNbJ2hzbGEnXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBTYW1lIGFzIHJnYmEoKSwgaW4gZmFjdCwgYnJvd3NlcnMgcmUtbWFwIGhzbGEoKSB0byByZ2JhKCkgaW50ZXJuYWxseSxcblx0XHRcdFx0Ly8gICBleGNlcHQgSUU5IHdobyByZXRhaW5zIGl0IGFzIGhzbGFcblxuXHRcdFx0XHRzZXRDc3MoJ2JhY2tncm91bmQtY29sb3I6aHNsYSgxMjAsNDAlLDEwMCUsLjUpJyk7XG5cblx0XHRcdFx0cmV0dXJuIGNvbnRhaW5zKG1TdHlsZS5iYWNrZ3JvdW5kQ29sb3IsICdyZ2JhJykgfHwgY29udGFpbnMobVN0eWxlLmJhY2tncm91bmRDb2xvciwgJ2hzbGEnKTtcblx0XHR9O1xuXG5cdFx0dGVzdHNbJ211bHRpcGxlYmdzJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gU2V0dGluZyBtdWx0aXBsZSBpbWFnZXMgQU5EIGEgY29sb3Igb24gdGhlIGJhY2tncm91bmQgc2hvcnRoYW5kIHByb3BlcnR5XG5cdFx0XHRcdC8vICBhbmQgdGhlbiBxdWVyeWluZyB0aGUgc3R5bGUuYmFja2dyb3VuZCBwcm9wZXJ0eSB2YWx1ZSBmb3IgdGhlIG51bWJlciBvZlxuXHRcdFx0XHQvLyAgb2NjdXJyZW5jZXMgb2YgXCJ1cmwoXCIgaXMgYSByZWxpYWJsZSBtZXRob2QgZm9yIGRldGVjdGluZyBBQ1RVQUwgc3VwcG9ydCBmb3IgdGhpcyFcblxuXHRcdFx0XHRzZXRDc3MoJ2JhY2tncm91bmQ6dXJsKGh0dHBzOi8vKSx1cmwoaHR0cHM6Ly8pLHJlZCB1cmwoaHR0cHM6Ly8pJyk7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIFVBIHN1cHBvcnRzIG11bHRpcGxlIGJhY2tncm91bmRzLCB0aGVyZSBzaG91bGQgYmUgdGhyZWUgb2NjdXJyZW5jZXNcblx0XHRcdFx0Ly8gICBvZiB0aGUgc3RyaW5nIFwidXJsKFwiIGluIHRoZSByZXR1cm4gdmFsdWUgZm9yIGVsZW1TdHlsZS5iYWNrZ3JvdW5kXG5cblx0XHRcdFx0cmV0dXJuICgvKHVybFxccypcXCguKj8pezN9LykudGVzdChtU3R5bGUuYmFja2dyb3VuZCk7XG5cdFx0fTtcblxuXG5cblx0XHQvLyB0aGlzIHdpbGwgZmFsc2UgcG9zaXRpdmUgaW4gT3BlcmEgTWluaVxuXHRcdC8vICAgZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy8zOTZcblxuXHRcdHRlc3RzWydiYWNrZ3JvdW5kc2l6ZSddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JhY2tncm91bmRTaXplJyk7XG5cdFx0fTtcblxuXHRcdHRlc3RzWydib3JkZXJpbWFnZSddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JvcmRlckltYWdlJyk7XG5cdFx0fTtcblxuXG5cdFx0Ly8gU3VwZXIgY29tcHJlaGVuc2l2ZSB0YWJsZSBhYm91dCBhbGwgdGhlIHVuaXF1ZSBpbXBsZW1lbnRhdGlvbnMgb2Zcblx0XHQvLyBib3JkZXItcmFkaXVzOiBtdWRkbGVkcmFtYmxpbmdzLmNvbS90YWJsZS1vZi1jc3MzLWJvcmRlci1yYWRpdXMtY29tcGxpYW5jZVxuXG5cdFx0dGVzdHNbJ2JvcmRlcnJhZGl1cyddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JvcmRlclJhZGl1cycpO1xuXHRcdH07XG5cblx0XHQvLyBXZWJPUyB1bmZvcnR1bmF0ZWx5IGZhbHNlIHBvc2l0aXZlcyBvbiB0aGlzIHRlc3QuXG5cdFx0dGVzdHNbJ2JveHNoYWRvdyddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JveFNoYWRvdycpO1xuXHRcdH07XG5cblx0XHQvLyBGRjMuMCB3aWxsIGZhbHNlIHBvc2l0aXZlIG9uIHRoaXMgdGVzdFxuXHRcdHRlc3RzWyd0ZXh0c2hhZG93J10gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlLnRleHRTaGFkb3cgPT09ICcnO1xuXHRcdH07XG5cblxuXHRcdHRlc3RzWydvcGFjaXR5J10gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gQnJvd3NlcnMgdGhhdCBhY3R1YWxseSBoYXZlIENTUyBPcGFjaXR5IGltcGxlbWVudGVkIGhhdmUgZG9uZSBzb1xuXHRcdFx0XHQvLyAgYWNjb3JkaW5nIHRvIHNwZWMsIHdoaWNoIG1lYW5zIHRoZWlyIHJldHVybiB2YWx1ZXMgYXJlIHdpdGhpbiB0aGVcblx0XHRcdFx0Ly8gIHJhbmdlIG9mIFswLjAsMS4wXSAtIGluY2x1ZGluZyB0aGUgbGVhZGluZyB6ZXJvLlxuXG5cdFx0XHRcdHNldENzc0FsbCgnb3BhY2l0eTouNTUnKTtcblxuXHRcdFx0XHQvLyBUaGUgbm9uLWxpdGVyYWwgLiBpbiB0aGlzIHJlZ2V4IGlzIGludGVudGlvbmFsOlxuXHRcdFx0XHQvLyAgIEdlcm1hbiBDaHJvbWUgcmV0dXJucyB0aGlzIHZhbHVlIGFzIDAsNTVcblx0XHRcdFx0Ly8gZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy8jaXNzdWUvNTkvY29tbWVudC81MTY2MzJcblx0XHRcdFx0cmV0dXJuICgvXjAuNTUkLykudGVzdChtU3R5bGUub3BhY2l0eSk7XG5cdFx0fTtcblxuXG5cdFx0Ly8gTm90ZSwgQW5kcm9pZCA8IDQgd2lsbCBwYXNzIHRoaXMgdGVzdCwgYnV0IGNhbiBvbmx5IGFuaW1hdGVcblx0XHQvLyAgIGEgc2luZ2xlIHByb3BlcnR5IGF0IGEgdGltZVxuXHRcdC8vICAgZGFuZWRlbi5tZS8yMDExLzEyL3B1dHRpbmctdXAtd2l0aC1hbmRyb2lkcy1idWxsc2hpdC9cblx0XHR0ZXN0c1snY3NzYW5pbWF0aW9ucyddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0ZXN0UHJvcHNBbGwoJ2FuaW1hdGlvbk5hbWUnKTtcblx0XHR9O1xuXG5cblx0XHR0ZXN0c1snY3NzY29sdW1ucyddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0ZXN0UHJvcHNBbGwoJ2NvbHVtbkNvdW50Jyk7XG5cdFx0fTtcblxuXG5cdFx0dGVzdHNbJ2Nzc2dyYWRpZW50cyddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBGb3IgQ1NTIEdyYWRpZW50cyBzeW50YXgsIHBsZWFzZSBzZWU6XG5cdFx0XHRcdCAqIHdlYmtpdC5vcmcvYmxvZy8xNzUvaW50cm9kdWNpbmctY3NzLWdyYWRpZW50cy9cblx0XHRcdFx0ICogZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0NTUy8tbW96LWxpbmVhci1ncmFkaWVudFxuXHRcdFx0XHQgKiBkZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vQ1NTLy1tb3otcmFkaWFsLWdyYWRpZW50XG5cdFx0XHRcdCAqIGRldi53My5vcmcvY3Nzd2cvY3NzMy1pbWFnZXMvI2dyYWRpZW50cy1cblx0XHRcdFx0ICovXG5cblx0XHRcdFx0dmFyIHN0cjEgPSAnYmFja2dyb3VuZC1pbWFnZTonLFxuXHRcdFx0XHRcdFx0c3RyMiA9ICdncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgYm90dG9tLGZyb20oIzlmOSksdG8od2hpdGUpKTsnLFxuXHRcdFx0XHRcdFx0c3RyMyA9ICdsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsIzlmOSwgd2hpdGUpOyc7XG5cblx0XHRcdFx0c2V0Q3NzKFxuXHRcdFx0XHRcdFx0IC8vIGxlZ2FjeSB3ZWJraXQgc3ludGF4IChGSVhNRTogcmVtb3ZlIHdoZW4gc3ludGF4IG5vdCBpbiB1c2UgYW55bW9yZSlcblx0XHRcdFx0XHRcdFx0KHN0cjEgKyAnLXdlYmtpdC0gJy5zcGxpdCgnICcpLmpvaW4oc3RyMiArIHN0cjEpICtcblx0XHRcdFx0XHRcdCAvLyBzdGFuZGFyZCBzeW50YXggICAgICAgICAgICAgLy8gdHJhaWxpbmcgJ2JhY2tncm91bmQtaW1hZ2U6J1xuXHRcdFx0XHRcdFx0XHRwcmVmaXhlcy5qb2luKHN0cjMgKyBzdHIxKSkuc2xpY2UoMCwgLXN0cjEubGVuZ3RoKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHJldHVybiBjb250YWlucyhtU3R5bGUuYmFja2dyb3VuZEltYWdlLCAnZ3JhZGllbnQnKTtcblx0XHR9O1xuXG5cblx0XHR0ZXN0c1snY3NzcmVmbGVjdGlvbnMnXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGVzdFByb3BzQWxsKCdib3hSZWZsZWN0Jyk7XG5cdFx0fTtcblxuXG5cdFx0dGVzdHNbJ2Nzc3RyYW5zZm9ybXMnXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF0ZXN0UHJvcHNBbGwoJ3RyYW5zZm9ybScpO1xuXHRcdH07XG5cblxuXHRcdHRlc3RzWydjc3N0cmFuc2Zvcm1zM2QnXSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdHZhciByZXQgPSAhIXRlc3RQcm9wc0FsbCgncGVyc3BlY3RpdmUnKTtcblxuXHRcdFx0XHQvLyBXZWJraXQncyAzRCB0cmFuc2Zvcm1zIGFyZSBwYXNzZWQgb2ZmIHRvIHRoZSBicm93c2VyJ3Mgb3duIGdyYXBoaWNzIHJlbmRlcmVyLlxuXHRcdFx0XHQvLyAgIEl0IHdvcmtzIGZpbmUgaW4gU2FmYXJpIG9uIExlb3BhcmQgYW5kIFNub3cgTGVvcGFyZCwgYnV0IG5vdCBpbiBDaHJvbWUgaW5cblx0XHRcdFx0Ly8gICBzb21lIGNvbmRpdGlvbnMuIEFzIGEgcmVzdWx0LCBXZWJraXQgdHlwaWNhbGx5IHJlY29nbml6ZXMgdGhlIHN5bnRheCBidXRcblx0XHRcdFx0Ly8gICB3aWxsIHNvbWV0aW1lcyB0aHJvdyBhIGZhbHNlIHBvc2l0aXZlLCB0aHVzIHdlIG11c3QgZG8gYSBtb3JlIHRob3JvdWdoIGNoZWNrOlxuXHRcdFx0XHRpZiAoIHJldCAmJiAnd2Via2l0UGVyc3BlY3RpdmUnIGluIGRvY0VsZW1lbnQuc3R5bGUgKSB7XG5cblx0XHRcdFx0XHQvLyBXZWJraXQgYWxsb3dzIHRoaXMgbWVkaWEgcXVlcnkgdG8gc3VjY2VlZCBvbmx5IGlmIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuXG5cdFx0XHRcdFx0Ly8gYEBtZWRpYSAodHJhbnNmb3JtLTNkKSwoLXdlYmtpdC10cmFuc2Zvcm0tM2QpeyAuLi4gfWBcblx0XHRcdFx0XHRpbmplY3RFbGVtZW50V2l0aFN0eWxlcygnQG1lZGlhICh0cmFuc2Zvcm0tM2QpLCgtd2Via2l0LXRyYW5zZm9ybS0zZCl7I21vZGVybml6cntsZWZ0OjlweDtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6M3B4O319JywgZnVuY3Rpb24oIG5vZGUsIHJ1bGUgKSB7XG5cdFx0XHRcdFx0XHRyZXQgPSBub2RlLm9mZnNldExlZnQgPT09IDkgJiYgbm9kZS5vZmZzZXRIZWlnaHQgPT09IDM7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHR9O1xuXG5cblx0XHR0ZXN0c1snY3NzdHJhbnNpdGlvbnMnXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGVzdFByb3BzQWxsKCd0cmFuc2l0aW9uJyk7XG5cdFx0fTtcblxuXG5cdFx0Lyo+PmZvbnRmYWNlKi9cblx0XHQvLyBAZm9udC1mYWNlIGRldGVjdGlvbiByb3V0aW5lIGJ5IERpZWdvIFBlcmluaVxuXHRcdC8vIGphdmFzY3JpcHQubndib3guY29tL0NTU1N1cHBvcnQvXG5cblx0XHQvLyBmYWxzZSBwb3NpdGl2ZXM6XG5cdFx0Ly8gICBXZWJPUyBnaXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzM0MlxuXHRcdC8vICAgV1A3ICAgZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy81Mzhcblx0XHR0ZXN0c1snZm9udGZhY2UnXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgYm9vbDtcblxuXHRcdFx0XHRpbmplY3RFbGVtZW50V2l0aFN0eWxlcygnQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6XCJmb250XCI7c3JjOnVybChcImh0dHBzOi8vXCIpfScsIGZ1bmN0aW9uKCBub2RlLCBydWxlICkge1xuXHRcdFx0XHRcdHZhciBzdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbW9kZXJuaXpyJyksXG5cdFx0XHRcdFx0XHRcdHNoZWV0ID0gc3R5bGUuc2hlZXQgfHwgc3R5bGUuc3R5bGVTaGVldCxcblx0XHRcdFx0XHRcdFx0Y3NzVGV4dCA9IHNoZWV0ID8gKHNoZWV0LmNzc1J1bGVzICYmIHNoZWV0LmNzc1J1bGVzWzBdID8gc2hlZXQuY3NzUnVsZXNbMF0uY3NzVGV4dCA6IHNoZWV0LmNzc1RleHQgfHwgJycpIDogJyc7XG5cblx0XHRcdFx0XHRib29sID0gL3NyYy9pLnRlc3QoY3NzVGV4dCkgJiYgY3NzVGV4dC5pbmRleE9mKHJ1bGUuc3BsaXQoJyAnKVswXSkgPT09IDA7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBib29sO1xuXHRcdH07XG5cdFx0Lyo+PmZvbnRmYWNlKi9cblxuXHRcdC8vIENTUyBnZW5lcmF0ZWQgY29udGVudCBkZXRlY3Rpb25cblx0XHR0ZXN0c1snZ2VuZXJhdGVkY29udGVudCddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBib29sO1xuXG5cdFx0XHRcdGluamVjdEVsZW1lbnRXaXRoU3R5bGVzKFsnIycsbW9kLCd7Zm9udDowLzAgYX0jJyxtb2QsJzphZnRlcntjb250ZW50OlwiJyxzbWlsZSwnXCI7dmlzaWJpbGl0eTpoaWRkZW47Zm9udDozcHgvMSBhfSddLmpvaW4oJycpLCBmdW5jdGlvbiggbm9kZSApIHtcblx0XHRcdFx0XHRib29sID0gbm9kZS5vZmZzZXRIZWlnaHQgPj0gMztcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIGJvb2w7XG5cdFx0fTtcblxuXG5cblx0XHQvLyBUaGVzZSB0ZXN0cyBldmFsdWF0ZSBzdXBwb3J0IG9mIHRoZSB2aWRlby9hdWRpbyBlbGVtZW50cywgYXMgd2VsbCBhc1xuXHRcdC8vIHRlc3Rpbmcgd2hhdCB0eXBlcyBvZiBjb250ZW50IHRoZXkgc3VwcG9ydC5cblx0XHQvL1xuXHRcdC8vIFdlJ3JlIHVzaW5nIHRoZSBCb29sZWFuIGNvbnN0cnVjdG9yIGhlcmUsIHNvIHRoYXQgd2UgY2FuIGV4dGVuZCB0aGUgdmFsdWVcblx0XHQvLyBlLmcuICBNb2Rlcm5penIudmlkZW8gICAgIC8vIHRydWVcblx0XHQvLyAgICAgICBNb2Rlcm5penIudmlkZW8ub2dnIC8vICdwcm9iYWJseSdcblx0XHQvL1xuXHRcdC8vIENvZGVjIHZhbHVlcyBmcm9tIDogZ2l0aHViLmNvbS9OaWVsc0xlZW5oZWVyL2h0bWw1dGVzdC9ibG9iLzkxMDZhOC9pbmRleC5odG1sI0w4NDVcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgIHRoeCB0byBOaWVsc0xlZW5oZWVyIGFuZCB6Y29ycGFuXG5cblx0XHQvLyBOb3RlOiBpbiBzb21lIG9sZGVyIGJyb3dzZXJzLCBcIm5vXCIgd2FzIGEgcmV0dXJuIHZhbHVlIGluc3RlYWQgb2YgZW1wdHkgc3RyaW5nLlxuXHRcdC8vICAgSXQgd2FzIGxpdmUgaW4gRkYzLjUuMCBhbmQgMy41LjEsIGJ1dCBmaXhlZCBpbiAzLjUuMlxuXHRcdC8vICAgSXQgd2FzIGFsc28gbGl2ZSBpbiBTYWZhcmkgNC4wLjAgLSA0LjAuNCwgYnV0IGZpeGVkIGluIDQuMC41XG5cblx0XHR0ZXN0c1sndmlkZW8nXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyksXG5cdFx0XHRcdFx0XHRib29sID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gSUU5IFJ1bm5pbmcgb24gV2luZG93cyBTZXJ2ZXIgU0tVIGNhbiBjYXVzZSBhbiBleGNlcHRpb24gdG8gYmUgdGhyb3duLCBidWcgIzIyNFxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0aWYgKCBib29sID0gISFlbGVtLmNhblBsYXlUeXBlICkge1xuXHRcdFx0XHRcdFx0XHRcdGJvb2wgICAgICA9IG5ldyBCb29sZWFuKGJvb2wpO1xuXHRcdFx0XHRcdFx0XHRcdGJvb2wub2dnICA9IGVsZW0uY2FuUGxheVR5cGUoJ3ZpZGVvL29nZzsgY29kZWNzPVwidGhlb3JhXCInKSAgICAgIC5yZXBsYWNlKC9ebm8kLywnJyk7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBXaXRob3V0IFF1aWNrVGltZSwgdGhpcyB2YWx1ZSB3aWxsIGJlIGB1bmRlZmluZWRgLiBnaXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzU0NlxuXHRcdFx0XHRcdFx0XHRcdGJvb2wuaDI2NCA9IGVsZW0uY2FuUGxheVR5cGUoJ3ZpZGVvL21wNDsgY29kZWNzPVwiYXZjMS40MkUwMUVcIicpIC5yZXBsYWNlKC9ebm8kLywnJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRib29sLndlYm0gPSBlbGVtLmNhblBsYXlUeXBlKCd2aWRlby93ZWJtOyBjb2RlY3M9XCJ2cDgsIHZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sJycpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gY2F0Y2goZSkgeyB9XG5cblx0XHRcdFx0cmV0dXJuIGJvb2w7XG5cdFx0fTtcblxuXHRcdHRlc3RzWydhdWRpbyddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKSxcblx0XHRcdFx0XHRcdGJvb2wgPSBmYWxzZTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0aWYgKCBib29sID0gISFlbGVtLmNhblBsYXlUeXBlICkge1xuXHRcdFx0XHRcdFx0XHRcdGJvb2wgICAgICA9IG5ldyBCb29sZWFuKGJvb2wpO1xuXHRcdFx0XHRcdFx0XHRcdGJvb2wub2dnICA9IGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywnJyk7XG5cdFx0XHRcdFx0XHRcdFx0Ym9vbC5tcDMgID0gZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZzsnKSAgICAgICAgICAgICAgIC5yZXBsYWNlKC9ebm8kLywnJyk7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBNaW1ldHlwZXMgYWNjZXB0ZWQ6XG5cdFx0XHRcdFx0XHRcdFx0Ly8gICBkZXZlbG9wZXIubW96aWxsYS5vcmcvRW4vTWVkaWFfZm9ybWF0c19zdXBwb3J0ZWRfYnlfdGhlX2F1ZGlvX2FuZF92aWRlb19lbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRcdC8vICAgYml0Lmx5L2lwaG9uZW9zY29kZWNzXG5cdFx0XHRcdFx0XHRcdFx0Ym9vbC53YXYgID0gZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKSAgICAgLnJlcGxhY2UoL15ubyQvLCcnKTtcblx0XHRcdFx0XHRcdFx0XHRib29sLm00YSAgPSAoIGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbTRhOycpICAgICAgICAgICAgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKSkgICAgICAgICAgICAgLnJlcGxhY2UoL15ubyQvLCcnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaChlKSB7IH1cblxuXHRcdFx0XHRyZXR1cm4gYm9vbDtcblx0XHR9O1xuXG5cblx0XHQvLyBJbiBGRjQsIGlmIGRpc2FibGVkLCB3aW5kb3cubG9jYWxTdG9yYWdlIHNob3VsZCA9PT0gbnVsbC5cblxuXHRcdC8vIE5vcm1hbGx5LCB3ZSBjb3VsZCBub3QgdGVzdCB0aGF0IGRpcmVjdGx5IGFuZCBuZWVkIHRvIGRvIGFcblx0XHQvLyAgIGAoJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93KSAmJiBgIHRlc3QgZmlyc3QgYmVjYXVzZSBvdGhlcndpc2UgRmlyZWZveCB3aWxsXG5cdFx0Ly8gICB0aHJvdyBidWd6aWwubGEvMzY1NzcyIGlmIGNvb2tpZXMgYXJlIGRpc2FibGVkXG5cblx0XHQvLyBBbHNvIGluIGlPUzUgUHJpdmF0ZSBCcm93c2luZyBtb2RlLCBhdHRlbXB0aW5nIHRvIHVzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbVxuXHRcdC8vIHdpbGwgdGhyb3cgdGhlIGV4Y2VwdGlvbjpcblx0XHQvLyAgIFFVT1RBX0VYQ0VFREVEX0VSUlJPUiBET00gRXhjZXB0aW9uIDIyLlxuXHRcdC8vIFBlY3VsaWFybHksIGdldEl0ZW0gYW5kIHJlbW92ZUl0ZW0gY2FsbHMgZG8gbm90IHRocm93LlxuXG5cdFx0Ly8gQmVjYXVzZSB3ZSBhcmUgZm9yY2VkIHRvIHRyeS9jYXRjaCB0aGlzLCB3ZSdsbCBnbyBhZ2dyZXNzaXZlLlxuXG5cdFx0Ly8gSnVzdCBGV0lXOiBJRTggQ29tcGF0IG1vZGUgc3VwcG9ydHMgdGhlc2UgZmVhdHVyZXMgY29tcGxldGVseTpcblx0XHQvLyAgIHd3dy5xdWlya3Ntb2RlLm9yZy9kb20vaHRtbDUuaHRtbFxuXHRcdC8vIEJ1dCBJRTggZG9lc24ndCBzdXBwb3J0IGVpdGhlciB3aXRoIGxvY2FsIGZpbGVzXG5cblx0XHR0ZXN0c1snbG9jYWxzdG9yYWdlJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKG1vZCwgbW9kKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG1vZCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dGVzdHNbJ3Nlc3Npb25zdG9yYWdlJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHNlc3Npb25TdG9yYWdlLnNldEl0ZW0obW9kLCBtb2QpO1xuXHRcdFx0XHRcdFx0c2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShtb2QpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0fTtcblxuXG5cdFx0dGVzdHNbJ3dlYndvcmtlcnMnXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF3aW5kb3cuV29ya2VyO1xuXHRcdH07XG5cblxuXHRcdHRlc3RzWydhcHBsaWNhdGlvbmNhY2hlJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhd2luZG93LmFwcGxpY2F0aW9uQ2FjaGU7XG5cdFx0fTtcblxuXG5cdFx0Ly8gVGhhbmtzIHRvIEVyaWsgRGFobHN0cm9tXG5cdFx0dGVzdHNbJ3N2ZyddID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucy5zdmcsICdzdmcnKS5jcmVhdGVTVkdSZWN0O1xuXHRcdH07XG5cblx0XHQvLyBzcGVjaWZpY2FsbHkgZm9yIFNWRyBpbmxpbmUgaW4gSFRNTCwgbm90IHdpdGhpbiBYSFRNTFxuXHRcdC8vIHRlc3QgcGFnZTogcGF1bGlyaXNoLmNvbS9kZW1vL2lubGluZS1zdmdcblx0XHR0ZXN0c1snaW5saW5lc3ZnJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGRpdi5pbm5lckhUTUwgPSAnPHN2Zy8+Jztcblx0XHRcdHJldHVybiAoZGl2LmZpcnN0Q2hpbGQgJiYgZGl2LmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKSA9PSBucy5zdmc7XG5cdFx0fTtcblxuXHRcdC8vIFNWRyBTTUlMIGFuaW1hdGlvblxuXHRcdHRlc3RzWydzbWlsJ10gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmIC9TVkdBbmltYXRlLy50ZXN0KHRvU3RyaW5nLmNhbGwoZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLnN2ZywgJ2FuaW1hdGUnKSkpO1xuXHRcdH07XG5cblx0XHQvLyBUaGlzIHRlc3QgaXMgb25seSBmb3IgY2xpcCBwYXRocyBpbiBTVkcgcHJvcGVyLCBub3QgY2xpcCBwYXRocyBvbiBIVE1MIGNvbnRlbnRcblx0XHQvLyBkZW1vOiBzcnVmYWN1bHR5LnNydS5lZHUvZGF2aWQuZGFpbGV5L3N2Zy9uZXdzdHVmZi9jbGlwUGF0aDQuc3ZnXG5cblx0XHQvLyBIb3dldmVyIHJlYWQgdGhlIGNvbW1lbnRzIHRvIGRpZyBpbnRvIGFwcGx5aW5nIFNWRyBjbGlwcGF0aHMgdG8gSFRNTCBjb250ZW50IGhlcmU6XG5cdFx0Ly8gICBnaXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzIxMyNpc3N1ZWNvbW1lbnQtMTE0OTQ5MVxuXHRcdHRlc3RzWydzdmdjbGlwcGF0aHMnXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgJiYgL1NWR0NsaXBQYXRoLy50ZXN0KHRvU3RyaW5nLmNhbGwoZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLnN2ZywgJ2NsaXBQYXRoJykpKTtcblx0XHR9O1xuXG5cdFx0Lyo+PndlYmZvcm1zKi9cblx0XHQvLyBpbnB1dCBmZWF0dXJlcyBhbmQgaW5wdXQgdHlwZXMgZ28gZGlyZWN0bHkgb250byB0aGUgcmV0IG9iamVjdCwgYnlwYXNzaW5nIHRoZSB0ZXN0cyBsb29wLlxuXHRcdC8vIEhvbGQgdGhpcyBndXkgdG8gZXhlY3V0ZSBpbiBhIG1vbWVudC5cblx0XHRmdW5jdGlvbiB3ZWJmb3JtcygpIHtcblx0XHRcdFx0Lyo+PmlucHV0Ki9cblx0XHRcdFx0Ly8gUnVuIHRocm91Z2ggSFRNTDUncyBuZXcgaW5wdXQgYXR0cmlidXRlcyB0byBzZWUgaWYgdGhlIFVBIHVuZGVyc3RhbmRzIGFueS5cblx0XHRcdFx0Ly8gV2UncmUgdXNpbmcgZiB3aGljaCBpcyB0aGUgPGlucHV0PiBlbGVtZW50IGNyZWF0ZWQgZWFybHkgb25cblx0XHRcdFx0Ly8gTWlrZSBUYXlsciBoYXMgY3JlYXRlZCBhIGNvbXByZWhlbnNpdmUgcmVzb3VyY2UgZm9yIHRlc3RpbmcgdGhlc2UgYXR0cmlidXRlc1xuXHRcdFx0XHQvLyAgIHdoZW4gYXBwbGllZCB0byBhbGwgaW5wdXQgdHlwZXM6XG5cdFx0XHRcdC8vICAgbWlrZXRheWxyLmNvbS9jb2RlL2lucHV0LXR5cGUtYXR0ci5odG1sXG5cdFx0XHRcdC8vIHNwZWM6IHd3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvdGhlLWlucHV0LWVsZW1lbnQuaHRtbCNpbnB1dC10eXBlLWF0dHItc3VtbWFyeVxuXG5cdFx0XHRcdC8vIE9ubHkgaW5wdXQgcGxhY2Vob2xkZXIgaXMgdGVzdGVkIHdoaWxlIHRleHRhcmVhJ3MgcGxhY2Vob2xkZXIgaXMgbm90LlxuXHRcdFx0XHQvLyBDdXJyZW50bHkgU2FmYXJpIDQgYW5kIE9wZXJhIDExIGhhdmUgc3VwcG9ydCBvbmx5IGZvciB0aGUgaW5wdXQgcGxhY2Vob2xkZXJcblx0XHRcdFx0Ly8gQm90aCB0ZXN0cyBhcmUgYXZhaWxhYmxlIGluIGZlYXR1cmUtZGV0ZWN0cy9mb3Jtcy1wbGFjZWhvbGRlci5qc1xuXHRcdFx0XHRNb2Rlcm5penJbJ2lucHV0J10gPSAoZnVuY3Rpb24oIHByb3BzICkge1xuXHRcdFx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBsZW4gPSBwcm9wcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRcdFx0XHRhdHRyc1sgcHJvcHNbaV0gXSA9ICEhKHByb3BzW2ldIGluIGlucHV0RWxlbSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoYXR0cnMubGlzdCl7XG5cdFx0XHRcdFx0XHRcdC8vIHNhZmFyaSBmYWxzZSBwb3NpdGl2ZSdzIG9uIGRhdGFsaXN0OiB3ZWJrLml0Lzc0MjUyXG5cdFx0XHRcdFx0XHRcdC8vIHNlZSBhbHNvIGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvMTQ2XG5cdFx0XHRcdFx0XHRcdGF0dHJzLmxpc3QgPSAhIShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpICYmIHdpbmRvdy5IVE1MRGF0YUxpc3RFbGVtZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBhdHRycztcblx0XHRcdFx0fSkoJ2F1dG9jb21wbGV0ZSBhdXRvZm9jdXMgbGlzdCBwbGFjZWhvbGRlciBtYXggbWluIG11bHRpcGxlIHBhdHRlcm4gcmVxdWlyZWQgc3RlcCcuc3BsaXQoJyAnKSk7XG5cdFx0XHRcdC8qPj5pbnB1dCovXG5cblx0XHRcdFx0Lyo+PmlucHV0dHlwZXMqL1xuXHRcdFx0XHQvLyBSdW4gdGhyb3VnaCBIVE1MNSdzIG5ldyBpbnB1dCB0eXBlcyB0byBzZWUgaWYgdGhlIFVBIHVuZGVyc3RhbmRzIGFueS5cblx0XHRcdFx0Ly8gICBUaGlzIGlzIHB1dCBiZWhpbmQgdGhlIHRlc3RzIHJ1bmxvb3AgYmVjYXVzZSBpdCBkb2Vzbid0IHJldHVybiBhXG5cdFx0XHRcdC8vICAgdHJ1ZS9mYWxzZSBsaWtlIGFsbCB0aGUgb3RoZXIgdGVzdHM7IGluc3RlYWQsIGl0IHJldHVybnMgYW4gb2JqZWN0XG5cdFx0XHRcdC8vICAgY29udGFpbmluZyBlYWNoIGlucHV0IHR5cGUgd2l0aCBpdHMgY29ycmVzcG9uZGluZyB0cnVlL2ZhbHNlIHZhbHVlXG5cblx0XHRcdFx0Ly8gQmlnIHRoYW5rcyB0byBAbWlrZXRheWxyIGZvciB0aGUgaHRtbDUgZm9ybXMgZXhwZXJ0aXNlLiBtaWtldGF5bHIuY29tL1xuXHRcdFx0XHRNb2Rlcm5penJbJ2lucHV0dHlwZXMnXSA9IChmdW5jdGlvbihwcm9wcykge1xuXG5cdFx0XHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGJvb2wsIGlucHV0RWxlbVR5cGUsIGRlZmF1bHRWaWV3LCBsZW4gPSBwcm9wcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblxuXHRcdFx0XHRcdFx0XHRcdGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dEVsZW1UeXBlID0gcHJvcHNbaV0pO1xuXHRcdFx0XHRcdFx0XHRcdGJvb2wgPSBpbnB1dEVsZW0udHlwZSAhPT0gJ3RleHQnO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gV2UgZmlyc3QgY2hlY2sgdG8gc2VlIGlmIHRoZSB0eXBlIHdlIGdpdmUgaXQgc3RpY2tzLi5cblx0XHRcdFx0XHRcdFx0XHQvLyBJZiB0aGUgdHlwZSBkb2VzLCB3ZSBmZWVkIGl0IGEgdGV4dHVhbCB2YWx1ZSwgd2hpY2ggc2hvdWxkbid0IGJlIHZhbGlkLlxuXHRcdFx0XHRcdFx0XHRcdC8vIElmIHRoZSB2YWx1ZSBkb2Vzbid0IHN0aWNrLCB3ZSBrbm93IHRoZXJlJ3MgaW5wdXQgc2FuaXRpemF0aW9uIHdoaWNoIGluZmVycyBhIGN1c3RvbSBVSVxuXHRcdFx0XHRcdFx0XHRcdGlmICggYm9vbCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dEVsZW0udmFsdWUgICAgICAgICA9IHNtaWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dEVsZW0uc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjphYnNvbHV0ZTt2aXNpYmlsaXR5OmhpZGRlbjsnO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggL15yYW5nZSQvLnRlc3QoaW5wdXRFbGVtVHlwZSkgJiYgaW5wdXRFbGVtLnN0eWxlLldlYmtpdEFwcGVhcmFuY2UgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmlldyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU2FmYXJpIDItNCBhbGxvd3MgdGhlIHNtaWxleSBhcyBhIHZhbHVlLCBkZXNwaXRlIG1ha2luZyBhIHNsaWRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvb2wgPSAgZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShpbnB1dEVsZW0sIG51bGwpLldlYmtpdEFwcGVhcmFuY2UgIT09ICd0ZXh0ZmllbGQnICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBNb2JpbGUgYW5kcm9pZCB3ZWIgYnJvd3NlciBoYXMgZmFsc2UgcG9zaXRpdmUsIHNvIG11c3Rcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNoZWNrIHRoZSBoZWlnaHQgdG8gc2VlIGlmIHRoZSB3aWRnZXQgaXMgYWN0dWFsbHkgdGhlcmUuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoaW5wdXRFbGVtLm9mZnNldEhlaWdodCAhPT0gMCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2NFbGVtZW50LnJlbW92ZUNoaWxkKGlucHV0RWxlbSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggL14oc2VhcmNofHRlbCkkLy50ZXN0KGlucHV0RWxlbVR5cGUpICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3BlYyBkb2Vzbid0IGRlZmluZSBhbnkgc3BlY2lhbCBwYXJzaW5nIG9yIGRldGVjdGFibGUgVUlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAgIGJlaGF2aW9ycyBzbyB3ZSBwYXNzIHRoZXNlIHRocm91Z2ggYXMgdHJ1ZVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gSW50ZXJlc3RpbmdseSwgb3BlcmEgZmFpbHMgdGhlIGVhcmxpZXIgdGVzdCwgc28gaXQgZG9lc24ndFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vICBldmVuIG1ha2UgaXQgaGVyZS5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCAvXih1cmx8ZW1haWwpJC8udGVzdChpbnB1dEVsZW1UeXBlKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBSZWFsIHVybCBhbmQgZW1haWwgc3VwcG9ydCBjb21lcyB3aXRoIHByZWJha2VkIHZhbGlkYXRpb24uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9vbCA9IGlucHV0RWxlbS5jaGVja1ZhbGlkaXR5ICYmIGlucHV0RWxlbS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlIHVwZ3JhZGVkIGlucHV0IGNvbXBvbnRlbnQgcmVqZWN0cyB0aGUgOikgdGV4dCwgd2UgZ290IGEgd2lubmVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9vbCA9IGlucHV0RWxlbS52YWx1ZSAhPSBzbWlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlucHV0c1sgcHJvcHNbaV0gXSA9ICEhYm9vbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBpbnB1dHM7XG5cdFx0XHRcdH0pKCdzZWFyY2ggdGVsIHVybCBlbWFpbCBkYXRldGltZSBkYXRlIG1vbnRoIHdlZWsgdGltZSBkYXRldGltZS1sb2NhbCBudW1iZXIgcmFuZ2UgY29sb3InLnNwbGl0KCcgJykpO1xuXHRcdFx0XHQvKj4+aW5wdXR0eXBlcyovXG5cdFx0fVxuXHRcdC8qPj53ZWJmb3JtcyovXG5cblxuXHRcdC8vIEVuZCBvZiB0ZXN0IGRlZmluaXRpb25zXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblx0XHQvLyBSdW4gdGhyb3VnaCBhbGwgdGVzdHMgYW5kIGRldGVjdCB0aGVpciBzdXBwb3J0IGluIHRoZSBjdXJyZW50IFVBLlxuXHRcdC8vIHRvZG86IGh5cG90aGV0aWNhbGx5IHdlIGNvdWxkIGJlIGRvaW5nIGFuIGFycmF5IG9mIHRlc3RzIGFuZCB1c2UgYSBiYXNpYyBsb29wIGhlcmUuXG5cdFx0Zm9yICggdmFyIGZlYXR1cmUgaW4gdGVzdHMgKSB7XG5cdFx0XHRcdGlmICggaGFzT3duUHJvcCh0ZXN0cywgZmVhdHVyZSkgKSB7XG5cdFx0XHRcdFx0XHQvLyBydW4gdGhlIHRlc3QsIHRocm93IHRoZSByZXR1cm4gdmFsdWUgaW50byB0aGUgTW9kZXJuaXpyLFxuXHRcdFx0XHRcdFx0Ly8gICB0aGVuIGJhc2VkIG9uIHRoYXQgYm9vbGVhbiwgZGVmaW5lIGFuIGFwcHJvcHJpYXRlIGNsYXNzTmFtZVxuXHRcdFx0XHRcdFx0Ly8gICBhbmQgcHVzaCBpdCBpbnRvIGFuIGFycmF5IG9mIGNsYXNzZXMgd2UnbGwgam9pbiBsYXRlci5cblx0XHRcdFx0XHRcdGZlYXR1cmVOYW1lICA9IGZlYXR1cmUudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRcdE1vZGVybml6cltmZWF0dXJlTmFtZV0gPSB0ZXN0c1tmZWF0dXJlXSgpO1xuXG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goKE1vZGVybml6cltmZWF0dXJlTmFtZV0gPyAnJyA6ICduby0nKSArIGZlYXR1cmVOYW1lKTtcblx0XHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qPj53ZWJmb3JtcyovXG5cdFx0Ly8gaW5wdXQgdGVzdHMgbmVlZCB0byBydW4uXG5cdFx0TW9kZXJuaXpyLmlucHV0IHx8IHdlYmZvcm1zKCk7XG5cdFx0Lyo+PndlYmZvcm1zKi9cblxuXG5cdFx0LyoqXG5cdFx0ICogYWRkVGVzdCBhbGxvd3MgdGhlIHVzZXIgdG8gZGVmaW5lIHRoZWlyIG93biBmZWF0dXJlIHRlc3RzXG5cdFx0ICogdGhlIHJlc3VsdCB3aWxsIGJlIGFkZGVkIG9udG8gdGhlIE1vZGVybml6ciBvYmplY3QsXG5cdFx0ICogYXMgd2VsbCBhcyBhbiBhcHByb3ByaWF0ZSBjbGFzc05hbWUgc2V0IG9uIHRoZSBodG1sIGVsZW1lbnRcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSBmZWF0dXJlIC0gU3RyaW5nIG5hbWluZyB0aGUgZmVhdHVyZVxuXHRcdCAqIEBwYXJhbSB0ZXN0IC0gRnVuY3Rpb24gcmV0dXJuaW5nIHRydWUgaWYgZmVhdHVyZSBpcyBzdXBwb3J0ZWQsIGZhbHNlIGlmIG5vdFxuXHRcdCAqL1xuXHRcdCBNb2Rlcm5penIuYWRkVGVzdCA9IGZ1bmN0aW9uICggZmVhdHVyZSwgdGVzdCApIHtcblx0XHRcdCBpZiAoIHR5cGVvZiBmZWF0dXJlID09ICdvYmplY3QnICkge1xuXHRcdFx0XHQgZm9yICggdmFyIGtleSBpbiBmZWF0dXJlICkge1xuXHRcdFx0XHRcdCBpZiAoIGhhc093blByb3AoIGZlYXR1cmUsIGtleSApICkge1xuXHRcdFx0XHRcdFx0IE1vZGVybml6ci5hZGRUZXN0KCBrZXksIGZlYXR1cmVbIGtleSBdICk7XG5cdFx0XHRcdFx0IH1cblx0XHRcdFx0IH1cblx0XHRcdCB9IGVsc2Uge1xuXG5cdFx0XHRcdCBmZWF0dXJlID0gZmVhdHVyZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRcdCBpZiAoIE1vZGVybml6cltmZWF0dXJlXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdCAvLyB3ZSdyZSBnb2luZyB0byBxdWl0IGlmIHlvdSdyZSB0cnlpbmcgdG8gb3ZlcndyaXRlIGFuIGV4aXN0aW5nIHRlc3Rcblx0XHRcdFx0XHQgLy8gaWYgd2Ugd2VyZSB0byBhbGxvdyBpdCwgd2UnZCBkbyB0aGlzOlxuXHRcdFx0XHRcdCAvLyAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCJcXFxcYihuby0pP1wiICsgZmVhdHVyZSArIFwiXFxcXGJcIik7XG5cdFx0XHRcdFx0IC8vICAgZG9jRWxlbWVudC5jbGFzc05hbWUgPSBkb2NFbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKCByZSwgJycgKTtcblx0XHRcdFx0XHQgLy8gYnV0LCBubyBybHksIHN0dWZmICdlbS5cblx0XHRcdFx0XHQgcmV0dXJuIE1vZGVybml6cjtcblx0XHRcdFx0IH1cblxuXHRcdFx0XHQgdGVzdCA9IHR5cGVvZiB0ZXN0ID09ICdmdW5jdGlvbicgPyB0ZXN0KCkgOiB0ZXN0O1xuXG5cdFx0XHRcdCBpZiAodHlwZW9mIGVuYWJsZUNsYXNzZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgZW5hYmxlQ2xhc3Nlcykge1xuXHRcdFx0XHRcdCBkb2NFbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyAodGVzdCA/ICcnIDogJ25vLScpICsgZmVhdHVyZTtcblx0XHRcdFx0IH1cblx0XHRcdFx0IE1vZGVybml6cltmZWF0dXJlXSA9IHRlc3Q7XG5cblx0XHRcdCB9XG5cblx0XHRcdCByZXR1cm4gTW9kZXJuaXpyOyAvLyBhbGxvdyBjaGFpbmluZy5cblx0XHQgfTtcblxuXG5cdFx0Ly8gUmVzZXQgbW9kRWxlbS5jc3NUZXh0IHRvIG5vdGhpbmcgdG8gcmVkdWNlIG1lbW9yeSBmb290cHJpbnQuXG5cdFx0c2V0Q3NzKCcnKTtcblx0XHRtb2RFbGVtID0gaW5wdXRFbGVtID0gbnVsbDtcblxuXHRcdC8qPj5zaGl2Ki9cblx0XHQvKipcblx0XHQgKiBAcHJlc2VydmUgSFRNTDUgU2hpdiBwcmV2My43LjEgfCBAYWZhcmthcyBAamRhbHRvbiBAam9uX25lYWwgQHJlbSB8IE1JVC9HUEwyIExpY2Vuc2VkXG5cdFx0ICovXG5cdFx0OyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50KSB7XG5cdFx0XHRcdC8qanNoaW50IGV2aWw6dHJ1ZSAqL1xuXHRcdFx0XHQvKiogdmVyc2lvbiAqL1xuXHRcdFx0XHR2YXIgdmVyc2lvbiA9ICczLjcuMCc7XG5cblx0XHRcdFx0LyoqIFByZXNldCBvcHRpb25zICovXG5cdFx0XHRcdHZhciBvcHRpb25zID0gd2luZG93Lmh0bWw1IHx8IHt9O1xuXG5cdFx0XHRcdC8qKiBVc2VkIHRvIHNraXAgcHJvYmxlbSBlbGVtZW50cyAqL1xuXHRcdFx0XHR2YXIgcmVTa2lwID0gL148fF4oPzpidXR0b258bWFwfHNlbGVjdHx0ZXh0YXJlYXxvYmplY3R8aWZyYW1lfG9wdGlvbnxvcHRncm91cCkkL2k7XG5cblx0XHRcdFx0LyoqIE5vdCBhbGwgZWxlbWVudHMgY2FuIGJlIGNsb25lZCBpbiBJRSAqKi9cblx0XHRcdFx0dmFyIHNhdmVDbG9uZXMgPSAvXig/OmF8Ynxjb2RlfGRpdnxmaWVsZHNldHxoMXxoMnxoM3xoNHxoNXxoNnxpfGxhYmVsfGxpfG9sfHB8cXxzcGFufHN0cm9uZ3xzdHlsZXx0YWJsZXx0Ym9keXx0ZHx0aHx0cnx1bCkkL2k7XG5cblx0XHRcdFx0LyoqIERldGVjdCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIGRlZmF1bHQgaHRtbDUgc3R5bGVzICovXG5cdFx0XHRcdHZhciBzdXBwb3J0c0h0bWw1U3R5bGVzO1xuXG5cdFx0XHRcdC8qKiBOYW1lIG9mIHRoZSBleHBhbmRvLCB0byB3b3JrIHdpdGggbXVsdGlwbGUgZG9jdW1lbnRzIG9yIHRvIHJlLXNoaXYgb25lIGRvY3VtZW50ICovXG5cdFx0XHRcdHZhciBleHBhbmRvID0gJ19odG1sNXNoaXYnO1xuXG5cdFx0XHRcdC8qKiBUaGUgaWQgZm9yIHRoZSB0aGUgZG9jdW1lbnRzIGV4cGFuZG8gKi9cblx0XHRcdFx0dmFyIGV4cGFuSUQgPSAwO1xuXG5cdFx0XHRcdC8qKiBDYWNoZWQgZGF0YSBmb3IgZWFjaCBkb2N1bWVudCAqL1xuXHRcdFx0XHR2YXIgZXhwYW5kb0RhdGEgPSB7fTtcblxuXHRcdFx0XHQvKiogRGV0ZWN0IHdoZXRoZXIgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdW5rbm93biBlbGVtZW50cyAqL1xuXHRcdFx0XHR2YXIgc3VwcG9ydHNVbmtub3duRWxlbWVudHM7XG5cblx0XHRcdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0XHRcdGEuaW5uZXJIVE1MID0gJzx4eXo+PC94eXo+Jztcblx0XHRcdFx0XHRcdC8vaWYgdGhlIGhpZGRlbiBwcm9wZXJ0eSBpcyBpbXBsZW1lbnRlZCB3ZSBjYW4gYXNzdW1lLCB0aGF0IHRoZSBicm93c2VyIHN1cHBvcnRzIGJhc2ljIEhUTUw1IFN0eWxlc1xuXHRcdFx0XHRcdFx0c3VwcG9ydHNIdG1sNVN0eWxlcyA9ICgnaGlkZGVuJyBpbiBhKTtcblxuXHRcdFx0XHRcdFx0c3VwcG9ydHNVbmtub3duRWxlbWVudHMgPSBhLmNoaWxkTm9kZXMubGVuZ3RoID09IDEgfHwgKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQvLyBhc3NpZ24gYSBmYWxzZSBwb3NpdGl2ZSBpZiB1bmFibGUgdG8gc2hpdlxuXHRcdFx0XHRcdFx0XHQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkoJ2EnKTtcblx0XHRcdFx0XHRcdFx0dmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0dHlwZW9mIGZyYWcuY2xvbmVOb2RlID09ICd1bmRlZmluZWQnIHx8XG5cdFx0XHRcdFx0XHRcdFx0dHlwZW9mIGZyYWcuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCA9PSAndW5kZWZpbmVkJyB8fFxuXHRcdFx0XHRcdFx0XHRcdHR5cGVvZiBmcmFnLmNyZWF0ZUVsZW1lbnQgPT0gJ3VuZGVmaW5lZCdcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0oKSk7XG5cdFx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0XHQvLyBhc3NpZ24gYSBmYWxzZSBwb3NpdGl2ZSBpZiBkZXRlY3Rpb24gZmFpbHMgPT4gdW5hYmxlIHRvIHNoaXZcblx0XHRcdFx0XHRcdHN1cHBvcnRzSHRtbDVTdHlsZXMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0c3VwcG9ydHNVbmtub3duRWxlbWVudHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KCkpO1xuXG5cdFx0XHRcdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBDcmVhdGVzIGEgc3R5bGUgc2hlZXQgd2l0aCB0aGUgZ2l2ZW4gQ1NTIHRleHQgYW5kIGFkZHMgaXQgdG8gdGhlIGRvY3VtZW50LlxuXHRcdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0XHQgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBkb2N1bWVudC5cblx0XHRcdFx0ICogQHBhcmFtIHtTdHJpbmd9IGNzc1RleHQgVGhlIENTUyB0ZXh0LlxuXHRcdFx0XHQgKiBAcmV0dXJucyB7U3R5bGVTaGVldH0gVGhlIHN0eWxlIGVsZW1lbnQuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRmdW5jdGlvbiBhZGRTdHlsZVNoZWV0KG93bmVyRG9jdW1lbnQsIGNzc1RleHQpIHtcblx0XHRcdFx0XHR2YXIgcCA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuXHRcdFx0XHRcdHBhcmVudCA9IG93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSB8fCBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXHRcdFx0XHRcdHAuaW5uZXJIVE1MID0gJ3g8c3R5bGU+JyArIGNzc1RleHQgKyAnPC9zdHlsZT4nO1xuXHRcdFx0XHRcdHJldHVybiBwYXJlbnQuaW5zZXJ0QmVmb3JlKHAubGFzdENoaWxkLCBwYXJlbnQuZmlyc3RDaGlsZCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYGh0bWw1LmVsZW1lbnRzYCBhcyBhbiBhcnJheS5cblx0XHRcdFx0ICogQHByaXZhdGVcblx0XHRcdFx0ICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSBvZiBzaGl2ZWQgZWxlbWVudCBub2RlIG5hbWVzLlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0ZnVuY3Rpb24gZ2V0RWxlbWVudHMoKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW1lbnRzID0gaHRtbDUuZWxlbWVudHM7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBlbGVtZW50cyA9PSAnc3RyaW5nJyA/IGVsZW1lbnRzLnNwbGl0KCcgJykgOiBlbGVtZW50cztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBSZXR1cm5zIHRoZSBkYXRhIGFzc29jaWF0ZWQgdG8gdGhlIGdpdmVuIGRvY3VtZW50XG5cdFx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHRcdCAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50LlxuXHRcdFx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3Qgb2YgZGF0YS5cblx0XHRcdFx0ICovXG5cdFx0XHRcdGZ1bmN0aW9uIGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpIHtcblx0XHRcdFx0XHR2YXIgZGF0YSA9IGV4cGFuZG9EYXRhW293bmVyRG9jdW1lbnRbZXhwYW5kb11dO1xuXHRcdFx0XHRcdGlmICghZGF0YSkge1xuXHRcdFx0XHRcdFx0ZGF0YSA9IHt9O1xuXHRcdFx0XHRcdFx0ZXhwYW5JRCsrO1xuXHRcdFx0XHRcdFx0b3duZXJEb2N1bWVudFtleHBhbmRvXSA9IGV4cGFuSUQ7XG5cdFx0XHRcdFx0XHRleHBhbmRvRGF0YVtleHBhbklEXSA9IGRhdGE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIHJldHVybnMgYSBzaGl2ZWQgZWxlbWVudCBmb3IgdGhlIGdpdmVuIG5vZGVOYW1lIGFuZCBkb2N1bWVudFxuXHRcdFx0XHQgKiBAbWVtYmVyT2YgaHRtbDVcblx0XHRcdFx0ICogQHBhcmFtIHtTdHJpbmd9IG5vZGVOYW1lIG5hbWUgb2YgdGhlIGVsZW1lbnRcblx0XHRcdFx0ICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgY29udGV4dCBkb2N1bWVudC5cblx0XHRcdFx0ICogQHJldHVybnMge09iamVjdH0gVGhlIHNoaXZlZCBlbGVtZW50LlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0ZnVuY3Rpb24gY3JlYXRlRWxlbWVudChub2RlTmFtZSwgb3duZXJEb2N1bWVudCwgZGF0YSl7XG5cdFx0XHRcdFx0aWYgKCFvd25lckRvY3VtZW50KSB7XG5cdFx0XHRcdFx0XHRvd25lckRvY3VtZW50ID0gZG9jdW1lbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzKXtcblx0XHRcdFx0XHRcdHJldHVybiBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWRhdGEpIHtcblx0XHRcdFx0XHRcdGRhdGEgPSBnZXRFeHBhbmRvRGF0YShvd25lckRvY3VtZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIG5vZGU7XG5cblx0XHRcdFx0XHRpZiAoZGF0YS5jYWNoZVtub2RlTmFtZV0pIHtcblx0XHRcdFx0XHRcdG5vZGUgPSBkYXRhLmNhY2hlW25vZGVOYW1lXS5jbG9uZU5vZGUoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNhdmVDbG9uZXMudGVzdChub2RlTmFtZSkpIHtcblx0XHRcdFx0XHRcdG5vZGUgPSAoZGF0YS5jYWNoZVtub2RlTmFtZV0gPSBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpKS5jbG9uZU5vZGUoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bm9kZSA9IGRhdGEuY3JlYXRlRWxlbShub2RlTmFtZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQXZvaWQgYWRkaW5nIHNvbWUgZWxlbWVudHMgdG8gZnJhZ21lbnRzIGluIElFIDwgOSBiZWNhdXNlXG5cdFx0XHRcdFx0Ly8gKiBBdHRyaWJ1dGVzIGxpa2UgYG5hbWVgIG9yIGB0eXBlYCBjYW5ub3QgYmUgc2V0L2NoYW5nZWQgb25jZSBhbiBlbGVtZW50XG5cdFx0XHRcdFx0Ly8gICBpcyBpbnNlcnRlZCBpbnRvIGEgZG9jdW1lbnQvZnJhZ21lbnRcblx0XHRcdFx0XHQvLyAqIExpbmsgZWxlbWVudHMgd2l0aCBgc3JjYCBhdHRyaWJ1dGVzIHRoYXQgYXJlIGluYWNjZXNzaWJsZSwgYXMgd2l0aFxuXHRcdFx0XHRcdC8vICAgYSA0MDMgcmVzcG9uc2UsIHdpbGwgY2F1c2UgdGhlIHRhYi93aW5kb3cgdG8gY3Jhc2hcblx0XHRcdFx0XHQvLyAqIFNjcmlwdCBlbGVtZW50cyBhcHBlbmRlZCB0byBmcmFnbWVudHMgd2lsbCBleGVjdXRlIHdoZW4gdGhlaXIgYHNyY2Bcblx0XHRcdFx0XHQvLyAgIG9yIGB0ZXh0YCBwcm9wZXJ0eSBpcyBzZXRcblx0XHRcdFx0XHRyZXR1cm4gbm9kZS5jYW5IYXZlQ2hpbGRyZW4gJiYgIXJlU2tpcC50ZXN0KG5vZGVOYW1lKSAmJiAhbm9kZS50YWdVcm4gPyBkYXRhLmZyYWcuYXBwZW5kQ2hpbGQobm9kZSkgOiBub2RlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIHJldHVybnMgYSBzaGl2ZWQgRG9jdW1lbnRGcmFnbWVudCBmb3IgdGhlIGdpdmVuIGRvY3VtZW50XG5cdFx0XHRcdCAqIEBtZW1iZXJPZiBodG1sNVxuXHRcdFx0XHQgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBjb250ZXh0IGRvY3VtZW50LlxuXHRcdFx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2hpdmVkIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRmdW5jdGlvbiBjcmVhdGVEb2N1bWVudEZyYWdtZW50KG93bmVyRG9jdW1lbnQsIGRhdGEpe1xuXHRcdFx0XHRcdGlmICghb3duZXJEb2N1bWVudCkge1xuXHRcdFx0XHRcdFx0b3duZXJEb2N1bWVudCA9IGRvY3VtZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihzdXBwb3J0c1Vua25vd25FbGVtZW50cyl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRhdGEgPSBkYXRhIHx8IGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpO1xuXHRcdFx0XHRcdHZhciBjbG9uZSA9IGRhdGEuZnJhZy5jbG9uZU5vZGUoKSxcblx0XHRcdFx0XHRpID0gMCxcblx0XHRcdFx0XHRlbGVtcyA9IGdldEVsZW1lbnRzKCksXG5cdFx0XHRcdFx0bCA9IGVsZW1zLmxlbmd0aDtcblx0XHRcdFx0XHRmb3IoO2k8bDtpKyspe1xuXHRcdFx0XHRcdFx0Y2xvbmUuY3JlYXRlRWxlbWVudChlbGVtc1tpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjbG9uZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBTaGl2cyB0aGUgYGNyZWF0ZUVsZW1lbnRgIGFuZCBgY3JlYXRlRG9jdW1lbnRGcmFnbWVudGAgbWV0aG9kcyBvZiB0aGUgZG9jdW1lbnQuXG5cdFx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHRcdCAqIEBwYXJhbSB7RG9jdW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXG5cdFx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIG9mIHRoZSBkb2N1bWVudC5cblx0XHRcdFx0ICovXG5cdFx0XHRcdGZ1bmN0aW9uIHNoaXZNZXRob2RzKG93bmVyRG9jdW1lbnQsIGRhdGEpIHtcblx0XHRcdFx0XHRpZiAoIWRhdGEuY2FjaGUpIHtcblx0XHRcdFx0XHRcdGRhdGEuY2FjaGUgPSB7fTtcblx0XHRcdFx0XHRcdGRhdGEuY3JlYXRlRWxlbSA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudDtcblx0XHRcdFx0XHRcdGRhdGEuY3JlYXRlRnJhZyA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudDtcblx0XHRcdFx0XHRcdGRhdGEuZnJhZyA9IGRhdGEuY3JlYXRlRnJhZygpO1xuXHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0b3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24obm9kZU5hbWUpIHtcblx0XHRcdFx0XHRcdC8vYWJvcnQgc2hpdlxuXHRcdFx0XHRcdFx0aWYgKCFodG1sNS5zaGl2TWV0aG9kcykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZGF0YS5jcmVhdGVFbGVtKG5vZGVOYW1lKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBjcmVhdGVFbGVtZW50KG5vZGVOYW1lLCBvd25lckRvY3VtZW50LCBkYXRhKTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0b3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gRnVuY3Rpb24oJ2gsZicsICdyZXR1cm4gZnVuY3Rpb24oKXsnICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndmFyIG49Zi5jbG9uZU5vZGUoKSxjPW4uY3JlYXRlRWxlbWVudDsnICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaC5zaGl2TWV0aG9kcyYmKCcgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHVucm9sbCB0aGUgYGNyZWF0ZUVsZW1lbnRgIGNhbGxzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2V0RWxlbWVudHMoKS5qb2luKCkucmVwbGFjZSgvW1xcd1xcLV0rL2csIGZ1bmN0aW9uKG5vZGVOYW1lKSB7XG5cdFx0XHRcdFx0XHRkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpO1xuXHRcdFx0XHRcdFx0ZGF0YS5mcmFnLmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuXHRcdFx0XHRcdFx0cmV0dXJuICdjKFwiJyArIG5vZGVOYW1lICsgJ1wiKSc7XG5cdFx0XHRcdFx0fSkgK1xuXHRcdFx0XHRcdFx0Jyk7cmV0dXJuIG59J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKShodG1sNSwgZGF0YS5mcmFnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBTaGl2cyB0aGUgZ2l2ZW4gZG9jdW1lbnQuXG5cdFx0XHRcdCAqIEBtZW1iZXJPZiBodG1sNVxuXHRcdFx0XHQgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBkb2N1bWVudCB0byBzaGl2LlxuXHRcdFx0XHQgKiBAcmV0dXJucyB7RG9jdW1lbnR9IFRoZSBzaGl2ZWQgZG9jdW1lbnQuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRmdW5jdGlvbiBzaGl2RG9jdW1lbnQob3duZXJEb2N1bWVudCkge1xuXHRcdFx0XHRcdGlmICghb3duZXJEb2N1bWVudCkge1xuXHRcdFx0XHRcdFx0b3duZXJEb2N1bWVudCA9IGRvY3VtZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgZGF0YSA9IGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpO1xuXG5cdFx0XHRcdFx0aWYgKGh0bWw1LnNoaXZDU1MgJiYgIXN1cHBvcnRzSHRtbDVTdHlsZXMgJiYgIWRhdGEuaGFzQ1NTKSB7XG5cdFx0XHRcdFx0XHRkYXRhLmhhc0NTUyA9ICEhYWRkU3R5bGVTaGVldChvd25lckRvY3VtZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29ycmVjdHMgYmxvY2sgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRTYvNy84Lzlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdhcnRpY2xlLGFzaWRlLGRpYWxvZyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9JyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFkZHMgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRTYvNy84Lzlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J21hcmt7YmFja2dyb3VuZDojRkYwO2NvbG9yOiMwMDB9JyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGhpZGVzIG5vbi1yZW5kZXJlZCBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndGVtcGxhdGV7ZGlzcGxheTpub25lfSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFzdXBwb3J0c1Vua25vd25FbGVtZW50cykge1xuXHRcdFx0XHRcdFx0c2hpdk1ldGhvZHMob3duZXJEb2N1bWVudCwgZGF0YSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBvd25lckRvY3VtZW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIFRoZSBgaHRtbDVgIG9iamVjdCBpcyBleHBvc2VkIHNvIHRoYXQgbW9yZSBlbGVtZW50cyBjYW4gYmUgc2hpdmVkIGFuZFxuXHRcdFx0XHQgKiBleGlzdGluZyBzaGl2aW5nIGNhbiBiZSBkZXRlY3RlZCBvbiBpZnJhbWVzLlxuXHRcdFx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdFx0ICpcblx0XHRcdFx0ICogLy8gb3B0aW9ucyBjYW4gYmUgY2hhbmdlZCBiZWZvcmUgdGhlIHNjcmlwdCBpcyBpbmNsdWRlZFxuXHRcdFx0XHQgKiBodG1sNSA9IHsgJ2VsZW1lbnRzJzogJ21hcmsgc2VjdGlvbicsICdzaGl2Q1NTJzogZmFsc2UsICdzaGl2TWV0aG9kcyc6IGZhbHNlIH07XG5cdFx0XHRcdCAqL1xuXHRcdFx0XHR2YXIgaHRtbDUgPSB7XG5cblx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHQgKiBBbiBhcnJheSBvciBzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nIG9mIG5vZGUgbmFtZXMgb2YgdGhlIGVsZW1lbnRzIHRvIHNoaXYuXG5cdFx0XHRcdFx0ICogQG1lbWJlck9mIGh0bWw1XG5cdFx0XHRcdFx0ICogQHR5cGUgQXJyYXl8U3RyaW5nXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0J2VsZW1lbnRzJzogb3B0aW9ucy5lbGVtZW50cyB8fCAnYWJiciBhcnRpY2xlIGFzaWRlIGF1ZGlvIGJkaSBjYW52YXMgZGF0YSBkYXRhbGlzdCBkZXRhaWxzIGRpYWxvZyBmaWdjYXB0aW9uIGZpZ3VyZSBmb290ZXIgaGVhZGVyIGhncm91cCBtYWluIG1hcmsgbWV0ZXIgbmF2IG91dHB1dCBwcm9ncmVzcyBzZWN0aW9uIHN1bW1hcnkgdGVtcGxhdGUgdGltZSB2aWRlbycsXG5cblx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHQgKiBjdXJyZW50IHZlcnNpb24gb2YgaHRtbDVzaGl2XG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0J3ZlcnNpb24nOiB2ZXJzaW9uLFxuXG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogQSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIEhUTUw1IHN0eWxlIHNoZWV0IHNob3VsZCBiZSBpbnNlcnRlZC5cblx0XHRcdFx0XHQgKiBAbWVtYmVyT2YgaHRtbDVcblx0XHRcdFx0XHQgKiBAdHlwZSBCb29sZWFuXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0J3NoaXZDU1MnOiAob3B0aW9ucy5zaGl2Q1NTICE9PSBmYWxzZSksXG5cblx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHQgKiBJcyBlcXVhbCB0byB0cnVlIGlmIGEgYnJvd3NlciBzdXBwb3J0cyBjcmVhdGluZyB1bmtub3duL0hUTUw1IGVsZW1lbnRzXG5cdFx0XHRcdFx0ICogQG1lbWJlck9mIGh0bWw1XG5cdFx0XHRcdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdCdzdXBwb3J0c1Vua25vd25FbGVtZW50cyc6IHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzLFxuXG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogQSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIGRvY3VtZW50J3MgYGNyZWF0ZUVsZW1lbnRgIGFuZCBgY3JlYXRlRG9jdW1lbnRGcmFnbWVudGBcblx0XHRcdFx0XHQgKiBtZXRob2RzIHNob3VsZCBiZSBvdmVyd3JpdHRlbi5cblx0XHRcdFx0XHQgKiBAbWVtYmVyT2YgaHRtbDVcblx0XHRcdFx0XHQgKiBAdHlwZSBCb29sZWFuXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0J3NoaXZNZXRob2RzJzogKG9wdGlvbnMuc2hpdk1ldGhvZHMgIT09IGZhbHNlKSxcblxuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdCAqIEEgc3RyaW5nIHRvIGRlc2NyaWJlIHRoZSB0eXBlIG9mIGBodG1sNWAgb2JqZWN0IChcImRlZmF1bHRcIiBvciBcImRlZmF1bHQgcHJpbnRcIikuXG5cdFx0XHRcdFx0ICogQG1lbWJlck9mIGh0bWw1XG5cdFx0XHRcdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0J3R5cGUnOiAnZGVmYXVsdCcsXG5cblx0XHRcdFx0XHQvLyBzaGl2cyB0aGUgZG9jdW1lbnQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgYGh0bWw1YCBvYmplY3Qgb3B0aW9uc1xuXHRcdFx0XHRcdCdzaGl2RG9jdW1lbnQnOiBzaGl2RG9jdW1lbnQsXG5cblx0XHRcdFx0XHQvL2NyZWF0ZXMgYSBzaGl2ZWQgZWxlbWVudFxuXHRcdFx0XHRcdGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnQsXG5cblx0XHRcdFx0XHQvL2NyZWF0ZXMgYSBzaGl2ZWQgZG9jdW1lbnRGcmFnbWVudFxuXHRcdFx0XHRcdGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6IGNyZWF0ZURvY3VtZW50RnJhZ21lbnRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHRcdFx0XHQvLyBleHBvc2UgaHRtbDVcblx0XHRcdFx0d2luZG93Lmh0bWw1ID0gaHRtbDU7XG5cblx0XHRcdFx0Ly8gc2hpdiB0aGUgZG9jdW1lbnRcblx0XHRcdFx0c2hpdkRvY3VtZW50KGRvY3VtZW50KTtcblxuXHRcdH0odGhpcywgZG9jdW1lbnQpKTtcblx0XHQvKj4+c2hpdiovXG5cblx0XHQvLyBBc3NpZ24gcHJpdmF0ZSBwcm9wZXJ0aWVzIHRvIHRoZSByZXR1cm4gb2JqZWN0IHdpdGggcHJlZml4XG5cdFx0TW9kZXJuaXpyLl92ZXJzaW9uICAgICAgPSB2ZXJzaW9uO1xuXG5cdFx0Ly8gZXhwb3NlIHRoZXNlIGZvciB0aGUgcGx1Z2luIEFQSS4gTG9vayBpbiB0aGUgc291cmNlIGZvciBob3cgdG8gam9pbigpIHRoZW0gYWdhaW5zdCB5b3VyIGlucHV0XG5cdFx0Lyo+PnByZWZpeGVzKi9cblx0XHRNb2Rlcm5penIuX3ByZWZpeGVzICAgICA9IHByZWZpeGVzO1xuXHRcdC8qPj5wcmVmaXhlcyovXG5cdFx0Lyo+PmRvbXByZWZpeGVzKi9cblx0XHRNb2Rlcm5penIuX2RvbVByZWZpeGVzICA9IGRvbVByZWZpeGVzO1xuXHRcdE1vZGVybml6ci5fY3Nzb21QcmVmaXhlcyAgPSBjc3NvbVByZWZpeGVzO1xuXHRcdC8qPj5kb21wcmVmaXhlcyovXG5cblx0XHQvKj4+bXEqL1xuXHRcdC8vIE1vZGVybml6ci5tcSB0ZXN0cyBhIGdpdmVuIG1lZGlhIHF1ZXJ5LCBsaXZlIGFnYWluc3QgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHdpbmRvd1xuXHRcdC8vIEEgZmV3IGltcG9ydGFudCBub3Rlczpcblx0XHQvLyAgICogSWYgYSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgbWVkaWEgcXVlcmllcyBhdCBhbGwgKGVnLiBvbGRJRSkgdGhlIG1xKCkgd2lsbCBhbHdheXMgcmV0dXJuIGZhbHNlXG5cdFx0Ly8gICAqIEEgbWF4LXdpZHRoIG9yIG9yaWVudGF0aW9uIHF1ZXJ5IHdpbGwgYmUgZXZhbHVhdGVkIGFnYWluc3QgdGhlIGN1cnJlbnQgc3RhdGUsIHdoaWNoIG1heSBjaGFuZ2UgbGF0ZXIuXG5cdFx0Ly8gICAqIFlvdSBtdXN0IHNwZWNpZnkgdmFsdWVzLiBFZy4gSWYgeW91IGFyZSB0ZXN0aW5nIHN1cHBvcnQgZm9yIHRoZSBtaW4td2lkdGggbWVkaWEgcXVlcnkgdXNlOlxuXHRcdC8vICAgICAgIE1vZGVybml6ci5tcSgnKG1pbi13aWR0aDowKScpXG5cdFx0Ly8gdXNhZ2U6XG5cdFx0Ly8gTW9kZXJuaXpyLm1xKCdvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjgpJylcblx0XHRNb2Rlcm5penIubXEgICAgICAgICAgICA9IHRlc3RNZWRpYVF1ZXJ5O1xuXHRcdC8qPj5tcSovXG5cblx0XHQvKj4+aGFzZXZlbnQqL1xuXHRcdC8vIE1vZGVybml6ci5oYXNFdmVudCgpIGRldGVjdHMgc3VwcG9ydCBmb3IgYSBnaXZlbiBldmVudCwgd2l0aCBhbiBvcHRpb25hbCBlbGVtZW50IHRvIHRlc3Qgb25cblx0XHQvLyBNb2Rlcm5penIuaGFzRXZlbnQoJ2dlc3R1cmVzdGFydCcsIGVsZW0pXG5cdFx0TW9kZXJuaXpyLmhhc0V2ZW50ICAgICAgPSBpc0V2ZW50U3VwcG9ydGVkO1xuXHRcdC8qPj5oYXNldmVudCovXG5cblx0XHQvKj4+dGVzdHByb3AqL1xuXHRcdC8vIE1vZGVybml6ci50ZXN0UHJvcCgpIGludmVzdGlnYXRlcyB3aGV0aGVyIGEgZ2l2ZW4gc3R5bGUgcHJvcGVydHkgaXMgcmVjb2duaXplZFxuXHRcdC8vIE5vdGUgdGhhdCB0aGUgcHJvcGVydHkgbmFtZXMgbXVzdCBiZSBwcm92aWRlZCBpbiB0aGUgY2FtZWxDYXNlIHZhcmlhbnQuXG5cdFx0Ly8gTW9kZXJuaXpyLnRlc3RQcm9wKCdwb2ludGVyRXZlbnRzJylcblx0XHRNb2Rlcm5penIudGVzdFByb3AgICAgICA9IGZ1bmN0aW9uKHByb3Ape1xuXHRcdFx0XHRyZXR1cm4gdGVzdFByb3BzKFtwcm9wXSk7XG5cdFx0fTtcblx0XHQvKj4+dGVzdHByb3AqL1xuXG5cdFx0Lyo+PnRlc3RhbGxwcm9wcyovXG5cdFx0Ly8gTW9kZXJuaXpyLnRlc3RBbGxQcm9wcygpIGludmVzdGlnYXRlcyB3aGV0aGVyIGEgZ2l2ZW4gc3R5bGUgcHJvcGVydHksXG5cdFx0Ly8gICBvciBhbnkgb2YgaXRzIHZlbmRvci1wcmVmaXhlZCB2YXJpYW50cywgaXMgcmVjb2duaXplZFxuXHRcdC8vIE5vdGUgdGhhdCB0aGUgcHJvcGVydHkgbmFtZXMgbXVzdCBiZSBwcm92aWRlZCBpbiB0aGUgY2FtZWxDYXNlIHZhcmlhbnQuXG5cdFx0Ly8gTW9kZXJuaXpyLnRlc3RBbGxQcm9wcygnYm94U2l6aW5nJylcblx0XHRNb2Rlcm5penIudGVzdEFsbFByb3BzICA9IHRlc3RQcm9wc0FsbDtcblx0XHQvKj4+dGVzdGFsbHByb3BzKi9cblxuXG5cdFx0Lyo+PnRlc3RzdHlsZXMqL1xuXHRcdC8vIE1vZGVybml6ci50ZXN0U3R5bGVzKCkgYWxsb3dzIHlvdSB0byBhZGQgY3VzdG9tIHN0eWxlcyB0byB0aGUgZG9jdW1lbnQgYW5kIHRlc3QgYW4gZWxlbWVudCBhZnRlcndhcmRzXG5cdFx0Ly8gTW9kZXJuaXpyLnRlc3RTdHlsZXMoJyNtb2Rlcm5penIgeyBwb3NpdGlvbjphYnNvbHV0ZSB9JywgZnVuY3Rpb24oZWxlbSwgcnVsZSl7IC4uLiB9KVxuXHRcdE1vZGVybml6ci50ZXN0U3R5bGVzICAgID0gaW5qZWN0RWxlbWVudFdpdGhTdHlsZXM7XG5cdFx0Lyo+PnRlc3RzdHlsZXMqL1xuXG5cblx0XHQvKj4+cHJlZml4ZWQqL1xuXHRcdC8vIE1vZGVybml6ci5wcmVmaXhlZCgpIHJldHVybnMgdGhlIHByZWZpeGVkIG9yIG5vbnByZWZpeGVkIHByb3BlcnR5IG5hbWUgdmFyaWFudCBvZiB5b3VyIGlucHV0XG5cdFx0Ly8gTW9kZXJuaXpyLnByZWZpeGVkKCdib3hTaXppbmcnKSAvLyAnTW96Qm94U2l6aW5nJ1xuXG5cdFx0Ly8gUHJvcGVydGllcyBtdXN0IGJlIHBhc3NlZCBhcyBkb20tc3R5bGUgY2FtZWxjYXNlLCByYXRoZXIgdGhhbiBgYm94LXNpemluZ2AgaHlwZW50YXRlZCBzdHlsZS5cblx0XHQvLyBSZXR1cm4gdmFsdWVzIHdpbGwgYWxzbyBiZSB0aGUgY2FtZWxDYXNlIHZhcmlhbnQsIGlmIHlvdSBuZWVkIHRvIHRyYW5zbGF0ZSB0aGF0IHRvIGh5cGVuYXRlZCBzdHlsZSB1c2U6XG5cdFx0Ly9cblx0XHQvLyAgICAgc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oc3RyLG0xKXsgcmV0dXJuICctJyArIG0xLnRvTG93ZXJDYXNlKCk7IH0pLnJlcGxhY2UoL15tcy0vLCctbXMtJyk7XG5cblx0XHQvLyBJZiB5b3UncmUgdHJ5aW5nIHRvIGFzY2VydGFpbiB3aGljaCB0cmFuc2l0aW9uIGVuZCBldmVudCB0byBiaW5kIHRvLCB5b3UgbWlnaHQgZG8gc29tZXRoaW5nIGxpa2UuLi5cblx0XHQvL1xuXHRcdC8vICAgICB2YXIgdHJhbnNFbmRFdmVudE5hbWVzID0ge1xuXHRcdC8vICAgICAgICdXZWJraXRUcmFuc2l0aW9uJyA6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcblx0XHQvLyAgICAgICAnTW96VHJhbnNpdGlvbicgICAgOiAndHJhbnNpdGlvbmVuZCcsXG5cdFx0Ly8gICAgICAgJ09UcmFuc2l0aW9uJyAgICAgIDogJ29UcmFuc2l0aW9uRW5kJyxcblx0XHQvLyAgICAgICAnbXNUcmFuc2l0aW9uJyAgICAgOiAnTVNUcmFuc2l0aW9uRW5kJyxcblx0XHQvLyAgICAgICAndHJhbnNpdGlvbicgICAgICAgOiAndHJhbnNpdGlvbmVuZCdcblx0XHQvLyAgICAgfSxcblx0XHQvLyAgICAgdHJhbnNFbmRFdmVudE5hbWUgPSB0cmFuc0VuZEV2ZW50TmFtZXNbIE1vZGVybml6ci5wcmVmaXhlZCgndHJhbnNpdGlvbicpIF07XG5cblx0XHRNb2Rlcm5penIucHJlZml4ZWQgICAgICA9IGZ1bmN0aW9uKHByb3AsIG9iaiwgZWxlbSl7XG5cdFx0XHRpZighb2JqKSB7XG5cdFx0XHRcdHJldHVybiB0ZXN0UHJvcHNBbGwocHJvcCwgJ3BmeCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gVGVzdGluZyBET00gcHJvcGVydHkgZS5nLiBNb2Rlcm5penIucHJlZml4ZWQoJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsIHdpbmRvdykgLy8gJ21velJlcXVlc3RBbmltYXRpb25GcmFtZSdcblx0XHRcdFx0cmV0dXJuIHRlc3RQcm9wc0FsbChwcm9wLCBvYmosIGVsZW0pO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Lyo+PnByZWZpeGVkKi9cblxuXG5cdFx0Lyo+PmNzc2NsYXNzZXMqL1xuXHRcdC8vIFJlbW92ZSBcIm5vLWpzXCIgY2xhc3MgZnJvbSA8aHRtbD4gZWxlbWVudCwgaWYgaXQgZXhpc3RzOlxuXHRcdGRvY0VsZW1lbnQuY2xhc3NOYW1lID0gZG9jRWxlbWVudC5jbGFzc05hbWUucmVwbGFjZSgvKF58XFxzKW5vLWpzKFxcc3wkKS8sICckMSQyJykgK1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQWRkIHRoZSBuZXcgY2xhc3NlcyB0byB0aGUgPGh0bWw+IGVsZW1lbnQuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGVuYWJsZUNsYXNzZXMgPyAnIGpzICcgKyBjbGFzc2VzLmpvaW4oJyAnKSA6ICcnKTtcblx0XHQvKj4+Y3NzY2xhc3NlcyovXG5cblx0XHRyZXR1cm4gTW9kZXJuaXpyO1xuXG59KSh0aGlzLCB0aGlzLmRvY3VtZW50KTsiXSwiZmlsZSI6Im1vZGVybml6ci5qcyJ9
