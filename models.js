
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  "title": String,
  "date": Date,
  "summary": String,
  "image":String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


// "title": "Waiting in Line",
// 		"date": "January 9, 2014",
// 		"summary": "<p>Think about some of the designs that you consider to be great innovations. Quite likely, they came about because the design team was able to see a new problem or opportunity, or reframe things in a new way. As the light bulb joke illustrates, an important strategy of successful designers is to reframe things so that... we can see things in a new light. This first week's exercise is intended to work your perception and reframing 'muscles'. How creative can you be? (Later exercises will work different 'muscles'.)</p> <p>Any questions about this assignment should be posed to the forums and will be answered promptly by the staff. </p> <p>For this first project, <b>your mission is to redesign the experience of waiting in line</b>.</p> <p>An important part of the designer's role is to come up with a point of view. For example, your point of view might be that standing in line is intrinsic, but being bored is not.</p> <p>What can we do with our time that is more productive, more interesting, or more entertaining than just wait? Maybe it's reading the news, playing a game, or preempt the parents by giving them a surprise call? Alternatively, your point of view might be to eliminate the line by preordering, or hire people to act as placeholders in the line? Or maybe this is precious time for us to do nothing? A few minutes to space out, or quickly center ourselves. No matter what you come up with, it should be something that <b>improves the experience of standing in line</b>. For one jumping off point, <a href='http://www.nytimes.com/2012/08/19/opinion/sunday/why-waiting-in-line-is-torture.html?pagewanted=all&amp;_r=1&amp;''>here's a few thoughts from the New York Times</a>.</p> <p>This assignment will introduce iterative design so that during the main course project, the steps of the design process will be more familiar. For further explanations about the design process, have a look at the <b>d.school Bootcamp Bootleg</b> <a href='http://dschool.stanford.edu/use-our-methods/'>here</a>.</p>",
// 		"image": "http://upload.wikimedia.org/wikipedia/commons/3/3b/Bowery_men_waiting_for_bread_in_bread_line,_New_York_City,_Bain_Collection.jpg"
