# js-ShowMeGeneratedSource
ShowMeGeneratedSource (of Webpage)

javascript:
void((function(w){
 var e=w, d=e.document, s=d.doctype, h=d.documentElement;
 if(e=e.open()){
  (h=d.createDocumentFragment().appendChild(h.cloneNode(true))).normalize();
  d=e.document;
  e=new XMLSerializer();
  d.write([
	'<body style="margin:0;font:0/0 arial"><textarea spellcheck="false" style="width:100%;height:100%;resize:none;font:14px/14px monospace;">',
	e.serializeToString(s),
	e.serializeToString(h).replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;'),
	,'</textarea></body>'
  ].join('\n'));
  d.close();
 };
})(window));
