---
title: Scale
date: "2018-08-03"
category: "guidelines"
---

## Description
Aperture uses a **4-based scale** for units of measure, unless an element is sized dynamically as part of the [Aperture Grid system](../../structure/content/grid). Even still, aside from the dynamic width of columns in the grid layout, all other units are measured in factors or fractions of the base unit 16, which is represented as 1rem in our CSS. Therefore, common sizes are used frequently in margins, padding, and other types of spacing.

## Examples
### Common units

Name | Pixels | Rem | Example |
-----|--------|-----|---------|
xxs | 4px | .25rem | <span class="xxs"> </span>
xs | 8px | .5rem | <span class="xs"> </span>
small | 12px | .75rem | <span class="small"> </span>
regular | 16px | 1 rem | <span class="regular"> </span>
medium-space | 24px | 1.5rem | <span class="med"> </span>
large-space | 32px | 2rem | <span class="large"> </span>
min-tap | 40px | 2.5rem | <span class="min-tap"> </span>
tap | 48px | 3rem | <span class="tap"> </span>
 | … and so on |

### See also
* [Aperture Grid](../../structure/content/grid)
* Typography

## Usage
* Having a set spacing scale brings a rhythm to the product and creates a natural and familiar flow from page to page.
* Typography follows a related, but less-rigid scale. Technically, our scale is bound to the base font-size, for consistency and scalability in the rendered page. While not all text is inherently 16px or larger, the default size is specified and type is scaled based on the same unit as our layout scale to maintain a consistent system of units.
* 4-based scales provide ease in consistent measurement in non-irrational numbers. They make downsizing a page or element easy math with consistent, even numbers. 10-based design scales become problematic when being subdivided in 3-4 pieces. Fractions and factors of 16 are extremely common in computing (think about bits, bytes, and the size of drives).
* 4-based scales are used in design systems by Apple, Google, IBM, and are becoming the common standard.
* Design with space: Every part of a UI should be intentional including the empty space between elements. The amount of space between items creates relationships and hierarchy.
* Having less space between elements creates a close association and they are then viewed as related. Elements arranged in the same spacing pattern are seen as related pieces that have equal weight.
* Space can also be used to denote groups of associated information. This creates content sections on page without having to use lines or other graphical elements as a divider.
* Create hierarchy with space. Elements that have more spacing around them tend to be higher in importance than elements that have less space between them.
* Embrace white space. White space is a good thing. It can be used to break up sections on a page or to help create focus on certain elements. White space helps with information processing; too much dense information can be disorienting and overwhelming for a user. There should be white space to let the user's eye rest.

### What about 20, 100, etc? I can divide them by 16!
The scale is designed for consistency in spacing, layout, and size. Aim for using common sizes. There are always exception to the rule (Grid columns don't follow it, for example) but try to avoid these cases when possible.