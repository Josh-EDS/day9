let model = prompt("Lien de votre model 3D au format glb : (Si vous n'en avez pas appuyez sur cancel pour voir la demo)")
if (model != null) 
document.getElementById("replace").innerHTML = '<model-viewer autoplay src=\"'+model+'\" ar shadow-intensity=\"1\" camera-controls touch-action=\"pan-y\"></model-viewer>';