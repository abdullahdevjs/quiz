import "./Footer.css"

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

<h2 className="footer-logo">
Quiz Platform
</h2>

<div className="footer-links">

<a href="tel:6392538700">

<svg width="18" height="18" viewBox="0 0 24 24">
<path fill="currentColor"
d="M6.62 10.79a15.05 15.05 0 006.59 
6.59l2.2-2.2a1 1 0 011.01-.24 
11.72 11.72 0 003.68.59 
1 1 0 011 1V21a1 1 0 
01-1 1A17 17 0 013 5a1 
1 0 011-1h3.5a1 1 0 
011 1 11.72 11.72 0 
00.59 3.68 1 1 0 
01-.24 1.01z"/>
</svg>

<span>Contact</span>

</a>

<a href="mailto:mohdabdullahsheikh36@gmail.com">

<svg width="18" height="18" viewBox="0 0 24 24">
<path fill="currentColor"
d="M20 4H4a2 2 0 00-2 
2v12a2 2 0 002 2h16a2 
2 0 002-2V6a2 2 0 
00-2-2zm0 4l-8 5-8-5V6l8 
5 8-5v2z"/>
</svg>

<span>Email</span>

</a>

<a 
href="https://instagram.com/sheikh.mohdabdullah"
target="_blank"
rel="noreferrer"
>

<svg width="18" height="18" viewBox="0 0 24 24">
<path fill="currentColor"
d="M7.75 2h8.5A5.75 
5.75 0 0122 7.75v8.5A5.75 
5.75 0 0116.25 22h-8.5A5.75 
5.75 0 012 16.25v-8.5A5.75 
5.75 0 017.75 2z"/>
</svg>

<span>Instagram</span>

</a>

</div>

<p className="footer-copy">
© 2026 Quiz Platform. All rights reserved.
</p>

<p className="footer-credit">
Designed & Developed by <strong>Mohammad Abdullah</strong>
</p>

</div>

</footer>

)

}

export default Footer