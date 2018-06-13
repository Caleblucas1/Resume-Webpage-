define("text",["module"],function(e){"use strict";var t,n,s,i,r,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],l=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,c=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,a="undefined"!=typeof location&&location.href,d=a&&location.protocol&&location.protocol.replace(/\:/,""),u=a&&location.hostname,h=a&&(location.port||void 0),f={},p=e.config&&e.config()||{};return t={version:"2.0.10",strip:function(e){if(e){e=e.replace(l,"");var t=e.match(c);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:p.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;t<3;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(e){}if(e){o=[n];break}}return e},parseName:function(e){var t,n,s,i=!1,r=e.indexOf("."),o=0===e.indexOf("./")||0===e.indexOf("../");return-1!==r&&(!o||r>1)?(t=e.substring(0,r),n=e.substring(r+1,e.length)):t=e,s=n||t,r=s.indexOf("!"),-1!==r&&(i="strip"===s.substring(r+1),s=s.substring(0,r),n?n=s:t=s),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,s,i){var r,o,l,c=t.xdRegExp.exec(e);return!c||(r=c[2],o=c[3],o=o.split(":"),l=o[1],o=o[0],!(r&&r!==n||o&&o.toLowerCase()!==s.toLowerCase()||(l||o)&&l!==i))},finishLoad:function(e,n,s,i){s=n?t.strip(s):s,p.isBuild&&(f[e]=s),i(s)},load:function(e,n,s,i){if(i.isBuild&&!i.inlineText)return void s();p.isBuild=i.isBuild;var r=t.parseName(e),o=r.moduleName+(r.ext?"."+r.ext:""),l=n.toUrl(o),c=p.useXhr||t.useXhr;if(0===l.indexOf("empty:"))return void s();!a||c(l,d,u,h)?t.get(l,function(n){t.finishLoad(e,r.strip,n,s)},function(e){s.error&&s.error(e)}):n([o],function(e){t.finishLoad(r.moduleName+"."+r.ext,r.strip,e,s)})},write:function(e,n,s,i){if(f.hasOwnProperty(n)){var r=t.jsEscape(f[n]);s.asModule(e+"!"+n,"define(function () { return '"+r+"';});\n")}},writeFile:function(e,n,s,i,r){var o=t.parseName(n),l=o.ext?"."+o.ext:"",c=o.moduleName+l,a=s.toUrl(o.moduleName+l)+".js";t.load(c,s,function(n){var s=function(e){return i(a,e)};s.asModule=function(e,t){return i.asModule(e,a,t)},t.write(e,c,s,r)},r)}},"node"===p.env||!p.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]?(n=require.nodeRequire("fs"),t.get=function(e,t,s){try{var i=n.readFileSync(e,"utf8");0===i.indexOf("\ufeff")&&(i=i.substring(1)),t(i)}catch(e){s(e)}}):"xhr"===p.env||!p.env&&t.createXhr()?t.get=function(e,n,s,i){var r,o=t.createXhr();if(o.open("GET",e,!0),i)for(r in i)i.hasOwnProperty(r)&&o.setRequestHeader(r.toLowerCase(),i[r]);p.onXhr&&p.onXhr(o,e),o.onreadystatechange=function(t){var i,r;4===o.readyState&&(i=o.status,i>399&&i<600?(r=new Error(e+" HTTP status: "+i),r.xhr=o,s(r)):n(o.responseText),p.onXhrComplete&&p.onXhrComplete(o,e))},o.send(null)}:"rhino"===p.env||!p.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?t.get=function(e,t){var n,s,i=new java.io.File(e),r=java.lang.System.getProperty("line.separator"),o=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i),"utf-8")),l="";try{for(n=new java.lang.StringBuffer,s=o.readLine(),s&&s.length()&&65279===s.charAt(0)&&(s=s.substring(1)),null!==s&&n.append(s);null!==(s=o.readLine());)n.append(r),n.append(s);l=String(n.toString())}finally{o.close()}t(l)}:("xpconnect"===p.env||!p.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(s=Components.classes,i=Components.interfaces,Components.utils.import("resource://gre/modules/FileUtils.jsm"),r="@mozilla.org/windows-registry-key;1"in s,t.get=function(e,t){var n,o,l,c={};r&&(e=e.replace(/\//g,"\\")),l=new FileUtils.File(e);try{n=s["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),n.init(l,1,0,!1),o=s["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),o.init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),c),o.close(),n.close(),t(c.value)}catch(e){throw new Error((l&&l.path||"")+": "+e)}}),t}),define("text!PseudoSelectors.json",[],function(){return'{\n    "selectors":\n    {\n        "active":              {"desc": "Selects the active link"},\n        "checked":             {"desc": "Selects every checked <input> element"},\n        "default":             {"desc": "Selects every UI element that is the default among a group of similar elements"},\n        "dir(direction)":      {"desc": "Selects every element whose text direction is \'direction\'", "text": "dir()"},\n        "disabled":            {"desc": "Selects every disabled <input> element"},\n        "empty":               {"desc": "Selects every element that has no children/text (including text nodes)"},\n        "enabled":             {"desc": "Selects every enabled <input> element"},\n        "first-child":         {"desc": "Selects every element that is the first child of its parent"},\n        "first-of-type":       {"desc": "Selects every element that is the first element identified by \'type\' of its parent"},\n        "focus":               {"desc": "Selects the input element which has focus"},\n        "focus-within":        {"desc": "Selects every element which or whose descendant has focus"},\n        "fullscreen":          {"desc": "Selects the element being in full-screen mode"},\n        "hover":               {"desc": "Selects elements on mouse over"},\n        "in-range":            {"desc": "Selects input elements with a value within a specified range"},\n        "indeterminate":       {"desc": "Selects every indeterminate checkbox or radio button"},\n        "invalid":             {"desc": "Selects all input elements with an invalid value"},\n        "lang(language)":      {"desc": "Selects every element with a lang attribute equal to \'language\'", "text": "lang()"},\n        "last-child":          {"desc": "Selects every element that is the last child of its parent"},\n        "last-of-type":        {"desc": "Selects every element that is the last element of its parent"},\n        "link":                {"desc": "Selects all unvisited links"},\n        "matches(selectors)":  {"desc": "Selects every element that is matched by one or more selectors in the \'selectors\' list", "text": "matches()"},\n        "not(selector)":       {"desc": "Selects every element that is not an element identified by \'selector\'", "text": "not()"},\n        "nth-child(n)":        {"desc": "Selects every element that is the second child of its parent", "text": "nth-child()"},\n        "nth-last-child(n)":   {"desc": "Selects every element that is the second child of its parent, counting from the last child", "text": "nth-last-child()"},\n        "nth-last-of-type(n)": {"desc": "Selects every element that is the nth element of its parent, counting from the last child", "text": "nth-last-of-type()"},\n        "nth-of-type(n)":      {"desc": "Selects every element that is the nth element of its parent",  "text": "nth-of-type(n)"},\n        "only-child":          {"desc": "Selects every element that is the only child of its parent"},\n        "only-of-type":        {"desc": "Selects every element that is the only element of this type of its parent"},\n        "optional":            {"desc": "Selects input elements with no \'required\' attribute"},\n        "out-of-range":        {"desc": "Selects input elements with a value outside a specified range"},\n        "placeholder-shown":   {"desc": "Selects all <input> and <textarea> elements currently showing placeholder text"},\n        "read-only":           {"desc": "Selects input elements with the \'readonly\' attribute specified"},\n        "read-write":          {"desc": "Selects input elements with the \'readonly\' attribute NOT specified"},\n        "required":            {"desc": "Selects input elements with the \'required\' attribute specified"},\n        "root":                {"desc": "Selects the document\'s root element"},\n        "target":              {"desc": "Selects the current active element (clicked on a URL containing that anchor name)"},\n        "valid":               {"desc": "Selects all input elements with a valid value"},\n        "visited":             {"desc": "Selects all visited links"}\n    },\n    "elements":\n    {\n        "after":        {"desc": "Insert something after the content of each element identified by this selector"},\n        "before":       {"desc": "Insert something before the content of each element identified by this selector"},\n        "first-letter": {"desc": "Selects the first letter of every element identified by this selector"},\n        "first-line":   {"desc": "Selects the first line of every element identified by this selector"},\n        "placeholder":  {"desc": "Selects the placeholder text of <input> and <textarea> elements"},\n        "selection":    {"desc": "Selects the portion of an element identified by this selector that is selected by a user"}\n    }\n}\n'}),define("main",["require","exports","module","text!PseudoSelectors.json"],function(e,t,n){"use strict";function s(e,t,n){var s,i=-1;return"pseudo"===e.state.state?s=t.substr(0,e.start+1).slice(-3):"variable-3"===e.type&&(s=t.substr(0,e.start).slice(-3)),s?"::"===s.slice(-2)?i=h:":"===s.slice(-1)&&(i=u):(c.movePrevToken(n),i=n.token.string===f?h:u),i}function i(){}function r(e){return"pseudo"===e.state.state||"variable-3"===e.type||e.string===f}var o=brackets.getModule("utils/AppInit"),l=brackets.getModule("editor/CodeHintManager"),c=brackets.getModule("utils/TokenUtils"),a=e("text!PseudoSelectors.json"),d=JSON.parse(a),u=0,h=1,f=":";i.prototype.hasHints=function(e,t){var n=e.getCursorPos(),s=e._codeMirror.getTokenAt(n);return this.editor=e,r(s)},i.prototype.getHints=function(e){var t=this.editor.getCursorPos(),n=this.editor._codeMirror.getTokenAt(t),i="variable-3"===n.type?n.string:"",o=this.editor._codeMirror.getLine(t.line),l=c.getInitialContext(this.editor._codeMirror,t);return r(n)?(this.context=s(n,o,l),-1===this.context?null:(this.token=n,{hints:Object.keys(this.context===u?d.selectors:d.elements).filter(function(e){if(0===e.indexOf(i))return e}).sort(),match:i,selectInitial:!0,defaultDescriptionWidth:!0,handleWideResults:!1})):null},i.prototype.insertHint=function(e){var t=this.editor.getCursorPos(),n={line:t.line,ch:this.token.start},s={line:t.line,ch:this.token.end};return"pseudo"===this.token.state.state&&(n.ch=n.ch+1,s=n),this.context===u&&(e=d.selectors[e].text||e),this.editor.document.replaceRange(e,n,s),")"===e.slice(-1)&&(t=this.editor.getCursorPos(),this.editor.setCursorPos({line:t.line,ch:t.ch-1})),!1},o.appReady(function(){var e=new i;l.registerHintProvider(e,["css","scss","less"],0),t.pseudoSelectorHints=e})});