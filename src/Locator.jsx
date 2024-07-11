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
                
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976237.1159288741!2d77.79212984027195!3d14.665126658091921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1720694064329!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
