// This software is licensed under the MIT License, http://www.opensource.org/licenses/mit-license.php
// Copyright (c) 2012 High Integrity Design, LLC.    http://www.highintegritydesign.com
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
// the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
// and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
// TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
// DEALINGS IN THE SOFTWARE.
// *************************************************************************************************************
//
// jquery.schemer.js plug-in
//
// Given a variable number of string arguments which are css class names, choose one at random 
// and attach it to the <html> page element.  This allows you to set up a series of color and styling schemes 
// for your site using different class names, and display a random scheme each time a page is loaded.
// Note: this code works in concert with $(window).load(). See example.html.
//
(function( $ ) 
{
	$.fn.schemer = function() 
	{
		// generate a random number matching the number of function arguments
		var randomNumber = Math.floor(Math.random() * arguments.length);
		
		// grab the argument at index [randomNumber] and add it to the document's HTML element
		// this will add all styles defined in the class to the document, thereby changing the display
		$('html').addClass(arguments[randomNumber]);
	};
})( jQuery );