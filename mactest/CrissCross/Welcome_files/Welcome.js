// Created by iWeb 3.0.2 local-build-20240930

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,9,251),url:'Welcome_files/stroke.png'},{rect:new IWRect(-7,-5,11,10),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(4,-5,391,10),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(395,-7,9,12),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(395,5,7,251),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(395,256,9,7),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(4,256,391,7),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-6,256,10,5),url:'Welcome_files/stroke_7.png'}],new IWSize(400,260))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
