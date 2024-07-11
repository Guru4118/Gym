import React from "react";
import Quick from "./Quick";
function Loca()
{
    return(
        <div className="locator">
            <div>
            <h2 id="gymloc">Gym Location</h2>
            </div>
            <div className="store"> 
                
            <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3409060266745!2d79.31578907567152!3d12.950024187363349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad358935ceda91%3A0x8000ac121203324a!2sGeeKay%20Millenniaa!5e0!3m2!1sen!2sin!4v1720457056308!5m2!1sen!2sin"
      
      height="650"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />            

</div>
<Quick/>
        </div>
    );
}

export default Loca