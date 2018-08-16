---
title: Design Tokens
date: "2018-05-17"
category: "tokens"
catorder: 1
status: "Draft"
---

Design tokens are named entities that store visual design attributes available in the Aperture Design System. We've discussed the scale, typography, color, and more, and Design Tokens allow us to reference standard, specific instances to maintain a scalable and consistent visual system for UI development. So instead of memorizing the hexadecimal code `#388700`, you can know that you are creating a success message and instead use `successColor`. This is true in code as well as when referencing Invision's DSM plugin in Sketch and Studio. Even better, if the underlying value of a Design Token changes, you're safe because you're using the token, not the value assigned to it. It's algebra and we've got some powerful variables.

## Color tokens
### Background tokens

```color-palette
<code>backgroundLight</code> (GREY_1):<br> Default background color for Content, #ffffff
backgroundMedium (GREY_2):<br> Light contrast background to differentiate content on backgroundLight, #fafafa
stripedBackgroundColor:<br> Used for (optional) alternating row colors on data tables, #fafafa
disabledBackgroundColor:<br> Background color in disabled components (replacing backgroundLight), #fafafa
backgroundWell (GREY_3):<br> Background color for scrollable containers with self-contained objects like Cards. Only use textColor for text directly on this background., #ededed
activeBackgroundColor:<br >Background color for selected states requiring text, #F2FBFA
highlightColor:<br> Hovering background color for items, #EBFBFF
infoBackgroundColor:<br> Background color for info message types and tooltip flyouts, #EBFBFF
defaultButtonHover:<br> Specific background color for hover state of default and neutral buttons, #EBFBFF
actionColor:<br> Background color for primary action buttons, #0C7994
primaryButtonHover:<br> Background color for primary button hover state, #063D4B
successTagColor, #85BF5B
successBackgroundColor, #EEFAE6
warnTagColor, #FFD899
warnBackgroundColor, #FFF5E5
errorTagColor, #FFB2AA
errorBackgroundColor, #FFF6F5
notificationBackgroundColor, #E76D25
activeColor:<br> Background color for active states without text, #00A690
```