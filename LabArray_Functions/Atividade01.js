const hashtags = ["#vida", "#javascript", "#aula", "#js", "#Capuccino"];
hashtags.filter(h=> h.includes ("js")).map (s => s.toLowerCase()).forEach (h => console.log(h));