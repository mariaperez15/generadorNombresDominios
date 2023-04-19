let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

let dominio = '';
for (let i=0; i<pronoun.length; i++){
    for (let h=0; h<adj.length; h++){
        for (let f=0; f<noun.length; f++){
            console.log(pronoun[i]+adj[h]+noun[f]+".com");
        }
    }
}

console.log(dominio);