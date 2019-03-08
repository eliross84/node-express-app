const jokes = ['Programmers are like playwright\'s, computer\'s are just really lousy actors.', 
'What is a IT Professional\'s birth control? ... Their personality', 
'What do you call 8 Hobbit\'s? ... A Hobbyte', 
'Which computer sings the best? ... A-Dell', 
'What do your air conditioner and computer have in common? ... They both are inefficient when Windows is open'];

function newJoke(){
    const random = Math.floor(Math.random() * (jokes.length));
    document.getElementById('jokeDisplay').innerHTML = jokes[random];
}



