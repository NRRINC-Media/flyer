# Welcome to Flyer
##### _what is flyer? flyer is a Simple ad script that helps small websites have a Single ad. and allow the use to have full control over it._
<img src="https://raw.githubusercontent.com/Nolanrulesroblox/Flyer/master/offsite/flyer-logo.png" alt="drawing" width="200"/></img>
---
# How to use
## Add to head
```html
<!-- include jquery or jq.js above here -->
<script src="/src/flyer/flyer.js"></script>
```
## Add flyer to page (div)
```html
<div id="flyer"></div>
```
---
# Flyer will take care of the rest

## UI controls:
```html
    <button id="yesfly">Yes ads</button>
    <button id="nofly">No ads</button>
    <!-- not needed to run. -->
```
## Flyer Controls
```html
    <script>
        //add above flyer.js
        flyer = {
            flyer_aid: '',
            flyer_title: 'A Word From Our Sponsor: Crispy',
            flyer_title_link: 'http://exmaple.com',
            flyer_frame_src: '/src/ad.html',
            flyer_frame_rp: 'unsafe-url',
            flyer_desc:'your ad desc1',
            flyer_video:'/link/to/mp4.mp4',
            flyer_show: 'img', //img/vid/frm
            flyer_img_title: 'my cool image',
            flyer_img_src: "https://via.placeholder.com/500x375",
            flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer'",
    }
    </script>
```
# Updates:
```code
+ Video support (Working)
+ Flyer script Conf (on-page)
- removed All but 1 use of Local Storage
~ changed How flyer loads, and How Flyer is Handled 
```
```
update key:
+ Added
/ Fixed
~ changed
- removed
```
