const params = new URLSearchParams(window.location.search);

const characterId = params.get("name");

console.log(characterId);
const character = characters[characterId];

if (!character) {
    console.error("Không tìm thấy nhân vật:", characterId);
}
if (character) {

    document.documentElement.style.setProperty(
    "--p-color",
    character.pcolor
);
    document.getElementById("characterName").textContent =
        character.name;

    document.getElementById("characterSubtitle").textContent =
        character.subtitle;

    document.getElementById("characterImage").src =
        character.image;

    document.body.style.backgroundColor =
        character.backgroundColor;
}
document.getElementById("weaponImage").src =
    character.weapon.image;

document.getElementById("weaponName").textContent =
    character.weapon.name;
const weaponDescription =
    document.getElementById("weaponDescription");

character.weapon.description.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    weaponDescription.appendChild(p);
});
document.getElementById("artifactImage").src =
    character.artifact.image;

document.getElementById("artifactName").textContent =
    character.artifact.name;

const artifactDescription =
    document.getElementById("artifactDescription");

character.artifact.description.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    artifactDescription.appendChild(p);
});
document.getElementById("talentPriority").textContent =
    character.talents.priority.join(" → ");
    const talentImages =
    document.getElementById("talentImages");

character.talents.images.forEach(image => {
    const img = document.createElement("img");

    img.src = image;

    talentImages.appendChild(img);
});
document.getElementById("talentDescription").textContent =
    character.talents.description;

   
const teamList = document.getElementById("teamList");

character.teams.forEach(team => {

    // 1. Tạo thẻ đội hình
    const teamCard = document.createElement("article");
    teamCard.className = "team-card";

    // 2. Tạo tiêu đề
    const teamTitle = document.createElement("h3");
    teamTitle.textContent = team.name;

    teamCard.appendChild(teamTitle);

    // 3. Tạo khu vực chứa nhân vật
    const teamCharacters = document.createElement("div");
    teamCharacters.className = "team-characters";

    // 4. Vòng lặp bên trong: duyệt từng thành viên
    team.members.forEach(member => {

        const img = document.createElement("img");

        img.src = member.image;
        img.alt = member.name;

        teamCharacters.appendChild(img);

    }); // Đóng vòng lặp thành viên

    // 5. Đưa 4 nhân vật vào thẻ đội hình
    teamCard.appendChild(teamCharacters);

    // 6. Đưa thẻ đội hình hoàn chỉnh vào trang
    teamList.appendChild(teamCard);
    const teamDescription = document.createElement("p");

teamDescription.textContent = team.description;

teamCard.appendChild(teamDescription);
teamCard.appendChild(teamCharacters);

}); // Đóng vòng lặp đội hình
