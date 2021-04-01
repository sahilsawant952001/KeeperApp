import React from "react";

function Footer()
{
    var d = new Date();
    var cy = d.getFullYear();
    return <footer><p>Copyright @ {cy} </p></footer>;
}

export default Footer;