---
category: "guidelines"
date: "2018-07-31"
title: "Date and Time"
---

## Description
The user needs to the Date, Time, or combination of both associated with actions, reports, and other data.

## Examples

| Localization | Date | Time | DateTime |
| --- | --- | --- | --- |
| English (NA) | Jun 7, 2018 | 3:25 PM CDT | Jun 7, 2018 3:25 PM CDT |
| English (AU/NZ) | 7 Jun 2018 | 3:25 PM AEST | 7 Jun 2018 3:25 PM AEST |
| English (EMEA + rest of APAC) | 7 Jun 2018 | 15:25 BST | 7 Jun 2018 15:25 BST |
| French (All) | 7 juin 2018 | 15:25 CEST | 7 juin 2018 15:25 CEST |
| German (All) | 7\. Juni 2018 | 15:25 CEST | 7\. Juni 2018 15:25 CEST |


## Usage
* The date and time displayed in Portal are localized automatically based on locale and language factors.
* All dates are based around a short day, abbreviated month, and the full year. Each display will be automatically localized based on user preferences, but default US English is Jun 7, 2018.
* Time is displayed in localized format, either 3:25 PM CDT or 15:25 CET. Timezone is included, unless timezone is called out at a higher level on the page. A table could mention all times in Central Time, and not show timezone on each instance of time in the table.
* Time and date stamping is converted to the User's local time. An action run ``Jun 7, 2018 8:30 PM CDT `` in Austin shows as ``8 Jun 2018 02:30 BST`` in the UK and ``8. Juni 2018 03:30 CEST`` in Germany, for instance.
* Do not include seconds in Time, unless the timestamp is directly tied to a value impacted by seconds of duration (specifically, if dollars are attached to seconds).
* Date and Time are calculated and localized via Aperture component, and not directly in the app.
* Alternate formats of Date and Time are discouraged. Never add ordinal indicators to the day (7th), add the day of the week (Thursday), or expand the month name, unless done as part of localization.
* Never use purely numeric date formats (06/07/08 could mean three different dates).
* Relative time is discouraged, and should only be used in timeboxed contexts ("Next update in 5 minutes", "Added to queue 30 minutes ago") where the user will be expecting change or results soon. Relative time should never be used for periods over 1 hour. Timestamps do not default to relative time and switch over to absolute time.