document.getElementById('generate').addEventListener('click', function() {
    const namesStr = document.getElementById('names').value;
    if (!namesStr) {
        alert('Please enter some names.');
        return;
    }

    const names = namesStr.split(',').map(name => name.trim()).filter(name => name);
    if (names.length % 2 !== 0) {
        const proceed = confirm("The number of individuals is odd. Do you want to proceed?");
        if (!proceed) {
            return;
        }
    }

    const shuffledNames = names.sort(() => 0.5 - Math.random());
    const midPoint = Math.ceil(shuffledNames.length / 2);
    const team1 = shuffledNames.slice(0, midPoint);
    const team2 = shuffledNames.slice(midPoint);

    displayTeams(team1, team2);
});

function displayTeams(team1, team2) {
    const teamsContainer = document.getElementById('teams');
    teamsContainer.innerHTML = `
        <h2>Team 1</h2>
        <ul>${team1.map(name => `<li>${name}</li>`).join('')}</ul>
        <h2>Team 2</h2>
        <ul>${team2.map(name => `<li>${name}</li>`).join('')}</ul>
    `;
}
