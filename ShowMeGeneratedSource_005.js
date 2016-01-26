javascript:void(function(w){
 var w1=w, d1=w1.document, run=function(){
	 var h, o=w1, w2, d2, n, m;
	 o.removeEventListener('load',run);
	 if(w2=o.open()){
		d2=w2.document;
		(h=d2.createDocumentFragment().appendChild(d1.documentElement.cloneNode(true))).normalize();
		o=d2.createNodeIterator(h,128);
		while(n=o.nextNode()){n.remove();};
		o=new XMLSerializer();
		m=[
		'<body style="margin:0;font:0/0 arial"><textarea spellcheck="false" style="width:100%;height:100%;resize:none;font:14px/14px monospace;">',
		o.serializeToString(d1.doctype),
		null,
		'</textarea></body>'
	  ];

		m.slice.call(h.getElementsByTagName('script')).forEach(function(tag){
		 var e=tag;e.innerHTML=e.innerHTML.replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,'');
     });

	  h=o.serializeToString(h);
	  m[2]=h.replace(/[&<>\u2026\u2019\u00A0\u00A9\u00B0\u00E0\u00E8\u2002\u2009\u200D]/g,(function(c){return this[c.charCodeAt(0)];}).bind({
		  38:'&amp;',
		  60:'&lt;',
		  62:'&gt;',
		  133:'&amp;hellip;',
		  146:'&amp;rsquo',
		  160:'&amp;nbsp;',
		  169:'&amp;copy;',
		  176:'&amp;deg;',
		  224:'&amp;agrave;',
		  232:'&amp;egrave;',
		  249:'&amp;ugrave;',
		  8194:'&amp;ensp;',
		  8201:'&amp;thinsp;',
		  8205:'&amp;zwj;'
	  }));

	  d2.write(m.join('\n'));
	  d2.close();
	 };
 };
 if(d1.readyState==='complete'){run();}else{w1.addEventListener('load',run);};
}(window));
