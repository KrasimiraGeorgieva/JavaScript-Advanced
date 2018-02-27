function monkeyPatcher(command) {
    let commands = {
        upvote: () => {
            this.upvotes++;
        },
        downvote: () => {
            this.downvotes++;
        },
        score: () => {

            let currentUpVotes = this.upvotes;
            let currentDownVotes = this.downvotes;
            let totalVotes = currentUpVotes + currentDownVotes;
            let totalScore = currentUpVotes - currentDownVotes;

            let rating = 'new';

            if (totalVotes >= 10) {
                updateRating();
            }
            if (totalVotes > 50) {
                obfuscatePost()
            }

            return [currentUpVotes, currentDownVotes, totalScore, rating];

            function updateRating(){
                if(currentUpVotes > totalVotes * 0.66){
                    rating = 'hot';
                }else if(totalScore >= 0 && (currentUpVotes > 100 || currentDownVotes > 100)){
                    rating = 'controversial';
                }else if(totalScore < 0 && currentDownVotes > currentUpVotes){
                    rating = 'unpopular';
                }
            }

            function obfuscatePost(){
                let biggerScore = Math.max(currentUpVotes, currentDownVotes);
                let inflation = Math.ceil(biggerScore / 4);
                currentDownVotes += inflation;
                currentUpVotes += inflation;
            }
        },
    };

    return commands[command]()
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score');
console.log(score);
for (let i = 0; i < 50; i++) {
    monkeyPatcher.call(post, 'downvote');
}
score = monkeyPatcher.call(post, 'score');
console.log(score);