window.jQuery=function(nodeOrSelector){
	let nodes={}
	nodes.addClass=function(){
	nodes.html=function(){}
	return nodes
	}
}

window.jQuery.ajax=function(url,method,body,success,fail,headers){
	let request=new XMLHttpRequest()
	request.open(method,url)
	for(let key in headers) {  //遍历请求头
    let value = headers[key]
    request.setRequestHeader(key, value)
  	}
	request.onreadystatechange=()=>{
		if(request.readyState===4){
			if(request.status>=200&&rerquest.status<300){
				success.call(undefined,request.responseText)
			}else if(request.status>=400){
				fail.call(undefined,request)
			}
		}
	}
	request.send(body)
}

window.$=window.jQuery

function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click',(e)=>{
	window.jQuery.ajax({
		url:'/xxx',
		method:'get',
		headers: {
		  'content-type':'application/x-www-form-urlencoded',
		  'phoebe': '23'
		},
		success:(x)=>{
			f1.call(undefined,x)
			f2.call(undefined,x)
		},
		fail:(x)=>{}
	})
})