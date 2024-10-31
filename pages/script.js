const spidermanThemes = {
  'tobey-maguire': '/assets/musics/tobey-maguire-theme.mp3',
  'tom-holland': '/assets/musics/tom-holland-theme.mp3',
  'andrew-garfield': '/assets/musics/andrew-garfield-theme.mp3',
  'miles-morales': '/assets/musics/miles-morales-theme.mp3'
};

function playSpidermanTheme(spidermanPage) {
  console.log('Tocando música tema do Spiderman selecionado...');
  const spidermanTheme = document.getElementById('spiderman-theme');
  spidermanTheme.src = spidermanThemes[spidermanPage];
  spidermanTheme.play();
}

