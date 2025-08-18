'use strict';

const string = `'It's been a long day,' said Sarah as she dropped her bag by the door. 'I don't know how I made it through the meeting without falling asleep.'
'You should've taken more coffee,' replied Tom, sipping from his mug. 'I told you this project would drain you.'
'Yeah, but I didn't think it'd be this bad. The client kept saying, 'We need it yesterday,' and then changed their minds three times!'
'Typical,' Tom chuckled. 'At least you didn't have to deal with IT today. I tried to fix my laptop, and the guy at support said, 'Have you tried turning it off and on again?' Like I haven't thought of that!'
'People don't get how frustrating it is,' Sarah sighed. 'Anyway, I'm ordering pizza. You want the usual?'
'Definitely. But if they don't deliver on time again, I'm writing a review: 'Worst service in town — don't waste your time.' And this time I mean it.'
'Just don't use my name,' Sarah laughed. 'Last time you said, 'My friend Sarah says this place is overrated,' and now they won't take my orders!'
'Oops,' Tom grinned. 'My bad. But hey, at least we still have each other. That's what matters, right?'
'Right,' she said softly. 'Even if everything else goes wrong — and it usually does — we've got this.'`;

const regexp = /\'/gm;
let newString = string.replace(regexp, '"');

console.log(newString);