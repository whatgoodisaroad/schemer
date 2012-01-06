JQuery.schemer.js plug-in
===============================

For my portfolio site redesign, I wanted to randomly select and display one of several color schemes each time a page was loaded. So I wrote this JQuery script. The script will, given a variable number of string arguments which are CSS class names, choose one at random and attach it to the `<html>` page element.  The styling you defined in your CSS class will then take effect, changing the design scheme for the page.

Along the way, I learned that JQuery's `$(document).ready()` function only waits until the DOM is complete-- but at that point CSS, images and backgrounds may not be loaded yet. Therefore in my example.html code you'll see that I used `$(window).load()` to wait until all CSS, images and backgrounds are loaded before changing the scheme.

### Example Use
If you have CSS classes `.blue`, `.red` and `.orange` which define your color schemes, you would call the script like this:

	$(window).load(
		function() {
	            $().schemer("blue", "red", "orange");
		}
	);


See example.html for a complete example of how to use the script. 

### Licensing
This code is licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

Written by North Krimsly of [www.highintegritydesign.com](http://www.highintegritydesign.com)