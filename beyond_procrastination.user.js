// ==UserScript==
// @name          Beyond Procrastination
// @namespace     http://dev.beyond-syntax.com/
// @description   Minimize time spent on "wasteful" sites.
// @author        mjschultz
// @include       http://reddit.com/*
// @include       https://reddit.com/*
// @include       http://*.reddit.com/*
// @include       https://*.reddit.com/*
// ==/UserScript==

/* settings */
min_away = 180;
max_visit = 20;
global_includes = false; // true (all sites included), false (per site)

if (true == global_include)
{
	time_key = 'initial-time_global';
}
else
{
	time_key = 'initial-time_' + location.host;
}

/* get the initial visit time */
initial_time = GM_getValue(time_key);
current_time = new Date().getTime();
if (!initial_time)
{
	initial_time = current_time;
	GM_setValue(time_key, initial_time);
}

/* check if we've been away long enough (and reset initial visit time) */
if (current_time > (initial_time + max_visit + min_away))
{
	// we've been gone long enough, allow visiting and set initial time
	GM_setValue(time_key, current_time);
}
/* check if we've overstayed our welcome */
else if (current_time > (initial_time + max_visit))
{
	// you've been here too long, go away
	stay_away = (initial_time + max_visit + min_away) - current_time;
	// display the stay away time
	alert("Come back in " + stay_away);
}
else
{
	// you're still allowed to view this site ... for now.
}