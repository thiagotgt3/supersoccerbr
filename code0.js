gdjs.menuCode = {};
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDNewSprite2Objects1= [];
gdjs.menuCode.GDNewSprite2Objects2= [];
gdjs.menuCode.GDNewSprite4Objects1= [];
gdjs.menuCode.GDNewSprite4Objects2= [];
gdjs.menuCode.GDNewSprite3Objects1= [];
gdjs.menuCode.GDNewSprite3Objects2= [];
gdjs.menuCode.GDNewSprite5Objects1= [];
gdjs.menuCode.GDNewSprite5Objects2= [];
gdjs.menuCode.GDShareObjects1= [];
gdjs.menuCode.GDShareObjects2= [];
gdjs.menuCode.GDSkypeObjects1= [];
gdjs.menuCode.GDSkypeObjects2= [];
gdjs.menuCode.GDGooglePlayStoreObjects1= [];
gdjs.menuCode.GDGooglePlayStoreObjects2= [];
gdjs.menuCode.GDMessengerObjects1= [];
gdjs.menuCode.GDMessengerObjects2= [];
gdjs.menuCode.GDFacebookObjects1= [];
gdjs.menuCode.GDFacebookObjects2= [];
gdjs.menuCode.GDAdsObjects1= [];
gdjs.menuCode.GDAdsObjects2= [];
gdjs.menuCode.GDLinkedinObjects1= [];
gdjs.menuCode.GDLinkedinObjects2= [];
gdjs.menuCode.GDWhatsappObjects1= [];
gdjs.menuCode.GDWhatsappObjects2= [];
gdjs.menuCode.GDYoutubeObjects1= [];
gdjs.menuCode.GDYoutubeObjects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.menuCode.GDNewSpriteObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.menuCode.GDNewSprite2Objects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.menuCode.GDNewSprite4Objects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.menuCode.GDNewSprite5Objects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDFacebookObjects1Objects = Hashtable.newFrom({"Facebook": gdjs.menuCode.GDFacebookObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDWhatsappObjects1Objects = Hashtable.newFrom({"Whatsapp": gdjs.menuCode.GDWhatsappObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDLinkedinObjects1Objects = Hashtable.newFrom({"Linkedin": gdjs.menuCode.GDLinkedinObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDSkypeObjects1Objects = Hashtable.newFrom({"Skype": gdjs.menuCode.GDSkypeObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDYoutubeObjects1Objects = Hashtable.newFrom({"Youtube": gdjs.menuCode.GDYoutubeObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDGooglePlayStoreObjects1Objects = Hashtable.newFrom({"GooglePlayStore": gdjs.menuCode.GDGooglePlayStoreObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.menuCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.menuCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.menuCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.menuCode.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite5Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.adMob.setupBanner("ca-app-pub-4043765559226642/7386731196", "", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-4043765559226642/6073649524", "", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.adMob.showBanner();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Facebook"), gdjs.menuCode.GDFacebookObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDFacebookObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15980676);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.facebook.com/sharer/sharer.php?u=https://play.google.com/store/apps/details?id=app.thiago.soccebr\n", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Whatsapp"), gdjs.menuCode.GDWhatsappObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDWhatsappObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15981732);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://wa.me/?text=Confira Brasil Soccer https://www.youtube.com/watch?v=t-e75fWxaZA&t=7s\n", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Linkedin"), gdjs.menuCode.GDLinkedinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDLinkedinObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15982772);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.linkedin.com/sharing/share-offsite/?url=https://youtu.be/t-e75fWxaZA\n", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skype"), gdjs.menuCode.GDSkypeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDSkypeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15983556);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://join.skype.com/invite/bwxaDwcqGKZq\n", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Youtube"), gdjs.menuCode.GDYoutubeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDYoutubeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15984812);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtube.com/rollbrasil", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GooglePlayStore"), gdjs.menuCode.GDGooglePlayStoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDGooglePlayStoreObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15985804);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://play.google.com/store/apps/dev?id=7116791576701423724", runtimeScene);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;
gdjs.menuCode.GDNewSprite4Objects1.length = 0;
gdjs.menuCode.GDNewSprite4Objects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewSprite5Objects1.length = 0;
gdjs.menuCode.GDNewSprite5Objects2.length = 0;
gdjs.menuCode.GDShareObjects1.length = 0;
gdjs.menuCode.GDShareObjects2.length = 0;
gdjs.menuCode.GDSkypeObjects1.length = 0;
gdjs.menuCode.GDSkypeObjects2.length = 0;
gdjs.menuCode.GDGooglePlayStoreObjects1.length = 0;
gdjs.menuCode.GDGooglePlayStoreObjects2.length = 0;
gdjs.menuCode.GDMessengerObjects1.length = 0;
gdjs.menuCode.GDMessengerObjects2.length = 0;
gdjs.menuCode.GDFacebookObjects1.length = 0;
gdjs.menuCode.GDFacebookObjects2.length = 0;
gdjs.menuCode.GDAdsObjects1.length = 0;
gdjs.menuCode.GDAdsObjects2.length = 0;
gdjs.menuCode.GDLinkedinObjects1.length = 0;
gdjs.menuCode.GDLinkedinObjects2.length = 0;
gdjs.menuCode.GDWhatsappObjects1.length = 0;
gdjs.menuCode.GDWhatsappObjects2.length = 0;
gdjs.menuCode.GDYoutubeObjects1.length = 0;
gdjs.menuCode.GDYoutubeObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
