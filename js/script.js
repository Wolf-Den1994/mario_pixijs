const app = new PIXI.Application({
  width: 800,
  height: 450,
  backgroundColor: 0x777777,
});
document.body.appendChild(app.view);

const texturedefault = (container, path, setValue, x, y) => {
  const texture = PIXI.Texture.from(path);
  const sprite = new PIXI.Sprite(texture);
  sprite.anchor.set(setValue);
  container.addChild(sprite);
  sprite.x = x;
  sprite.y = y;
  return sprite;
}

const textureDividevByTo = (container, path, setValue, x, y, width, height) => {
  const texture = PIXI.Texture.from(path);
  const sprite = new PIXI.Sprite(texture);
  sprite.anchor.set(setValue);
  container.addChild(sprite);
  sprite.width = width;
  sprite.height = height;
  sprite.x = x + (sprite.width / 2);
  sprite.y = y + (sprite.height / 2);
  return sprite;
}

const text = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, trans, text, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: trans,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const textLaunches = (app, x, y) => {
  const style = new PIXI.TextStyle({
    fontSize: 17,
    fontFamily: 'Arial',
    fill: '#000000',
    fontWeight: '800',
    textTransform: 'uppercase',
    lineHeight: 1.5,
    textAlign: 'center',
    transform: 'matrix( 1.68893433153112,0,0,1.68893433153112,0,0)',
  });

  const richText = new PIXI.Text('LAUNCHES', style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
}

const textDate = (app, x, y) => {
  const style = new PIXI.TextStyle({
    fontSize: 22,
    fontFamily: 'Arial',
    fill: '#000000',
    fontWeight: '800',
    textTransform: 'uppercase',
    lineHeight: 1.5,
    textAlign: 'center',
    transform: 'matrix( 1.68893433153112,0,0,1.68893433153112,0,0)',
  });

  const richText = new PIXI.Text('OCTOBER 29', style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
}

const textMario = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrMario1 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrMario2 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrMario3 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const textLuigi = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrLuigi1 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrLuigi2 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrLuigi3 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const textPeach = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrPeach1 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrPeach2 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrPeach3 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const textYoshi = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrYoshi1 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrYoshi2 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrYoshi3 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const textDonkeyKong = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrDonkeyKong1 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrDonkeyKong2 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const descrDonkeyKong3 = (app, x, y, fz, ff, fill, fw, textTr, lh, textA, text, transform, stroke, strokeT) => {
  const style = new PIXI.TextStyle({
    fontSize: fz,
    fontFamily: ff,
    fill: fill,
    stroke: stroke,
    strokeThickness: strokeT,
    fontWeight: fw,
    textTransform: textTr,
    lineHeight: lh,
    textAlign: textA,
    transform: transform,
  });

  const richText = new PIXI.Text(text, style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
  return richText;
}

const textTH = (app, x, y) => {
  const style = new PIXI.TextStyle({
    fontSize: 13,
    fontFamily: 'Arial',
    fill: '#000000',
    fontWeight: '800',
    textTransform: 'uppercase',
    lineHeight: 1.5,
    textAlign: 'center',
    transform: 'matrix( 1.68893433153112,0,0,1.68893433153112,0,0)',
  });

  const richText = new PIXI.Text('TH', style);
  richText.x = x;
  richText.y = y;

  app.stage.addChild(richText);
}

const container = new PIXI.Container();
app.stage.addChild(container);

const bg0 = texturedefault(container, "./images/bg0.png", 0, 0, 0);
texturedefault(container, "./images/bg-right.png", 1, app.screen.width, app.screen.height);
texturedefault(container, "./images/nintendoSwitchLogo.png", 0, 0, 0);
textureDividevByTo(container, "./images/little.png", 0.5, 17, 382, 46, 56);
textureDividevByTo(container, "./images/logo.png", 0.5, 133, 285, 179, 120);
const swipeText = text(app, 70, 414, 18, 'Arial', '#ffffff', 'bold', 'uppercase', 0.651, 'center',
  'matrix( 0.6297563495321,-3.23369280136321e-16,0,0.6297563495321,0,0)', 'SWIPE TO MEET SOME CHARACTERS!', '#000000',
  4);

const rightData = () => {
  textureDividevByTo(container, "./images/TAGLINE.png", 0.5, 634, 64, 105, 71);
  textureDividevByTo(container, "./images/BUTTONWatchVideo.png", 0.5, 525, 327, 179, 35);
  textureDividevByTo(container, "./images/BUTTONLearnMore.png", 0.5, 455, 374, 318, 55);
  textureDividevByTo(container, "./images/ESHOPBUTTON.png", 0.5, 634, 226, 105, 73);
  textureDividevByTo(container, "./images/Packshot.png", 0.5, 456, 64, 145, 235);
  textureDividevByTo(container, "./images/Rectangle.png", 0.5, 549, 152, 319, 58);
  textureDividevByTo(container, "./images/NintendoLogo.png", 0.5, 663, 0, 92, 57 - 17);
  textLaunches(app, 650, 162);
  textDate(app, 610, 178);
  textTH(app, 765, 177);
}
rightData();

const options = {
  amplitude: 300,
  wavelength: 0, // 300
  speed: 1100,
  brightness: 1,
  radius: -1,
}

const shockwaveFilter = new PIXI.filters.ShockwaveFilter([
  app.screen.width / 2,
  app.screen.height / 2,
], options, 0);
container.filters = [shockwaveFilter];

const canvas = document.querySelector('canvas');

const checkIsClickRightButton = (x, y) => {
  const rightButtonTopY = 232, rightButtonBottomY = 287;
  const rightButtonLeftX = 450, rightButtonRightX = 492;
  return (x > rightButtonLeftX && x < rightButtonRightX && y > rightButtonTopY && y < rightButtonBottomY);
}

const checkIsClickLeftButton = (x, y) => {
  const rightButtonTopY = 236, rightButtonBottomY = 283;
  const rightButtonLeftX = 96, rightButtonRightX = 123;
  return (x > rightButtonLeftX && x < rightButtonRightX && y > rightButtonTopY && y < rightButtonBottomY);
}

const touchMoveHandle = () => {
  let numberChar = 0; // mario = 0
  let cancelDoubleClick = 1;
  let myReq;
  let x1 = null;
  let y1 = null;
  shockwaveFilter.wavelength = 300;
  app.ticker.add(slide1To2);
  bg0.visible = false;
  swipeText.visible = false;

  texturedefault(container, "./images/background.png", 0, 0, 0);
  texturedefault(container, "./images/nintendoSwitchLogo.png", 0, 0, 0);
  textureDividevByTo(container, "./images/little.png", 0.5, 8, 388, 46, 56);
  texturedefault(container, "./images/bg-right.png", 1, app.screen.width, app.screen.height);
  rightData();

  const nameMario = textMario(app, 177, 65, 25, 'Arial', '#ffffff', 'bold', 'uppercase', 0.76,
    'center', 'MARIO', '#32275a', 9);
  const mario = textureDividevByTo(container, "./images/MARIO.png", 0.5, 232, 127, 200, 257); //143,157,140,180
  mario.x = 232;
  const textMario1 = descrMario1(app, 94, 373, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', 'THE MAIN HERO OF THE MUSHROOM',
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);
  const textMario2 = descrMario2(app, 97, 388, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', 'KINGDOM. MARIO IS ALWAYS BRING',
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);
  const textMario3 = descrMario3(app, 155, 402, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', 'AND CHEERFUL.',
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);

  const nameLuigi = textLuigi(app, 177, 65, 25, 'Arial', '#ffffff', 'bold', 'uppercase', 0.76,
    'center', 'LUIGI', '#32275a', 9);
  const luigi = textureDividevByTo(container, "./images/LUIGI.png", 0.5, 232, 127, 200, 257); //143,157,140,180
  const textLuigi1 = descrLuigi1(app, 94, 373, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', "MARIO'S BROTHER AND FELLOW HERO",
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);
  const textLuigi2 = descrLuigi2(app, 89, 388, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', 'OF THE MUSHROOM KINGDOM. LUIGI IS',
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);
  const textLuigi3 = descrLuigi3(app, 110, 402, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', 'KIND BUT CAN BE A BIT NERVOUS.',
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);

  const namePeach = textPeach(app, 112, 65, 25, 'Arial', '#ffffff', 'bold', 'uppercase', 0.76,
    'center', 'PRINCESS PEACH', '#32275a', 9);
  const peach = textureDividevByTo(container, "./images/PEACH.png", 0.5, 232, 127, 200, 257); //143,157,140,180
  const textPeach1 = descrPeach1(app, 94, 373, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', "THE BELOVED PRINCESS OF THE",
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);
  const textPeach2 = descrPeach2(app, 91, 388, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', 'MUSHROOM KINGDOM AND GOOD',
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);
  const textPeach3 = descrPeach3(app, 130, 402, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', 'FRIENDS IS MARIO.',
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);

  const nameYoshi = textYoshi(app, 177, 65, 25, 'Arial', '#ffffff', 'bold', 'uppercase', 0.76,
    'center', 'YOSHI', '#32275a', 9);
  const yoshi = textureDividevByTo(container, "./images/YOSHI.png", 0.5, 232, 127, 200, 257); //143,157,140,180
  const textYoshi1 = descrYoshi1(app, 94, 373, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', "MARIO'S DEPENDABLE COMPANION",
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);
  const textYoshi2 = descrYoshi2(app, 89, 388, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', "WHO HAILS FROM YOSHI'S ISLAND.",
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);
  const textYoshi3 = descrYoshi3(app, 110, 402, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', 'YOSHI IS KING AND CAREFREE.',
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);

  const nameDonkeyKong = textDonkeyKong(app, 124, 65, 25, 'Arial', '#ffffff', 'bold', 'uppercase', 0.76,
    'center', 'DONKEY KONG', '#32275a', 9);
  const donkeyKong = textureDividevByTo(container, "./images/DONKEY_KONG.png", 0.5, 232, 127, 300, 257); //143,157,140,180
  const textDonkeyKong1 = descrDonkeyKong1(app, 92, 373, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', "THE KING OF THE JUNGLE. HE LOVES",
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);
  const textDonkeyKong2 = descrDonkeyKong2(app, 89, 388, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', 'BANANAS AND ALWAYS KEEP A LARGE',
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);
  const textDonkeyKong3 = descrDonkeyKong3(app, 100, 402, 13, 'Arial', '#32275a', 900, 'uppercase', 12,
    'center', 'STASH OF THEM IN HIS TREEHOUSE.',
    'matrix( 0.96418640788017,0,0,0.96418640788017,0,0)', '#ffffff', 3);

  textureDividevByTo(container, "./images/LEFT_ARROW.png", 0.5, 8, 210, 25, 42);
  textureDividevByTo(container, "./images/RIGHT_ARROW.png", 0.5, 374, 210, 25, 42);

  function alphaAll(image, name, desc1, desc2, desc3) {
    image.alpha = 0;
    name.alpha = 0;
    desc1.alpha = 0;
    desc2.alpha = 0;
    desc3.alpha = 0;
  }

  alphaAll(luigi, nameLuigi, textLuigi1, textLuigi2, textLuigi3)
  alphaAll(peach, namePeach, textPeach1, textPeach2, textPeach3)
  alphaAll(yoshi, nameYoshi, textYoshi1, textYoshi2, textYoshi3)
  alphaAll(donkeyKong, nameDonkeyKong, textDonkeyKong1, textDonkeyKong2, textDonkeyKong3)

  const arrayChars = [mario, luigi, peach, yoshi, donkeyKong];
  const arrayNameChars = [nameMario, nameLuigi, namePeach, nameYoshi, nameDonkeyKong];
  const arrayDesc1 = [textMario1, textLuigi1, textPeach1, textYoshi1, textDonkeyKong1];
  const arrayDesc2 = [textMario2, textLuigi2, textPeach2, textYoshi2, textDonkeyKong2];
  const arrayDesc3 = [textMario3, textLuigi3, textPeach3, textYoshi3, textDonkeyKong3];

  const rightSwipe = () => {
    if (numberChar < 4) {
      if (cancelDoubleClick !== numberChar) {
        cancelDoubleClick = numberChar;
        animateRight();
      }
    }
  }

  const leftSwipe = () => {
    if (numberChar > 0) {
      if (cancelDoubleClick !== numberChar) {
        cancelDoubleClick = numberChar;
        animateLeft();
      }
    }
  }

  function nextOrPrevSlide(e) {
    x1 = e.touches[0].clientX;
    y1 = e.touches[0].clientY;
    if (checkIsClickRightButton(x1, y1)) {
      rightSwipe();
    }
    if (checkIsClickLeftButton(x1, y1)) {
      leftSwipe();
    }
  }

  function touchMoveSlide(e) {
    if (!x1 || !y1) return false;

    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;
    let xDiff = x2 - x1, yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        leftSwipe();
      } else {
        rightSwipe();
      }
    }
  }

  function animateRight() {
    arrayChars[numberChar].x -= 2;
    arrayChars[numberChar].alpha -= 0.05;
    arrayChars[numberChar + 1].x -= 2;
    arrayChars[numberChar + 1].alpha += 0.05;

    arrayNameChars[numberChar].alpha -= 0.1;

    arrayDesc1[numberChar].alpha -= 0.1;
    arrayDesc2[numberChar].alpha -= 0.1;
    arrayDesc3[numberChar].alpha -= 0.1;

    myReq = requestAnimationFrame(animateRight);

    if (arrayChars[numberChar + 1].x === 200) {
      cancelAnimationFrame(myReq);

      arrayNameChars[numberChar + 1].alpha = 1;
      arrayDesc1[numberChar + 1].alpha = 1;
      arrayDesc2[numberChar + 1].alpha = 1;
      arrayDesc3[numberChar + 1].alpha = 1;

      arrayChars[numberChar].alpha = 0
      arrayNameChars[numberChar].alpha = 0;
      arrayDesc1[numberChar].alpha = 0;
      arrayDesc2[numberChar].alpha = 0;
      arrayDesc3[numberChar].alpha = 0;
      arrayChars[numberChar].x = 70;
      numberChar++;
      cancelDoubleClick++;
      cancelDoubleClick++;
    }
  }

  function animateLeft() {
    arrayChars[numberChar - 1].x += 2;
    arrayChars[numberChar - 1].alpha += 0.05;
    arrayChars[numberChar].x += 2;
    arrayChars[numberChar].alpha -= 0.05;

    arrayNameChars[numberChar].alpha -= 0.1;

    arrayDesc1[numberChar].alpha -= 0.1;
    arrayDesc2[numberChar].alpha -= 0.1;
    arrayDesc3[numberChar].alpha -= 0.1;

    myReq = requestAnimationFrame(animateLeft);

    if (arrayChars[numberChar - 1].x === 232) {
      cancelAnimationFrame(myReq);

      arrayNameChars[numberChar - 1].alpha = 1;
      arrayDesc1[numberChar - 1].alpha = 1;
      arrayDesc2[numberChar - 1].alpha = 1;
      arrayDesc3[numberChar - 1].alpha = 1;

      arrayChars[numberChar].alpha = 0
      arrayNameChars[numberChar].alpha = 0;
      arrayDesc1[numberChar].alpha = 0;
      arrayDesc2[numberChar].alpha = 0;
      arrayDesc3[numberChar].alpha = 0;
      arrayChars[numberChar - 1].x = 232;
      numberChar--;
      cancelDoubleClick--;
      cancelDoubleClick--;
    }
  }

  canvas.addEventListener('touchstart', nextOrPrevSlide);
  canvas.addEventListener('touchmove', touchMoveSlide);
}

const checkCoordinateVideo = (x, y) => {
  const videoMinX = 615, videoMaxX = 790;
  const videoMinY = 358, videoMaxY = 390;
  return (x > videoMinX && x < videoMaxX && y > videoMinY && y < videoMaxY);
}

const checkCoordinatePlayMarket = (x, y) => {
  const playMinX = 550, playMaxX = 860;
  const playMinY = 405, playMaxY = 455;
  return (x > playMinX && x < playMaxX && y > playMinY && y < playMaxY);
}

const linksHandle = (e) => {
  const x = e.touches[0].clientX, y = e.touches[0].clientY;
  if (checkCoordinateVideo(x, y)) document.location.href = "https://www.youtube.com/";
  if (checkCoordinatePlayMarket(x, y)) document.location.href = "https://play.google.com/";
}

canvas.addEventListener('touchmove', touchMoveHandle, {once: true});
canvas.addEventListener('touchstart', linksHandle);

function slide1To2() {
  shockwaveFilter.time += 0.01;
}