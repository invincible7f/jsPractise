function createHtmlElement(_variableName, _elementName, _location, _elementCLassName,_elementInnerHtmlContent ){

    _variableName= document.createElement(_elementName)
    
    function createAttr(){
    
    if(_elementCLassName != undefined ){
    
    _variableName.classList.add(_elementCLassName)
    
    
    }  
     
    
    
     if( _elementInnerHtmlContent != undefined){
    
        _variableName.innerHTML = _elementInnerHtmlContent;
      
      
       }
    
    
     
     
    }
    
    createAttr()
    document.querySelector(_location).append(_variableName)
    
}


function giveAtribute(elemVarName,attributeName, attributeValue){
   
  elemVarName.setAttribute(attributeName,attributeValue)


}
