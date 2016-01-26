javascript:void(function(w){
 var w1=w, d1=w1.document, h, w2=w1.open(), d2, o, n;
 if(w2){
	d2=w2.document;
	(h=d2.createDocumentFragment().appendChild(d1.documentElement.cloneNode(true))).normalize();
   o=d2.createNodeIterator(h,128);
	while(n=o.nextNode()){n.remove();};
	o=new XMLSerializer();
	h=o.serializeToString(h);
   d2.write([
	'<body style="margin:0;font:0/0 arial"><textarea spellcheck="false" style="width:100%;height:100%;resize:none;font:14px/14px monospace;">',
	o.serializeToString(d1.doctype),
	h.replace(/[&<>]/g,(function(c){return this[c.charCodeAt(0)];}).bind({38:'&amp;',60:'&lt;',62:'&gt;'})),
	'</textarea></body>'
  ].join('\n'));
  d2.close();
 };
}(window));
