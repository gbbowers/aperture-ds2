---
title: Typography
date: "2018-08-03"
category: "guidelines"
---

## Description
A user can accomplish their task when a page uses typography to create clear hierarchies and maximize legibility of all content.

## Typefaces
### Main UI
Aperture uses Bazaarvoice's brand typeface, Gibson, in three weights:

<div class="type-grid">
    <div class="type-example">
        <p style="font-family: Gibson; font-size: 72px; font-weight: 300; color: #222; text-align: center;">Aa</p>
        <p>Gibson Light <br />
            <code>font-family: "Gibson"; font-weight: 300;</code>
        </p>
    </div>
    <div class="type-example">
        <p style="font-family: Gibson; font-size: 72px; font-weight: 400; color: #222; text-align: center;">Aa</p>
        <p>Gibson Regular <br />
            <code>font-family: "Gibson"; font-weight: 400;</code></p>
    </div>
    <div class="type-example">
        <p style="font-family: Gibson; font-size: 72px; font-weight: 600; color: #222; text-align: center;">Aa</p>
        <p>Gibson Semi-Bold <br />
            <code>font-family: "Gibson"; font-weight: 600;</code></p>
    </div>

</div>

### Code / Monospace
For code snippets and other monospaced usage, we use IBM Plex Mono, Medium weight:

<div class="type-grid">
    <div class="type-example">
        <div style="font-family: 'IBM Plex Mono', monospace; color: #222; text-align: center;"><p style="font-size: 72px;">Aa</p><p style="font-size: 36px;">1234567890</p></div>
        <p>IBM Plex Mono, Medium <br />
            <code>https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500</code></p>
    </div>
</div>


## Type Scale

```typography
12|500|Bazaarvoice: Meet shoppers in all the moments that matter|.75rem / 12px |Normal, 500|Used in special cases only
14|500|Bazaarvoice: Meet shoppers in all the moments that matter|.875rem / 14px |Normal, 500|Most short spans of text
16|500|Bazaarvoice: Meet shoppers in all the moments that matter|1rem / 16px |Normal, 500|Default text (only use in long-span text)
18|600|Bazaarvoice: Meet shoppers in all the moments that matter|1.125rem / 18px |Semi-bold, 600|Sub-section titles
24|600|Bazaarvoice: Meet shoppers in all the moments that matter|1.5rem / 24px |Semi-bold, 600|Section titles
36|600|Bazaarvoice: Meet shoppers in all the moments that matter|2.25rem / 36px |Semi-bold, 600|Only page title
72|300|3,650|4.5rem / 72px |Light, 300|Only use when absolutely necessary for reporting purposes
```

## Usage
###Body copy
There are two main sizes for body copy. To help maximize screen space, use **14px/0.875rem** for the *short runs of copy* that make up the majority of messaging in the Console UI. **For areas of prolonged reading**, such as documentation, use the larger **16px/1rem** to aid in readability.

###Accessibility and Body copy
WCAG 2.1 AA (section 1.4.4) requires that 
>text can be resized without assistive technology up to 200% without loss of content or functionality. 

They advise using large fonts by default and avoiding scaling default fonts smaller than the user-agent default; however, it is sufficient to ensure that our font-sizes use relative measurements (we use ems and rems to meet this) and that our containing elements are sized and positioned in relation to the text size (or use a liquid layout).

###Line-height
A good line-height (leading) ratio helps contribute to the readability and pacing of copy. The ideal line-height for copy has a ratio of 1:1.5 (or 150% of the text size); for example, 16px/1rem type has a 24px/1.5rem line-height. Headers generally need less spacing and can use a line-height ratio of 1/1.25.

Line-height | Ratio | Example
------------|-------|--------
Standard UI copy | 1:1.5 | 1rem/1.5 or 16px/24px
Headers | 1:1.25 | 1.5rem/1.25 or 24px/30px

###Accessibility and Line-height
WCAG 2.1 AA (section 1.4.11) requires that we build to afford our users altering their line-heights to at least 1.5 times the font-size without loss of content or functionality, so it makes sense to **design from there** for most content.