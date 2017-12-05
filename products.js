
  /*
 * Removes white space from a string value.
 *
 * return  A string with leading and trailing white-space removed.
 */

function load_Products()
    {
      
    var fashion_xml = loadXML('fashion.xml');

    //make a shortcut to get all the elements from xml
    var fashionRoot = fashion_xml.documentElement;
    var productsNames = fashionRoot.children;


    var section = document.getElementById("fashion1");
    var ul = document.getElementById("clothing");

    // save the names of the elements we're looking for
    // in the XML, so we can loop through them.
    var xmlElements = ["style_name","price","description","image"]; 

    for (var i = 0; i < productsNames.length; i++) 
    {
      var styleName = productsNames[i].getElementsByTagName("style_name")[0].firstChild.nodeValue;
      var productPrice = productsNames[i].getElementsByTagName("price")[0].firstChild.nodeValue;
      var description = productsNames[i].getElementsByTagName("description")[0].firstChild.nodeValue;

        var images = productsNames[i].getElementsByTagName("image");

        var newLi = document.createElement("li");
        var newH4 = document.createElement("h4");
        var newH5 = document.createElement("h5");
        var newBlockquote = document.createElement("blockquote")

        newH4.innerHTML = styleName;
        newH5.innerHTML = productPrice;
        newBlockquote.innerHTML = description;


        newLi.appendChild(newH4);
        newLi.appendChild(newH5);
        newLi.appendChild(newBlockquote);

      //loop through images and add to the element created 
      for (var j = 0; j < images.length; j++) 
      {

        var img = document.createElement("img");
        img.setAttribute("src","images/" + images[j].firstChild.nodeValue);
        newLi.appendChild(img);
      }

      ul.appendChild(newLi).style.display = "zebra_background";
    }
}


function load()
{
  //load the products when people go to products tab 
  load_Products();

}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load, false);