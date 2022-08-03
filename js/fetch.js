const xhr =new XMLHttpRequest()
console.log("first")
const fetch=(url,cb)=>{
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4){
            if(xhr.status==200){
                const data=JSON.parse(xhr.responseText)
                cb(data)    
            }
        }
    }
    xhr.open('GEt',url)
    xhr.send()
}
